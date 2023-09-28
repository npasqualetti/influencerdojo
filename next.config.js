/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        // If you use remark-gfm, you'll need to use next.config.mjs
        // as the package is ESM only
        // https://github.com/remarkjs/remark-gfm#install
        remarkPlugins: [],
        rehypePlugins: [],
        // If you use `MDXProvider`, uncomment the following line.
        // providerImportSource: "@mdx-js/react",
    },
})


const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "**",
            },
        ],
    },
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    experimental: {
        serverActions: true
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    webpack5: true,
    webpack: (config) => {
      config.resolve.fallback = {
        fs: false,
        net: false,
        dns: false,
        child_process: false,
        tls: false,
      };
  
      return config;
    },
}

module.exports = withMDX(nextConfig)
