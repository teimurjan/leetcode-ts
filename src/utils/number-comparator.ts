const numberComparator = (a: number, b: number) => {
  if (a > b) {
    return 1 as const;
  }

  if (a < b) {
    return -1 as const;
  }

  return 0 as const;
};

export default numberComparator;
