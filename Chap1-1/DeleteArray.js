/**
 * 문제1 : 배열의 삭제
 * 2025.03.01 Bella Lee
 */
var input = [100,200,300,400,500];

function solution(input) {
   input.splice(3,4);
   return input;
}
console.log(solution(input));