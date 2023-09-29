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
                <img src="/cita.svg" className="h-20 w-20" alt="Testimonial Image"/>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-2xl font-medium pb-4">
                  <a
                    className="underline hover:text-muted duration-150 bg-gradient-to-r max-w-4xl from-violet-500 via-rose-500 to-amber-500 bg-clip-text text-transparent"
                    href="https://www.citamarketplace.com"
                  >
                    Cita Marketplace
                  </a>
                  , built and scaled using saasplanet.
                </p>
                <p className="pb-2 max-w-[70ch]">
                  Building a app takes time, money, and a ton of effort. Setting up
                  payments, dashboards, and emails will cost thousands and take weeks
                  complete.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="max-w-[70ch] pb-4">
                Using our boilerplate, Cita Marketplace was able to build, test, and
                ship within two weeks a production ready marketplace. Here&quot;s why Cita
                used us to launch:
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
                    <span className="font-medium">Saved thousands</span>{" "}
                    {/* */}in developer costs and months in development time
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
                    <span className="font-medium">Reduced headache</span>{" "}
                    {/* */}setting up auth, emails, and payments
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
                    <span className="font-medium">Quickly profitable</span>{" "}
                    {/* */}and making money within days of launching
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-4 mt-12">
            <div className="grid sm:grid-cols-3 w-full gap-8">
              <div className="flex flex-col items-center border border-zinc-800 py-6 rounded-xl">
                <p className="text-xl font-medium">2,000+</p>
                <p className="text-sm">users</p>
              </div>
              <div className="flex flex-col items-center border border-zinc-800 py-6 rounded-xl">
                <p className="text-xl font-medium">$75,000</p>
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