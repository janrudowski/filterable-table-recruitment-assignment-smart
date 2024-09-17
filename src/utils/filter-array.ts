export function filterArray<T>(items: T[], filters: Partial<T>): T[] {
  return items.filter((item) => {
    return Object.keys(filters).every((key) => {
      const filterKey = key as keyof T;
      return (
        filters[filterKey] === undefined ||
        String(item[filterKey])
          .toLowerCase()
          .startsWith(String(filters[filterKey]).toLowerCase())
      );
    });
  });
}
