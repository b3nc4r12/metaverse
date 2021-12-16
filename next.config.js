module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["www.msi.com", "avatars.dicebear.com", "links.papareact.com"]
  },
  env: {
    moralis_app_id: process.env.MORALIS_APP_ID,
    moralis_server_url: process.env.MORALIS_SERVER_URL
  }
}