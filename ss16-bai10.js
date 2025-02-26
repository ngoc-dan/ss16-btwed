let numberA = +prompt("nhap so thu nhat :")
let numberB = +prompt("mhap so thu hai :")
let max = Math.max(numberA,numberB)
let min = Math.min(numberA,numberB)
while (1){
    let random = Math.floor(Math.random()*(max-min+1)+min)
    if (min<random && random <max){
        alert(random)
        break
    }
}