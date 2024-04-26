/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: async () => {
    return process.env.GIT_HASH + "@" + process.env.BUILD_ID;
  },
  env: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ["flowbite.com", "flowbite.s3.amazonaws.com"],
  },
};

export default nextConfig;
