let i = 10;
let f = 20.5;
let b = true;
let s = "Ha Noi";
document.write('i = ' + i);
document.write('<br/>');
document.write('f = ' + f);
document.write('<br/>');
document.write('b = ' + b);
document.write('<br/>');
document.write('s = ' + s);
document.write('<br/>');
let width = 10;
let height = 20;
let area = width * height;
document.write('area = ' + area);
let a = prompt("nhap gia tri a = ", '');
let d = prompt("nhap gia tri d = ", '');
let c = a%d;
if (c == 0){
    alert("a la boi so cua d");
}
else {
    alert("a khong la boi so cu d");
}