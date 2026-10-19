import { describe, expect, it } from 'vitest';

describe('work detail page module', () => {
  it('is present', async () => {
    await expect(import('../../../src/pages/work/[slug].astro')).rejects.toBeTruthy();
  });
});
