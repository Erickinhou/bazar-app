export function objMap(obj: any, func: any): any {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [
      k,
      v === Object(v) ? objMap(v, func) : func(v),
    ])
  );
}
