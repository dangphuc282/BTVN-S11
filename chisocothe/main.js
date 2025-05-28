let canNang = parseFloat(prompt("Nhập cân nặng (kg):"));
let chieuCao = parseFloat(prompt("Nhập chiều cao (m):"));

let bmi = canNang / (chieuCao * chieuCao);

// WHO
function phanLoaiWHO(bmi) {
  if (bmi < 18.5) {
    return "Cân nặng thấp (gầy)";
  } else if (bmi <= 24.9) {
    return "Bình thường";
  } else if (bmi <= 29.9) {
    return "Tiền béo phì";
  } else if (bmi <= 34.9) {
    return "Béo phì độ I";
  } else if (bmi <= 39.9) {
    return "Béo phì độ II";
  } else {
    return "Béo phì độ III";
  }
}

// IDI & WPRO
function phanLoaiIDI_WPRO(bmi) {
  if (bmi < 18.5) {
    return "Cân nặng thấp (gầy)";
  } else if (bmi <= 22.9) {
    return "Bình thường";
  } else if (bmi <= 24.9) {
    return "Tiền béo phì";
  } else if (bmi <= 29.9) {
    return "Béo phì độ I";
  } else {
    return "Béo phì (độ II hoặc cao hơn)";
  }
}

let phanLoai_who = phanLoaiWHO(bmi);
let phanLoai_idi = phanLoaiIDI_WPRO(bmi);

alert(
  "Chỉ số BMI của bạn là: " + bmi + "\n" + "Phân loại theo WHO: " + phanLoai_who + "\n" + "Phân loại theo IDI & WPRO: " + phanLoai_idi
);
