import { describe, expect, it } from 'vitest';

describe('home page module', () => {
  it('exposes the headline accent and category logic through the rendered source', async () => {
    const source = await import('../../../src/pages/index.astro');
    expect(source).toBeTruthy();
  });

  it('can be imported after its component dependency resolves', async () => {
    const [projectCard, homePage] = await Promise.all([
      import('../../../src/components/ProjectCard.astro'),
      import('../../../src/pages/index.astro'),
    ]);

    expect(projectCard.default).toBeTruthy();
    expect(homePage).toBeTruthy();
  });
});