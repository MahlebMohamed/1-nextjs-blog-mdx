import mdx from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Autres configurations Next.js si nécessaire
};

const withMDX = mdx({
  extension: /\.mdx?$/,
});

export default withMDX({
  ...nextConfig, // Ajoute nextConfig à la configuration MDX
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});
