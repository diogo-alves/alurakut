export const githubUserAdapter = user => ({
    id: user.id,
    name: user.name || user.login,
    image_url: user.avatar_url,
    url: user.html_url,
})