import { describe, expect, it } from 'vitest';

describe('ProjectCard Astro component', () => {
  it('exists as a renderable component module', async () => {
    const mod = await import('../../../src/components/ProjectCard.astro');
    expect(mod.default).toBeTruthy();
  });

  it('can be imported multiple times without transform failures', async () => {
    const [first, second] = await Promise.all([
      import('../../../src/components/ProjectCard.astro'),
      import('../../../src/components/ProjectCard.astro'),
    ]);

    expect(first.default).toBeTruthy();
    expect(second.default).toBeTruthy();
    expect(first.default).toBe(second.default);
  });
});