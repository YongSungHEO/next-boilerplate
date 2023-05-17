// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import type { Sample } from '@/types/Sample';

type Data = {
    data: Array<Sample>
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(
        {
            data: [
                {
                    id: 1,
                    title: '오징어게임',
                },
                {
                    id: 2,
                    title: '수리남',
                },
                {
                    id: 3,
                    title: '길복순',
                },
                {
                    id: 4,
                    title: '더글로리',
                },
                {
                    id: 5,
                    title: '미스터선샤인',
                },
            ]
        }
    );
}
