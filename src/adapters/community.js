export const communityAdapter = community => ({
    id: community.id,
    name: community.title,
    image_url: community.image,
    url: `/communities/${community.id}`,
})