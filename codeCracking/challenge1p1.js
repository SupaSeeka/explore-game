let textTest = `ZAWN FKZEA, PDWJGO OK IQYD BKN PDA XKKG, PDA NAYKIIAJZWPEKJ, WJZ PDA YDWHHAJCA! YDNEOPEA EO KJA KB IU BWRKQNEPA WQPDKNO, WJZ KB YKQNOA ODA ODWNAO W BENOP JWIA SEPD IU CNAWP WQJP, WCWPDW DECDBEAHZ. SA DWRA W BEHA KJ DAN EJ PDA WNYDERA WJZ E WI OQNA UKQ SKQHZ AJFKU NAWZEJC EP. PDA IWJOEKJ EO BWXQHKQO, E YWJ AWOEHU EIWCEJA IEOO IWNLHA KN LKENKP PWGEJC PAW DANA WJZ EP EO PDA EZAWH XWYGCNKQJZ BKN W OWXXWPEYWH. EP DWO W NAWH CKPDEY BAAH, PDKQCD E IQOP WZIEP, PDA YQNNAJP KSJAN ZEZJ’P OAAI WHH PDWP DWLLU SDAJ E OWEZ OK PK DAN. ODA SWO LKHEPA, XQP JKP WIQOAZ, WJZ IQPPANAZ OKIAPDEJC HEGA “SEHH PDAU JARAN OPKL DWQJPEJC QO” WO ODA SWHGAZ WSWU. CDKOPO OAAI PK XA PDA PDAIA WP PDA IKIAJP - E ZAYNULPAZ PDA LWLAN UKQ OAJP WJZ BKQJZ PDA WYNKOPEY. WP BENOP E PDKQCDP PDA EJEPEWH HAPPANO OLAHP KQP NAZ NQI, WJZ WOOQIAZ PDA JKPA SWO WOOKYEWPAZ SEPD PDA GEZJWL KB PDA BWIKQO NWYADKNOA, XQP EP ZEZJ’P PWGA HKJC PK NAWHEOA PDWP EP ODKQHZ XA NAWZ XWYGSWNZO: IQNZAN. YWJ UKQ OWU IKNA WXKQP SDANA PDA JKPA YWIA BNKI? EO EP W YKHZ YWOA UKQ WNA SKNGEJC KJ? OKQJZO BQJ. OQZKGQ EO WHH RANU SAHH, XQP PK NAWHHU OPNAPYD PDA HEPPHA CNAU YAHHO (WO LKENKP SKQHZ OWU) E SKQHZ HKRA OKIAPDEJC W HEPPHA OPNKJCAN, OK EB PDANA EO WJUPDEJC AHOA EJ PDA BEHA PDWP E YKQHZ WOOEOP SEPD, HAP IA GJKS. UKQ IAJPEKJAZ PDWP UKQ WNA SKNGEJC SEPD PDA PNWEJAAO WCWEJ. E OQCCAOP PDWP SA AJYNULP KQN IAOOWCAO PK KJA WJKPDAN WJZ OAP PDAI WO WJ ATANYEOA BKN PDA PAWI. SA YKQHZ OPWNP SEPD OKIAPDEJC OEILHA BKN PDA JASXEAO WJZ PDAJ NWIL QL PDA ZEBBEYQHPU. SDWP ZK UKQ PDEJG? WJUSWU, EP EO PEIA BKN YKBBAA. PDAU OANRA EP EJ PDA KNWJCANU IEZ-WBPANJKKJ. PK XA DKJAOP E ATLAYPAZ PAW EJ W YKQJPNU DKQOA HEGA PDEO, XQP PDWP EO PDA LKSAN KB PDEO LHWYA – EP YKILHAPAHU OAHHO PDA EHHQOEKJ PDWP E WI XWYG EJ AJCHWJZ, NWPDAN PDWJ JAS AJCHWJZ. NECDP ZKSJ PK PDA LWJAHHEJC WJZ PDA YWNLAPO. SDKARAN XQEHP EP DWZ WJ AUA BKN ZAPWEH. E SEHH HKKG BKNSWNZ PK DAWNEJC BNKI UKQ. ZKJ’P BKNCAP PK OAJZ IA OKIAPDEJC EJPANAOPEJC PK ZK - E JAAZ PK GAAL IU XNWEJ ODWNL BKN SDAJ E CAP XWYG, WJZ ARAJ PDA CNAWP WCWPDW EO JK IWPYD BKN PDA XKOO WNYDERAO. WHH PDA XAOP, DWNNU`

const MCL = ["E","A","R","I","O","T","N","S","L","C","U","D","P","M","H","G","B","F","Y","W","K","V","X","Z","J","Q"]

let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

let compare = []

// console.log(sortAndCompare(numOfCharacters(textTest), textTest))

showMostCommon(numOfCharacters(textTest))

console.log(distribution(numOfCharacters(textTest)))

console.log(numOfCharacters(textTest))
function distribution(arr) {
    let iter = 0
    for (let num of arr) {
        iter ++
        console.log(alphabet[iter] + ": " + num)
    }

}

function numOfCharacters(text) {
    let numArr = new Array(26).fill(0)
    let splitText = text.split("")

    for (let char of splitText) {
        char = char.toLowerCase()
        let charCode = char.charCodeAt(0)

        for (let i = 97; i <= 122; i++) {
            if (charCode === i) {
                numArr[i-97]++
            }
        }
    }
    return numArr
}

function showMostCommon(arr, textInp) {
    textTest = textInp
    console.log(arr)
    let sortedList = arr.sort((a, b) => a - b)
    sortedList.reverse()
    let temp = 0

    for (let num of arr) {
        for (let j = 0; j < 26; j++) {
            if (num === sortedList[j]) {
                temp = j
            }
        }
        let MCLV = MCL[temp]
        let TV = alphabet[temp]
        // textTest = textTest.replace(MCLV, TV)
    }

}

function sortAndCompare(arr, textInp) {
    textTest = textInp
    let sortedList = arr.sort((a, b) => a - b)
    sortedList.reverse()
    let temp = 0

    for (let num of arr) {
        for (let j = 0; j < 26; j++) {
            if (num === sortedList[j]) {
                temp = j
            }
        }
        let MCLV = MCL[temp]
        let TV = alphabet[temp]
        // textTest = textTest.replace(MCLV, TV)
    }
    return textTest
}