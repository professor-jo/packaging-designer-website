import { describe, it, expect, vi } from 'vitest';

describe('getProjects', () => {
  it('filters out drafts and sorts by order asc then year desc', async () => {
    vi.mock('astro:content', () => {
      const items = [
        { id: 'a', data: { draft: false, order: 1, year: 2020 } },
        { id: 'b', data: { draft: true, order: 0, year: 2022 } },
        { id: 'c', data: { draft: false, order: 1, year: 2021 } },
        { id: 'd', data: { draft: false, order: 0, year: 2019 } },
      ];
      return {
        getCollection: async (_name: string, filter?: (arg: any) => boolean) => {
          if (typeof filter === 'function') return items.filter((it) => filter({ data: it.data }));
          return items;
        },
      };
    });

    const mod = await import('../../../src/data/projects');
    const projects = await mod.getProjects();

    const ids = projects.map((p: any) => p.id);
    expect(ids).toEqual(['d', 'c', 'a']);
  });
});
