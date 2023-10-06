// @ts-nocheck

"use client";
import { people } from "@/data/people"
import PeopleDataTable from "@/components/data-table";
import { columns } from "@/components/columns";
import { useEffect, useState } from "react";
import useUserSubscription from '@/lib/hooks/use-user-subscription';

export default function Home() {
  const [data, setData] = useState([]);
  const subData = useUserSubscription()

  useEffect(() => {
      if (!subData.loading) {
          console.log(subData)
          // Fetch data from the API route
          fetch('/api/influencers/' + subData.subscriptions[0].name)
          .then((response) => response.json())
          .then((data) => setData(data))
          .catch((error) => console.error('Error fetching data:', error));
      } 
  }, [subData.loading]);
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

