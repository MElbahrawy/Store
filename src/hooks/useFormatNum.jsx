export default function useFormatNum(num) {
  const newNum = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(num / 100);
  return newNum;
}
