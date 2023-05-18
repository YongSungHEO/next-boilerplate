import type { NextApiRequest, NextApiResponse } from 'next';
import type { Sample } from '@/types/Sample';

type Data = {
    data: Sample
}

async function fetchMockData(id: number) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return await res.json();
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const data = await fetchMockData(Number(req.query.id));
    res.status(200).json({ data });
}
