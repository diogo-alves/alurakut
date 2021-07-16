export const communityAdapter = community => ({
    id: community.id,
    name: community.title,
    image_url: community.imageUrl,
    url: `/communities/${community.id}`,
})