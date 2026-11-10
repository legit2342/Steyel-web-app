import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Login, signup and the dashboard were removed; the app now lives only in
  // the App Store. Send old links and bookmarks to the download page.
  async redirects() {
    return ["/login", "/signup", "/dashboard/:path*", "/auth/:path*"].map((source) => ({
      source,
      destination: "/download",
      permanent: false,
    }));
  },
};

export default nextConfig;
