// @ts-nocheck


import { type NextRequest } from 'next/server'
import { people } from '@/data/people'

export async function GET(
    request: Request,
    { params }: { params: { name: string } }
  ) {
    const name = params.name
    if (name=="Premium" || name =="Enterprise") {
        return Response.json(people)
    }
    return Response.json([])
}