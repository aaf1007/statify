/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allow Spotify-hosted images for album art and avatars.
    domains: ['i.scdn.co'],
  },
};

export default nextConfig;
