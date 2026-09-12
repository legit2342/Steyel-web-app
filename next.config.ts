import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // The dashboard is fully dynamic (cookie-based auth), so by default every
    // client-side nav between its routes re-fetches from the server instead
    // of reusing what was just rendered. This lets recently-visited dashboard
    // segments be served from the client cache for 30s so switching between
    // e.g. Overview and Account feels as instant as the static marketing pages.
    staleTimes: {
      dynamic: 30,
    },
  },
};

export default nextConfig;
