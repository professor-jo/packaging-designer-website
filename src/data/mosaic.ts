// Home grid rhythm, repeating every 5 cards: one wide + one tall, then three small.
export function mosaicSize(i: number): 'wide' | 'tall' | 'small' {
  const n = i % 5;
  return n === 0 ? 'wide' : n === 1 ? 'tall' : 'small';
}
