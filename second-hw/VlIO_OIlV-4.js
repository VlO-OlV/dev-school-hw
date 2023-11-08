function unpackSausages(truck) {
    let result = "";
    let counter = 0;
    let sausages = ["[IIII]", "[¦¦¦¦]", "[((((]", "[))))]", "[llll]", "[1111]", "[@@@@]", "[||||]", "[║║║║]"];
    for(let i = 0; i < truck.length; i++) {
      for(let j = 0; j < truck[i].length; j++) {
        if(sausages.indexOf(truck[i][j]) != -1) {
          counter++;
          if(counter % 5 != 0) {
            result += truck[i][j].slice(1,truck[i][j].length-1);
          }
        }
      }
    }
    return result.split("").join(" ");
}