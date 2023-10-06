export function Testimonial () {
    return (
      <div id="case-study">
        <div className="max-w-4xl m-auto px-4 py-28">
          <div className="flex flex-col">
            <p className="px-4 text-sm w-fit py-2 rounded-lg font-semibold mb-8">
              CASE STUDY
            </p>
            <div className="flex flex-row items-start gap-8 flex-wrap sm:flex-nowrap">
              <div className="shrink-0">
                <img src="/assets/stockmvp.png" className="h-20 w-30" alt="Testimonial Image"/>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-2xl font-medium pb-4">
                  <a
                    className="underline hover:text-muted duration-150 bg-gradient-to-r max-w-4xl from-violet-500 via-rose-500 to-amber-500 bg-clip-text text-transparent"
                    href="https://www.stock-mvp.com"
                  >
                    StockMVP {" "}
                  </a>
                  scaled using Influencer Dojo.
                </p>
                <p className="pb-2 max-w-[70ch]">
                Influencer Dojo has been pivotal to our success. With access to over 10,000 curated leads, our engagement rates soared, resulting in a remarkable 40% increase in ROI. It&apos;s become an indispensable tool for streamlining influencer discovery, helping us make more informed decisions and driving our marketing efforts to new heights.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="max-w-[70ch] pb-4">
                Using our database, StockMVP was able to build, test, and
                start an email campaign within one week. Here&apos;s why StockMVP
                used us to grow:
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className=" shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <p className="text-sm">
                    <span className="font-medium">40% ROI Increase:</span>{" "}
                    {/* */}Boosted engagement rates and returns.
                  </p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className=" shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <p className="text-sm">
                    <span className="font-medium">Streamlined Discovery</span>{" "}
                    {/* */}Effortless influencer identification.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-4 mt-12">
            <div className="grid sm:grid-cols-3 w-full gap-8">
              <div className="flex flex-col items-center border border-zinc-800 py-6 rounded-xl">
                <p className="text-xl font-medium">600+</p>
                <p className="text-sm">users</p>
              </div>
              <div className="flex flex-col items-center border border-zinc-800 py-6 rounded-xl">
                <p className="text-xl font-medium">$75,000+</p>
                <p className="text-sm">revenue</p>
              </div>
              <div className="flex flex-col items-center border border-zinc-800 py-6 rounded-xl">
                <p className="text-xl font-medium">100,000+</p>
                <p className="text-sm">page views</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    )
  }