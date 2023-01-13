module.exports = function reverse (n) {
  let new_str = Math.abs(n).toString();
  let new_arr = new_str.split("");
  let reverse_str = new_arr.reverse();
  let result_str = reverse_str.join("");
  return result_str;
}
