function highAndLow(numbers){
    return Math.max(...numbers.split(" ")).toString() + " " + Math.min(...numbers.split(" ")).toString()
}