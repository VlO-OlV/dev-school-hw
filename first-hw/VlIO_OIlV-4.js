function isPrime(num) {
    let counter = 0;
    let i = 2;
    while(counter == 0 && i <= Math.sqrt(num)) {
      if(num % i == 0) {
        counter++;
      }
      i++;
    }
    return (counter == 0 && num >= 2) ? true : false;
}