const ogData = {
  fr: {
    title: "Gutthierry Mariano - Courtier Immobilier",
    description:
      "Spécialiste en investissements immobiliers à Itapema et Porto Belo - Santa Catarina, Brésil. Fort potentiel de valorisation, analyse stratégique et accès exclusif au pré-lancement.",
    url: "https://gutthierryimoveis.com/fr",
    locale: "fr_FR",
  },
  pt: {
    title: "Gutthierry Mariano - Corretor de Imóveis",
    description:
      "Especialista em investimentos imobiliários em Itapema e Porto Belo - Santa Catarina. Alto potencial de valorização, análise estratégica e acesso exclusivo ao pré-lançamento.",
    url: "https://gutthierryimoveis.com/pt",
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
  "/pt": "pt",
  "/br": "pt",
  "/en": "en",
  "/es": "es",
  "/fr": "fr",
};

async function serveIndex(request: Request, env: any, og: (typeof ogData)[keyof typeof ogData]): Promise<Response> {
  const indexUrl = new URL("/index.html", request.url).toString();
  const response = await env.ASSETS.fetch(new Request(indexUrl));

  if (!response.ok) return response;

  let html = await response.text();

  html = html
    .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/g, `$1${og.description}$2`)
    .replace(/(<meta\s+property="og:title"\s+content=")[^"]*(")/g, `$1${og.title}$2`)
    .replace(/(<meta\s+property="og:description"\s+content=")[^"]*(")/g, `$1${og.description}$2`)
    .replace(/(<meta\s+property="og:url"\s+content=")[^"]*(")/g, `$1${og.url}$2`)
    .replace(/(<meta\s+property="og:locale"\s+content=")[^"]*(")/g, `$1${og.locale}$2`)
    .replace(/(<meta\s+name="twitter:title"\s+content=")[^"]*(")/g, `$1${og.title}$2`)
    .replace(/(<meta\s+name="twitter:description"\s+content=")[^"]*(")/g, `$1${og.description}$2`);

  return new Response(html, {
    status: 200,
    headers: { "content-type": "text/html;charset=UTF-8" },
  });
}

export default {
  async fetch(request: Request, env: any): Promise<Response> {
    const url = new URL(request.url);
    const locale = localeMap[url.pathname];

    if (locale) {
      return serveIndex(request, env, ogData[locale]);
    }

    // Arquivos estáticos (.js, .css, imagens, etc.)
    const assetResponse = await env.ASSETS.fetch(request);
    if (assetResponse.status !== 404) return assetResponse;

    // SPA fallback — rotas do Vue não encontradas como arquivo
    return serveIndex(request, env, ogData.pt);
  },
};
