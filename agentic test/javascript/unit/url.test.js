import { describe, expect, it, vi, beforeEach } from 'vitest';

const importModule = async (base = '/') => {
  vi.resetModules();
  vi.stubEnv('BASE_URL', base);
  return import('../../../src/data/url.ts');
};

describe('url utilities', () => {
  beforeEach(() => {
    vi.unstubAllEnvs();
  });

  it('prefixes root-relative paths with the configured base URL', async () => {
    const { url } = await importModule('/portfolio/');

    expect(url()).toBe('/portfolio/');
    expect(url('/about/')).toBe('/portfolio/about/');
  });

  it('strips the configured base from nested paths and falls back to root', async () => {
    const { stripBase } = await importModule('/portfolio/');

    expect(stripBase('/portfolio/about/')).toBe('/about/');
    expect(stripBase('/portfolio/')).toBe('/');
  });
});
