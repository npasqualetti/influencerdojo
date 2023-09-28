import Script from 'next/script';
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PricingTable } from "@/components/pricing-table";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/ui/feature-card";
import { getCompletedPlans } from "@/lib/billing";
import {
    ChevronRightCircle,
    Code2,
    CreditCard,
    Lock,
    Mail,
    Paintbrush,
    Server,
} from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const plans = await getCompletedPlans();

  return (
    <main>
      <Script
        src="https://cdn.lordicon.com/bhenfmcm.js"
        strategy="lazyOnload"
      />
      <Header />
      <Hero />
      <div className={"relative z-10"}>
        <div className="max-w-7xl z-10 border border-white/30 m-auto p-4 sm:p-8 bg-white/20 w-full rounded-3xl">
          <img
            src="/assets/billing.png"
            className="rounded-xl bg-black p-4 z-10"
          ></img>
        </div>
        <div className="top-20 bottom-20 w-full bg-gradient-conic from-rose-500 via-violet-400 to-amber-500 absolute z-[-1]" />
      </div>
      <Features />
      <Info />
      <div className="py-20 px-4" id="pricing">
        <PricingTable plans={plans} />
      </div>
      <Testimonial />
      <CTA />
      <Footer />
    </main>
  );
}

function Features() {
  return (
    <div className="max-w-4xl m-auto px-4 w-full py-20">
      <div className="grid sm:grid-cols-2 gap-8">
        <div className="flex flex-col gap-8">
          <FeatureCard
            icon={<Lock size={16} />}
            feature="Authentication"
            description="Use any OAuth provider supported by next-auth."
          />
          <FeatureCard
            icon={<CreditCard size={16} />}
            feature="Subscriptions"
            description="Create monthly and yearly billing plans. Let users manage thier billing plan."
          />
          <FeatureCard
            icon={<Paintbrush size={16} />}
            feature="Fully customizable"
            description="Fully customizable component library using Tailwind."
          />
        </div>
        <div className="flex flex-col gap-8">
          <FeatureCard
            icon={<Mail size={16} />}
            feature="Mail templates"
            description="Create email templates using react-email."
          />
          <FeatureCard
            icon={<Server size={16} />}
            feature="Serverless architecture"
            description="Deploy painlessly using Vercel or any serverless provider."
          />
          <FeatureCard
            icon={<Code2 size={16} />}
            feature="Developer experience"
            description="Easy to use, clean code, expertly crafted."
          />
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 flex-wrap max-w-7xl m-auto w-full px-4 sm:py-28 py-10">
      <div className="grid items-center w-full">
        <div className="flex flex-col">
          <h1 className="text-4xl sm:text-5xl">
            Build this weekend.
            <br />
            <span className="bg-gradient-to-r max-w-4xl from-violet-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
              Ship on monday.
            </span>
          </h1>
          <p className="py-6 text-sm sm:text-base lg:text-lg max-w-[40ch]">
            The best NextJS kit for starting and scaling your software business.
          </p>
          <div className="flex flex-col">
            <a href="">
              <Link href={"https://demo.influencerdojo.com"}>
                <Button
                  className="rounded-full"
                  variant="ghost"
                  size="sm"
                >
                  Demo
                  <ChevronRightCircle className="ml-2" size={16} />
                </Button>
              </Link>
              <Link href={"https://www.influencerdojo.com/auth/sign-in/"}>
                <Button 
                  className="rounded-full ml-2"
                  variant="ghost"
                  size="sm"
                >
                  Sign Up
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="black"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-zap ml-2"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </Button>
              </Link>
            </a>
            <p className="mt-2">
              Join <span className="font-semibold">100+</span> developers already
              shipping.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col relative sm:gap-0 gap-y-7 my-10 sm:my-0">
        <div style={{}} className="">
          <iframe
            className="w-full min-h-[275px] sm:min-h-[325px]"
            src="https://www.youtube.com/embed/B22lgdajizQ?si=6Avmd5j2mZrqulsf&start=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen=""
          />
        </div>
      </div>
    </div>

  );
}

function Info() {
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

function CTA() {
  return (
    <div className="flex flex-col w-full items-center py-28">
      <div className="flex flex-col items-center px-4">
        <h1 className="text-2xl sm:text-4xl text-center font-normal pb-4 bg-gradient-to-r max-w-4xl from-violet-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
          Join 100+ developers already shipping
        </h1>
        <p className="text-center text-sm w-fit rounded-lg ">
          Here's what developers are saying about us
        </p>
      </div>
        <div className="flex justify-center py-20">
          <a href="/auth/sign-in">
          <Link href={"https://www.influencerdojo.com/auth/sign-in/"}>
            <Button 
              className="rounded-full ml-2"
              variant="ghost"
              size="sm"
            >
              Sign Up
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="black"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-zap ml-2"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </Button>
          </Link>
        </a>
    </div>
  </div>

  )
}

function Testimonial () {
  return (
    <div id="case-study">
      <div className="max-w-4xl m-auto px-4 py-28">
        <div className="flex flex-col">
          <p className="px-4 text-sm w-fit py-2 rounded-lg font-semibold mb-8">
            CASE STUDY
          </p>
          <div className="flex flex-row items-start gap-8 flex-wrap sm:flex-nowrap">
            <div className="shrink-0">
              <img src="/cita.svg" className="h-20 w-20" />
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
              ship within two weeks a production ready marketplace. Here's why Cita
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