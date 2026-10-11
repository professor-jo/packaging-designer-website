// Prefix a root-relative path with the site's base path (set in astro.config.mjs),
// so links work when the site is served from a sub-folder such as GitHub Pages.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path = '/') => base + path;

// The current page's path with the base removed, e.g. '/about/'.
export const stripBase = (pathname: string) => pathname.slice(base.length) || '/';
