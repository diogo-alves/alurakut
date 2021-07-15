export const githubUserAdapter = username => ({
    id: username,
    name: username,
    image_url: `https://github.com/${username}.png`,
    url: `https://github.com/${username}`,
})

export const githubFollowerAdapter = follower => ({
    id: follower.id,
    name: follower.login,
    image_url: follower.avatar_url,
    url: follower.html_url,
})