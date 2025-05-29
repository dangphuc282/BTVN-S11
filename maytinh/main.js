// nhap du lieu
let a = parseFloat(prompt("Nhập số a:"));
let b = parseFloat(prompt("Nhập số b:"));

// phep tinh
let operation = prompt("Nhập phép tính (+, -, *, /):");

// ket qua
let result;

// thuc hien phep tinh
if(operation ===`+`){
  result = a + b;
}else if (operation === "-") {
  result = a - b;
}else if (operation === "*") {
  result = a * b;
}else if (operation === "/") {
  result = a / b;
if(b === 0){
  result = `Không thể chia cho 0`;
}else {
  result = a / b;
}
}else {
  result = `"Phép tính không hợp lệ`;
}

// Hiển thị kết quả
alert("Kết quả: " + result);
