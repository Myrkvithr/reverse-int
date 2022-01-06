module.exports = function reverse(n) {
    const str = Math.abs(n) + '';
    console.log(str);
    const chengedNum = str.split('').reverse().join('');
    return Math.abs(Number(chengedNum));
}
