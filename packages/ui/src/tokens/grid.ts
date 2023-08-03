const columns = {
  1: "repeat(1, 1fr)",
  2: "repeat(2, 1fr)",
  3: "repeat(3, 1fr)",
  4: "repeat(4, 1fr)",
};

export const grid = {
  columns: columns,
  rows: columns,
} as const;
