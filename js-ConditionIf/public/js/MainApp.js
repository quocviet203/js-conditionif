var songuyen = Number(prompt('nhap vao so nguyen'))
if (songuyen %= 2) {
    document.writeln('so nguyen am' + '<br>')
} else {
    document.writeln('so nguyen duong' + '<br>')
}
var n = Number(prompt('nhap vao b'))

if (n % 3 == 0 && n % 5 == 0) {
    document.writeln('chia het cho 3 va 5' + '<br>')
} else if (n % 3 == 0) {
    document.writeln(' chia het cho 3' + '<br>')
} else if (n % 5 == 0) {
    document.writeln('chia het cho 5' + '<br>')
} else {
    document.writeln('khong chia het cho 3 va 5' + '<br>')
}
let thang = parseInt(prompt('nhap vao thang'))
if (thang === 1 || thang === 3 || thang === 5 || thang === 7 || thang === 8 || thang === 10 || thang === 12) {
    document.writeln('Tháng ' + thang + 'có 31 ngày' + '<br>')

} else if (thang === 3 || thang === 4 || thang === 6 || thang === 9 || thang === 11) {
    document.writeln('tháng' + thang + 'có 30 ngày' + '<br>')
} else if (thang === 2) {
    document.writeln('tháng' + thang + ' có 28 hoặc 29 ngày ' + '<br>')

} else {
    document.writeln('tháng không hợp lệ ' + '<br>')
}
var a = Number(prompt('nhap vao a'))
var b = Number(prompt('nhap vao b'))
var c = Number(prompt('nhap vao c'))
if (a = 0) {
    document.writeln('phuong trinh bac 1' + '<br>')

} else {
    dt = b * b - 4 * a * c
} if (dt < 0) {
    document.writeln('phuong trinh vo nghiem' + '<br>')
} else if (dt = 0) {
    var x=-b / (2 * a)
    document.writeln('phuong trinh co nghiem kep ' + x + '<br>')
} else {
    var x1= -b + sqrt(dt) / (2 * a)
    var x2= -b - sqrt(dt) / (2 * a)

    document.writeln('phuong trinh co nghiem phan biet' + x1+'<br>')
    document.writeln('phuong trinh co nghiem phan biet' + x2+'<br>')
}
var canha = Number(prompt('nhap vao canh a'))
var canhb = Number(prompt('nhap vao canh b'))
var canhc = Number(prompt('nhap vao canh c'))
if (canha + canhb > canhc && canhb + canhc > canha && canhc + canha > canhb) {
    document.writeln('là 1 tam giác ' + '<br>')
} else {
    document.writeln('khong phải là 1 tam giác' + '<br>')
}

