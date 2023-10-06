function duplicateCount(text){
    let numArr = new Array(36).fill(0)

    let splitText = text.split("")
    for (let char of splitText) {
        char = char.toLowerCase()
        let charCode = char.charCodeAt(0)
        // console.log(charCode)

        for (let j = 48; j <= 57; j++) {
            
            if (charCode === j) {
                numArr[j-22]++
            }
        }

        for (let i = 97; i <= 122; i++) {
            if (charCode === i) {
                numArr[i-97]++
            }
        }
    }
    let count = 0
    for (let num of numArr) {
        if (num > 1) {
            count++
        }
    }
    return count
}