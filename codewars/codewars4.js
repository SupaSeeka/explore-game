function sumTwoSmallestNumbers(numbers) {  
    let lowest = Math.min.apply(Math, numbers)
    let sLowest = Infinity
    let temp = 0

    for (let num of numbers) {
        if (num > lowest && num < sLowest) { 
            sLowest = num
        }
      }
    return (lowest + sLowest)
  }