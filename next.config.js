/** @type {import('next').NextConfig} */


const withVideos = require('next-videos')

module.exports = withVideos()

const nextConfig = {
    images: {
        domains: [
            "images.pexels.com"
        ],
    },
}

module.exports = nextConfig
