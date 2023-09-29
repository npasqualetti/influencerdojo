// @ts-nocheck

"use client";
import { people } from "@/data/people"

export default function Home() {

  return (
    <>
      <main className='min-h-screen'>
        <div className='p-4 min-h-screen grid md:grid-cols-1 grid-cols-1 gap-4'>
          <PeopleDataTable columns={columns} data={people} />
        </div>
      </main>
    </>
  );
}

