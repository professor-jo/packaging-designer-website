import { describe, expect, it } from 'vitest';

describe('about page module', () => {
  it('loads without throwing', async () => {
    await expect(import('../../../src/pages/about.astro')).resolves.toBeTruthy();
  });

  it('can be imported repeatedly without analysis errors', async () => {
    const mod = await import('../../../src/pages/about.astro');
    const again = await import('../../../src/pages/about.astro');

    expect(mod).toBeTruthy();
    expect(again).toBeTruthy();
  });
});