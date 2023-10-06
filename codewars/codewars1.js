let allOdd = false
let allEven = false
let total = 0
let outlier = 0

let out = findOutlier(testArr)
console.log(out)

function findOutlier(integers){
    let sum = 0
    for (let i = 0; i < integers.length; i++) {
        sum += integers[i]
    }
    if (sum % 2 === 0) {
        allEven = true

    }
    else {
        allOdd = true
    }

    if (allEven === true) {
        let j = 0
        for (j = 0; j < integers.length; j++) {
            if (integers[j] % 2 != 0) {
                return integers[j]
            }
        }

    }
    else {
        let k = 0
        for (k = 0; k < integers.length; k++) {
            if (integers[k] % 2 === 0) {
                return integers[k]
            }
        }
    }
  }