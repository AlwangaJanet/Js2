function commaseparated(input) {
  if (!/^(\d+,)*\d+$/.test(input)) {
    return 0
   }
      return input.split(',').reduce((sum, num) => sum + Number(num), 0);
}
console.log (commaseparated ("20,24,25"))
console.log(commaseparated (""))
console.log(commaseparated("janet"))