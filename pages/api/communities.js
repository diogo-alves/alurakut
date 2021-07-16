import {SiteClient} from 'datocms-client';

const client = new SiteClient(process.env.DATOCMS_API_TOKEN);

export default async function createCommunity(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({
            message: 'Apenas o método POST é permitido!'
        })
    }
    const community = await client.items.create({
        itemType: '971603', //model ID
        ...request.body
    })
    response.json({community})
}