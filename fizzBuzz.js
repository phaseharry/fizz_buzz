function fizzBuzz(num) {
  if (!(num % 5) && !(num % 3)) return `FizzBuzz`;
  if (!(num % 5)) return `Fizz`;
  if (!(num % 3)) return `Buzz`;
  return num;
}

module.exports = fizzBuzz;
