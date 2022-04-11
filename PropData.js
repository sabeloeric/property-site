function PropData(num) {
  if (!num) {
    return "Error: Must pass a number"
  }
  if (num >= 50 || num <= 1) {
    return "Error: The passed number must be between 1 and 50"
  }
  let ans = "";
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      ans += "PropData ";
    } else if (i % 3 === 0) {
      ans += "Prop ";
    } else if (i % 5 === 0) {
      ans += "Data ";
    } else {
      ans += i + " ";
    }
  }
  return ans;
}

const args = process.argv.slice(2);
if (args.length === 0) {
  console.log("Error: No arguments passed");
} else {
  let num = parseInt(args[0]);
  console.log(PropData(num));
}
