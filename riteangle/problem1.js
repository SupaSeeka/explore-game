let arr = [1,2,3,4,5,6,7,8]
let temp = []
let correct = 0
let total = 0

for (let i = 0; i < 100000000; i++) {
    temp = shuffle(arr)
    if (temp[0]*temp[1]*temp[2]*temp[3]*temp[4] < temp[5]*temp[6]*temp[7]) {

        correct++
        console.log(((i/100000000)*100).toFixed(2) + "%")
    }
    total ++
}

console.log(correct/total)

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}
