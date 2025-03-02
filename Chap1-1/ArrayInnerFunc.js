/**
 * 문제2 : 배열의 내장함수
 * 2025.03.01 Bella Lee
 */
var input = [200,100,300];

function solution(input) {
   input.splice(2,0,10000);
   return input;
}
console.log(solution(input));