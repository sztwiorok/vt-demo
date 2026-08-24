/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Emit a plain static tree into out/ that any file server can serve.
  output: "export",

  // Gives every route its own directory + index.html
  // (out/collection/index.html rather than out/collection.html), so a dumb
  // file server resolves /collection without clean-URL rewriting.
  trailingSlash: true,
};

export default nextConfig;
