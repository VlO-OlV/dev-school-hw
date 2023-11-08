function landPerimeter(arr) {
    let area = 0;
    for(let i = 0; i < arr.length; i++) {
      for(let j = 0; j < arr[i].length; j++) {
        if(arr[i][j] == 'X') {
          if(i == 0) {
            area++;
          } else if(arr[i-1][j] != 'X') {
            area++;
          }
          if(i == arr.length-1) {
            area++;
          } else if(arr[i+1][j] != 'X') {
            area++;
          }
          if(j == 0) {
            area++
          } else if(arr[i][j-1] != 'X') {
            area++;
          }
          if(j == arr[i].length-1) {
            area++;
          } else if(arr[i][j+1] != 'X') {
            area++;
          }
        }
      }
    }
    return "Total land perimeter: " + area;
}