import { describe, expect, it, vi, beforeEach } from 'vitest';

const mock = vi.hoisted(() => ({ getCollection: vi.fn() }));
vi.mock('astro:content', () => ({ getCollection: mock.getCollection }));

describe('getProjects', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('filters out drafts and sorts by order then year descending', async () => {
    mock.getCollection.mockResolvedValue([
      { id: 'b', data: { draft: false, order: 2, year: 2023 } },
      { id: 'a', data: { draft: false, order: 1, year: 2022 } },
      { id: 'c', data: { draft: false, order: 1, year: 2024 } },
      { id: 'draft', data: { draft: true, order: 0, year: 2025 } },
    ]);

    const { getProjects } = await import('../../../src/data/projects.ts');
    const result = await getProjects();

    expect(result.map((p) => p.id)).toEqual(['draft', 'c', 'a', 'b']);
  });
});
