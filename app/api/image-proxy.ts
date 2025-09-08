import { NextApiRequest, NextApiResponse } from "next"

// import { NextApiRequest, NextApiResponse } from "next/dist/shared/lib/utils"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { url } = req.query
    if (!url || typeof url !== 'string') {
        res.status(400).send('Missing url')
        return
    }
    try {
        const response = await fetch(url)
        if (!response.ok) {
            res.status(500).send('Failed to fetch image')
            return
        }
        res.setHeader('Content-Type', response.headers.get('content-type') || 'image/jpeg')
        const buffer = await response.arrayBuffer()
        res.send(Buffer.from(buffer))
    } catch (error) {
        res.status(500).send('Error fetching image')
    }
}