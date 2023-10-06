function isValidWalk(walk) {
    let numArr = new Array(4).fill(0)
    if (walk.length < 10 || walk.length > 10) {
        return false
    }

    for (let dir of walk) {
        if (dir === 'n') {
            numArr[0]++
        }
        else if (dir === 'e') {
            numArr[1]++
        }
        else if (dir === 's') {
            numArr[2]++
        }
        else if (dir === 'w') {
            numArr[3]++
        }
    }
    console.log(numArr)

    if (numArr[0] === numArr[2] && numArr[1] == numArr[3]) {
        return true
    }
    else {
        return false
    }
}