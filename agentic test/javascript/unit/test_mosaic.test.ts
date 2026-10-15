import { describe, it, expect } from 'vitest';
import { mosaicSize } from '../../../src/data/mosaic';

describe('mosaicSize', () => {
  it('returns pattern: wide, tall, small, small, small repeating', () => {
    const expected = ['wide', 'tall', 'small', 'small', 'small'];
    const results = [];
    for (let i = 0; i < 10; i++) {
      results.push(mosaicSize(i));
    }
    // First five should match expected
    expect(results.slice(0, 5)).toEqual(expected);
    // Next five should repeat the pattern
    expect(results.slice(5, 10)).toEqual(expected);
  });

  it('handles large indices correctly (modulo behavior)', () => {
    expect(mosaicSize(5)).toBe('wide');
    expect(mosaicSize(6)).toBe('tall');
    expect(mosaicSize(7)).toBe('small');
  });
});
