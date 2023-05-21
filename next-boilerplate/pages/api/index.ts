// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import type { Sample } from '@/types/Sample';

type Data = {
    data: Array<Sample>
}

async function fetchMockData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/');
    return await res.json();
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const data = await fetchMockData();
    res.status(200).json({ data });
}
