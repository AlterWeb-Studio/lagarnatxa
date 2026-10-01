export default {
  async fetch(request, env) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS, DELETE",
      "Access-Control-Allow-Headers": "*",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      const urlObj = new URL(request.url);

      // --- DATA DE CADUCITAT (sense canvis) ---
      if (urlObj.pathname === "/caducitat") {

        // 1. MODE MANUAL: si hi ha data fixa al KV, mana ella
        const dataManual = await env.KV_DATA.get("GARNATXA/DATA_CADUCITAT");
        if (dataManual) {
          return new Response(dataManual, { headers: corsHeaders });
        }

        // 2. MODE AUTOMÀTIC: primer accés + hores
        let primerAcces = await env.KV_DATA.get("GARNATXA/PRIMER_ACCES");
        if (!primerAcces) {
          primerAcces = new Date().toISOString();
          await env.KV_DATA.put("GARNATXA/PRIMER_ACCES",primerAcces);
        }

        const HORES_DE_PROVA = 48;
        const caducitat = new Date(
          new Date(primerAcces).getTime() + HORES_DE_PROVA * 60 * 60 * 1000
        );
        return new Response(caducitat.toISOString(), { headers: corsHeaders });
      }

      // --- LOGIN ADMIN (NOU) ---
      // Compara la clau rebuda (?p=xxx) amb la guardada al KV
      if (urlObj.pathname === "/login") {
        const clauRebuda = urlObj.searchParams.get("p");
        const clauReal = await env.KV_DATA.get("GARNATXA/ADMIN_PASS");

        const correcta = !!clauRebuda && !!clauReal && clauRebuda === clauReal;

        return new Response(JSON.stringify({ ok: correcta }), {
          status: correcta ? 200 : 401,
          headers: corsHeaders
        });
      }

      return new Response("Not found", { status: 404, headers: corsHeaders });

    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), {
        status: 500,
        headers: corsHeaders
      });
    }
  }
};