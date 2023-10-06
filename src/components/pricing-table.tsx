"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { CompletedPlan } from "@/lib/billing";
import { cn } from "@/lib/utils";
import { AlertTriangle, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function PricingTable({
  contentLeft,
  plans,
  currentPlans,
}: {
  contentLeft?: React.ReactNode;
  plans: CompletedPlan[];
  currentPlans?: CompletedPlan[];
}) {
  const [yearly, setYearly] = useState(false);

  let highestPlan = currentPlans
    ?.sort((a, b) =>
      (a.stripe_price_monthly.unit_amount ?? 0) >
      (b.stripe_price_monthly.unit_amount ?? 0)
        ? 1
        : 0
    )
    .at(0);

  console.log(highestPlan);

  return (
    <div className="max-w-4xl m-auto w-full">
      <div className="flex justify-between items-center space-x-2 pb-8">
        <div>{contentLeft}</div>
        <div className="flex items-center space-x-2">
          <Label htmlFor="pricing-period">Billed monthly</Label>
          <Switch
            checked={yearly}
            onCheckedChange={(e) => setYearly(e)}
            id="pricing-period"
          />
          <Label htmlFor="pricing-period">Billed yearly</Label>
        </div>
      </div>
      {plans.length == 0 && (
        <div className="grid place-items-center px-4 py-10">
          <div className="flex items-center gap-4">
            <AlertTriangle />
            <p className="text-sm">
              There are no available subscription plans yet!
            </p>
          </div>
        </div>
      )}
      <div className={cn("grid gap-8", "sm:grid-cols-3")}>
        <div className="p-6 border dark:border-zinc-800 border-zinc-200 rounded-lg">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <p className="text-sm">Demo</p>
            </div>
            <div className="flex items-center py-8">
              <p className="text-4xl">Free</p>
            </div>
            <p className="text-sm opacity-80 py-4 w-full text-center border-y dark:border-zinc-800 border-zinc-200">
              Demo Plan
            </p>
            <div className="flex flex-col py-6 items-start w-full gap-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-emerald-600 dark:text-black text-white rounded-full grid place-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-sm">Free Demo Access</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-emerald-600 dark:text-black text-white rounded-full grid place-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-sm">Example Influencers</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-emerald-600 dark:text-black text-white rounded-full grid place-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-sm">Example Export</p>
              </div>
            </div>
            <div className="w-full">
              <a href="https://demo.influencerdojo.com" rel="noopener noreferrer" target="_blank">
                <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-10 px-4 py-2 rounded-full w-full">
                  Try Demo
                </button>
              </a>
            </div>
          </div>
        </div>

        {plans.map((item, index) => (
          <div
            key={index}
            className={cn(
              "p-6 border dark:border-zinc-800 border-zinc-200 rounded-lg",
              {
                "dark:border-emerald-600 border-emerald-400":
                  (currentPlans?.filter(
                    (item2) => item2.plan.id == item.plan.id
                  ).length ?? 0) > 0,
              }
            )}
          >
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2">
                <p className="text-sm">{item.plan.name}</p>
                {(currentPlans?.filter((item2) => item2.plan.id == item.plan.id)
                  .length ?? 0) > 0 && (
                  <Badge variant={"outline"}>Current plan</Badge>
                )}
              </div>
              <div className="flex items-center py-8">
                <p className="text-4xl">
                  $
                  {yearly
                    ? (item.stripe_price_yearly.unit_amount ?? 0) / 100
                    : (item.stripe_price_monthly.unit_amount ?? 0) / 100}
                </p>
                <p className="text-4xl">{yearly ? "/year" : "/mo"}</p>
              </div>
              <p className="text-sm opacity-80 py-4 w-full text-center border-y dark:border-zinc-800 border-zinc-200">
                {item.plan.description}
              </p>
              <div className="flex flex-col py-6 items-start w-full gap-6">
                {item.plan.features.split(",").map((feat, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-emerald-600 dark:text-black text-white rounded-full grid place-items-center">
                      <Check size={14} />
                    </div>
                    <p className="text-sm">{feat}</p>
                  </div>
                ))}
              </div>
              <div className="w-full">
                {(currentPlans?.filter((item2) => item2.plan.id == item.plan.id)
                  .length ?? 0) > 0 ? (
                  <Button disabled className="rounded-full w-full">
                    Active plan
                  </Button>
                ) : (
                  <>
                    {highestPlan ? (
                      <>
                        {
                          //@ts-ignore
                          highestPlan.stripe_price_monthly.unit_amount >
                          //@ts-ignore
                          item.stripe_price_monthly.unit_amount ? (
                            <Link href={"/checkout/portal"}>
                              <Button className="rounded-full w-full">
                                Downgrade
                              </Button>
                            </Link>
                          ) : (
                            <Link href={"/checkout/portal"}>
                              <Button className="rounded-full w-full">
                                Upgrade
                              </Button>
                            </Link>
                          )
                        }
                      </>
                    ) : (
                      <Link
                        href={
                          "/checkout/" +
                          (yearly
                            ? "" + item.plan.stripe_price_yearly_id
                            : "" + item.plan.stripe_price_monthly_id)
                        }
                      >
                        <Button className="rounded-full w-full">
                          Get Started
                        </Button>
                      </Link>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
        <div className="p-6 border dark:border-zinc-800 border-zinc-200 rounded-lg">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <p className="text-sm">Enterprise</p>
            </div>
            <div className="flex items-center py-8">
              <p className="text-4xl">Contact Us</p>
            </div>
            <p className="text-sm opacity-80 py-4 w-full text-center border-y dark:border-zinc-800 border-zinc-200">
              Premium Plan
            </p>
            <div className="flex flex-col py-6 items-start w-full gap-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-emerald-600 dark:text-black text-white rounded-full grid place-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-sm">10K+ Curated Leads</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-emerald-600 dark:text-black text-white rounded-full grid place-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-sm">Unlimited Data Requests</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-emerald-600 dark:text-black text-white rounded-full grid place-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-sm">Custom Feature Requests</p>
              </div>
            </div>
            <div className="w-full">
              <a href="mailto:support@influencerdojo.com">
                <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-10 px-4 py-2 rounded-full w-full">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
