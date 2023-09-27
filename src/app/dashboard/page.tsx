// @ts-nocheck

"use client";
import { useState, useEffect } from "react"
import PeopleDataTable from "@/components/data-table";
import { columns } from "@/components/columns";
import { people } from "@/data/people"
import useUserSubscription from "@/lib/hooks/use-user-subscription"

export default function Home() {
  function getData(name, session) { 
    if (session?.user?.role == "Guest") {
      return people
    } else {
      if (name == "Free") {
        return people.slice(0,5)
      } else if (name == "Basic") {
        return people.slice(0,1000)
      } else if (name == "Pro") {
        return people
      } else {
        return []
      }
    }
  }
  const subscription = useUserSubscription()
  const subscriptionName = subscription?.subscriptions[0]?.name
  const data = getData(subscriptionName, {})
  return (
    <>
      <main className='min-h-screen'>
        <div className='p-4 min-h-screen grid md:grid-cols-1 grid-cols-1 gap-4'>
          <PeopleDataTable columns={columns} data={data} />
        </div>
      </main>
    </>
  );
}

