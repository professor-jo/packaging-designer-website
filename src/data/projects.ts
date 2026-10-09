import { getCollection } from 'astro:content';

// Published projects, sorted by `order` then newest year first.
export async function getProjects() {
  const all = await getCollection('projects', ({ data }) => !data.draft);
  return all.sort((a, b) => a.data.order - b.data.order || b.data.year - a.data.year);
}
