export default function CastNoShadowWebsite() {
  const amazonLink = "https://www.amazon.co.uk/";
  const bookByAppLink = "https://bookbyapp.com/";

  return (
    <div className="min-h-screen bg-[#2f211c] text-[#f1dfc4]">
      <section className="relative overflow-hidden border-b border-[#8a6a52]/40 bg-[radial-gradient(circle_at_top,_rgba(201,147,94,0.25),_transparent_45%),linear-gradient(180deg,#4d3428_0%,#2f211c_55%,#241915_100%)]">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage:"url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter><rect width=\"160\" height=\"160\" filter=\"url(%23n)\" opacity=\"0.18\"/></svg>')"}} />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:py-24">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#d6b089]">
              Growing up free meant growing up fast.
            </p>

            <div className="inline-block border-[6px] border-[#f1dfc4] bg-[#211712]/40 px-5 py-4 shadow-2xl shadow-black/30">
              <h1 className="text-5xl font-black uppercase leading-[0.88] tracking-tight text-[#f7ead6] sm:text-6xl md:text-7xl lg:text-8xl">
                Cast No<br />Shadow
              </h1>
            </div>

            <p className="mt-5 text-2xl font-serif italic text-[#f0dfca] md:text-3xl">
              A Memoir
            </p>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#ead7c0]/90 md:text-xl">
              A raw, funny and brutal coming-of-age story between 1989 and 1996 — the last truly free decade. Before phones. A time when kids disappeared all day, lived by reputation, and learnt who they were through music, sex, fights, drugs and brotherhood.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#ddc4aa]/85 md:text-lg">
              This website is built so you can easily swap your sales links later. Just edit the two link variables at the top of the file.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={amazonLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-[#f1dfc4]/70 bg-[#f1dfc4] px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.22em] text-[#2c1e18] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#fff1dd]"
              >
                Buy on Amazon
              </a>
              <a
                href={bookByAppLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-[#c89d72]/60 bg-[#3a2821]/60 px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.22em] text-[#f1dfc4] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#4a3329]"
              >
                BookByApp Link
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[500px]">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.8rem] bg-[radial-gradient(circle_at_top,_rgba(214,176,137,0.16),_transparent_42%)] blur-2xl" />
              <div className="relative rounded-[2.3rem] border border-[#c89d72]/25 bg-[#241915]/45 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur-sm">
                <div className="overflow-hidden rounded-[1.7rem] border border-[#ecd6b7]/12 bg-[#1b120f] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                  <img src="attachment://Cast No Shadow Book Cover.png" alt="Cast No Shadow book cover" className="w-full h-auto rounded-2xl shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-[#8a6a52]/40 bg-[#2a1d18]/80 p-8 shadow-xl shadow-black/20">
            <h2 className="font-serif text-3xl text-[#f3dfc4]">About the book</h2>
            <p className="mt-6 text-lg leading-8 text-[#e4ccb1]">
              This is a violent ride through the chaos of 90s rave culture and the rise of the Oasis Generation. When a group of Travellers move into the village, tensions erupt. One reckless act of violence triggers a chain of retaliation that drags Martin into a far darker world.
            </p>
            <blockquote className="mt-8 border-l-2 border-[#c89d72] pl-5 font-serif text-2xl italic leading-9 text-[#f2dfc8]">
              “We never expected to make it out. We never expected to regret it.”
            </blockquote>
          </div>

          <div className="rounded-[2rem] border border-[#8a6a52]/40 bg-[#2a1d18]/80 p-8 shadow-xl shadow-black/20">
            <h2 className="font-serif text-3xl text-[#f3dfc4]">Buy / Link out</h2>
            <p className="mt-6 text-lg leading-8 text-[#e4ccb1]">
              Use the buttons below for your live sales pages. These are placeholder links now, and you can change them anytime by editing two lines at the top of this file.
            </p>
            <div className="mt-8 space-y-4">
              <a
                href={amazonLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-[#d2b08b]/35 bg-[#3a2821] px-5 py-4 transition hover:bg-[#473027]"
              >
                <span className="font-semibold text-[#f7ead7]">Amazon book sales</span>
                <span className="text-sm uppercase tracking-[0.2em] text-[#d6b089]">Edit link</span>
              </a>
              <a
                href={bookByAppLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-[#d2b08b]/35 bg-[#3a2821] px-5 py-4 transition hover:bg-[#473027]"
              >
                <span className="font-semibold text-[#f7ead7]">BookByApp</span>
                <span className="text-sm uppercase tracking-[0.2em] text-[#d6b089]">Edit link</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#8a6a52]/35 bg-[#241915]">
        <div className="mx-auto max-w-7xl px-6 py-12 text-center md:px-10">
          <p className="font-serif text-2xl italic text-[#efd8bc]">
            Gritty. Wild. Unfiltered.
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.32em] text-[#c89d72]">
            Perfect for fans of Trainspotting and This Is England
          </p>
          <p className="mt-6 text-sm text-[#b99574]">© Martin J Pickering</p>
        </div>
      </section>
    </div>
  );
}
