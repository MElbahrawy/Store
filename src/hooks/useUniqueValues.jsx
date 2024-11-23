export default function useUniqueValues(data, type) {
  let unique = data.map((item) => item[type]);
  type == "colors" ? (unique = unique.flat()) : null;
  return ["all", ...new Set(unique)];
}
