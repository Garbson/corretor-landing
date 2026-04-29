interface Env {
  ASSETS: Fetcher;
}

const ogData = {
  pt: {
    title: "Gutthierry Mariano - Corretor de Imóveis",
    description:
      "Especialista em investimentos imobiliários em Itapema e Porto Belo - Santa Catarina. Alto potencial de valorização, análise estratégica e acesso exclusivo ao pré-lançamento.",
    url: "https://gutthierryimoveis.com/br",
    locale: "pt_BR",
  },
  en: {
    title: "Gutthierry Mariano - Real Estate Broker",
    description:
      "Specialist in real estate investments in Itapema and Porto Belo - Santa Catarina, Brazil. High appreciation potential, strategic analysis and exclusive pre-launch access.",
    url: "https://gutthierryimoveis.com/en",
    locale: "en_US",
  },
  es: {
    title: "Gutthierry Mariano - Corredor de Bienes Raíces",
    description:
      "Especialista en inversiones inmobiliarias en Itapema y Porto Belo - Santa Catarina, Brasil. Alto potencial de valorización, análisis estratégico y acceso exclusivo al pre-lanzamiento.",
    url: "https://gutthierryimoveis.com/es",
    locale: "es_ES",
  },
};

const localeMap: Record<string, keyof typeof ogData> = {
  "/": "pt",
  "/br": "pt",
  "/en": "en",
  "/es": "es",
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const locale = localeMap[url.pathname];

    if (!locale) {
      return env.ASSETS.fetch(request);
    }

    const assetRequest = new Request(
      new URL("/index.html", request.url).toString(),
      request
    );
    const response = await env.ASSETS.fetch(assetRequest);
    let html = await response.text();
    const og = ogData[locale];

    html = html
      .replace(
        /(<meta\s+property="og:title"\s+content=")[^"]*(")/,
        `$1${og.title}$2`
      )
      .replace(
        /(<meta\s+property="og:description"\s+content=")[^"]*(")/,
        `$1${og.description}$2`
      )
      .replace(
        /(<meta\s+property="og:url"\s+content=")[^"]*(")/,
        `$1${og.url}$2`
      )
      .replace(
        /(<meta\s+property="og:locale"\s+content=")[^"]*(")/,
        `$1${og.locale}$2`
      )
      .replace(
        /(<meta\s+name="description"\s+content=")[^"]*(")/,
        `$1${og.description}$2`
      )
      .replace(
        /(<meta\s+name="twitter:title"\s+content=")[^"]*(")/,
        `$1${og.title}$2`
      )
      .replace(
        /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/,
        `$1${og.description}$2`
      );

    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
        "cache-control": "public, max-age=3600",
      },
    });
  },
};
