let hanoi = function(disks) {
    let moves = 0;
    for(let i = 0; i < disks; i++) {
      moves += Math.pow(2, i);
    }
    return moves;
};