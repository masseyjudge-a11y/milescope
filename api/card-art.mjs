/* GET /api/card-art?id=csr

   Serves the issuer's own product image for each card in the onboarding
   picker from this site's domain. Two reasons:
     - issuer CDNs aren't meant to be hotlinked, and a same-origin copy is
       one Vercel edge fetch per week instead of one per visitor;
     - a same-origin image can be read back from a canvas, which is how the
       picker trims the white or transparent margin some issuers bake in
       around the card (Chase's art has one; it showed as a frame).

   Only the ids below are served, so this is not an open proxy. */

const ART = {
  csr: "https://creditcards.chase.com/content/dam/jpmc-marketplace/card-art/sapphire_reserve_card_Halo.png",
  csp: "https://creditcards.chase.com/content/dam/jpmc-marketplace/card-art/sapphire-preferredcard2026.png",
  amex_plat: "https://www.aexp-static.com/online/myca/shared/summary/cardasset/images/NUS000000363_480x304_STRAIGHT_96.png",
  amex_gold: "https://www.aexp-static.com/online/myca/shared/summary/cardasset/images/NUS000000174_480x304_STRAIGHT_96.png",
  venture_x: "https://ecm.capitalone.com/WCM/card/products/venturex-cg-static-card-1000x630-2.png",
  bilt: "https://static.biltrewards.com/assets/wallet/bilt-tahoe.png",
  citi_premier: "https://aemapi.citi.com/content/dam/cfs/uspb/usmkt/cards/en/static/images/citi-strata-premier-credit-card/citi-strata-premier-credit-card_306x192.webp"
};

export async function GET(request) {
  const id = new URL(request.url).searchParams.get("id") || "";
  const src = Object.prototype.hasOwnProperty.call(ART, id) ? ART[id] : null;
  if (!src) return new Response("unknown card", { status: 404 });

  let upstream;
  try {
    upstream = await fetch(src, { headers: { accept: "image/avif,image/webp,image/png,image/*;q=0.8" } });
  } catch (e) {
    return new Response("upstream unreachable", { status: 502 });
  }
  const type = upstream.headers.get("content-type") || "";
  if (!upstream.ok || !type.startsWith("image/")) {
    return new Response("upstream " + upstream.status, { status: 502 });
  }
  return new Response(upstream.body, {
    status: 200,
    headers: {
      "content-type": type,
      // a week at the edge, and keep serving the old copy while refreshing
      "cache-control": "public, max-age=86400, s-maxage=604800, stale-while-revalidate=2592000"
    }
  });
}
