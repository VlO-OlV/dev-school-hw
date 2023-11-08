function solution(number){
    let sum = 0;
    for(let i = 1; i <= Math.floor((number - 1) / 3); i++) {
      sum += i * 3;
    }
    for(let i = 1; i <= Math.floor((number - 1) / 5); i++) {
      if(i * 5 % 3 != 0) {
        sum += i * 5;
      }
    }
    return sum;
}