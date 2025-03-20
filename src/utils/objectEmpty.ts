export const objectIsEmpty = (obj: object): boolean => {
  if (!obj) return true;
  return Object.keys(obj).length === 0;
};
