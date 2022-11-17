export function objMap(obj, func) {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [
      k,
      v === Object(v) ? objMap(v, func) : func(v),
    ])
  );
}
