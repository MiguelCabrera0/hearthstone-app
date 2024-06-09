/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'd15f34w2p8l1cc.cloudfront.net',
                port: '',
            }
        ]
    }
};

export default nextConfig;
