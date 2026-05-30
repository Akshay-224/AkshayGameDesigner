/**
 * Prepends Vite's BASE_URL to any public asset path.
 * Locally BASE_URL = '/', on GitHub Pages BASE_URL = '/GameDesignPortfolio/'
 * This ensures all /assets/, /models/, /textures/ paths work in both environments.
 */
export const asset = (path) => {
    // Remove leading slash if present, then join with base
    const clean = path.startsWith('/') ? path.slice(1) : path;
    const base = import.meta.env.BASE_URL; // ends with '/'
    return `${base}${clean}`;
};
