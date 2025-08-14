export function randEmail(prefix: string = 'user') {
  const id = Math.random().toString(36).slice(2, 10);
  return `${prefix}_${id}@example.com`;
}
export function randWord(length: number = 6) {
  return Math.random().toString(36).slice(2, 2 + length);
}
