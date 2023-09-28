
export function Info() {
    return (
      <div className="max-w-5xl m-auto px-4 w-full py-28" id="features">
        <div className="pb-20 flex flex-col items-center">
          <p className="sm:text-4xl text-center text-2xlpb-4">
            Build, ship, and make money quicker
          </p>
          <p className="sm:text-lg max-w-[70ch] text-center">
            Login, payments, emails, dashboard, user settings and more available to
            you instantly. Build off our boilerplate and spend more time building your
            startup.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-8 gap-14">
          <div className="flex flex-col">
            <div className="">
              <lord-icon
                src="https://cdn.lordicon.com/scqxhtnc.json"
                trigger="hover"
                colors="primary:#A2ABB7"
                className="w-6 h-6"
              />
            </div>
            <p className="font-medium text-lg pt-2 pb-4">Emails</p>
            <div className="flex flex-col gap-2">
              <div className="text-sm flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=""
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p>Send transactional emails</p>
              </div>
              <div className="text-sm flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=""
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p>Create custom emails using react-email</p>
              </div>
              <div className="text-sm flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=""
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p>Powered using Resend</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="">
              <lord-icon
                src="https://cdn.lordicon.com/xxwwxrom.json"
                trigger="hover"
                colors="primary:#A2ABB7"
                className="w-6 h-6"
              />
            </div>
            <p className="font-medium text-lg pt-2 pb-4">Payments</p>
            <div className="flex flex-col gap-2">
              <div className="text-sm flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=""
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p>Create custom pricing plans</p>
              </div>
              <div className="text-sm flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=""
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p>Customer portal</p>
              </div>
              <div className="text-sm flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=""
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p>Powered using Stripe</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="">
              <lord-icon
                src="https://cdn.lordicon.com/hnqulzul.json"
                trigger="hover"
                colors="primary:#A2ABB7"
                className="w-6 h-6"
              />
            </div>
            <p className="font-medium text-lg pt-2 pb-4">Authentication</p>
            <div className="flex flex-col gap-2">
              <div className="text-sm flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=""
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p>Magic links setup</p>
              </div>
              <div className="text-sm flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=""
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p>Login with Google, GitHub, Discord</p>
              </div>
              <div className="text-sm flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=""
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p>User data stored in your DB</p>
              </div>
              <div className="text-sm flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=""
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p>Secured pages and routes</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="">
              <lord-icon
                src="https://cdn.lordicon.com/awvjmoyp.json"
                trigger="hover"
                colors="primary:#A2ABB7"
                className="w-6 h-6"
              />
            </div>
            <p className="font-medium text-lg pt-2 pb-4">Components</p>
            <div className="flex flex-col gap-2">
              <div className="text-sm flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=""
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p>Pre-built component library</p>
              </div>
              <div className="text-sm flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=""
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p>100% customizable</p>
              </div>
              <div className="text-sm flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=""
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p>Built using ShadCN UI</p>
              </div>
              <div className="text-sm flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=""
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p>Tailwind</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="">
              <lord-icon
                src="https://cdn.lordicon.com/bebbaehj.json"
                trigger="hover"
                colors="primary:#A2ABB7"
                className="w-6 h-6"
              />
            </div>
            <p className="font-medium text-lg pt-2 pb-4">Database</p>
            <div className="flex flex-col gap-2">
              <div className="text-sm flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=""
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p>MySQL, Mongo, Postgres</p>
              </div>
              <div className="text-sm flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=""
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p>Prisma ORM</p>
              </div>
              <div className="text-sm flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=""
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p>Schema included</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="">
              <lord-icon
                src="https://cdn.lordicon.com/zlllsfoh.json"
                trigger="hover"
                colors="primary:#A2ABB7"
                className="w-6 h-6"
              />
            </div>
            <p className="font-medium text-lg pt-2 pb-4">Extras</p>
            <div className="flex flex-col gap-2">
              <div className="text-sm flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=""
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p>Admin dashboard</p>
              </div>
              <div className="text-sm flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=""
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p>Create and update pricing plans</p>
              </div>
              <div className="text-sm flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=""
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p>Blog using markdown</p>
              </div>
              <div className="text-sm flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=""
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p>File uploads</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    )
  }