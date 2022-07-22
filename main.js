// Bài tập 1: Chương trình Quản lý tuyển sinh
function tinhDiemUuTien(x, y) {
  var diemUuTien = 0;
  if (x != "X") {
    if (x == "KV1") {
      diemUuTien += 2;
    } else if (x == "KV2") {
      diemUuTien += 1;
    } else {
      diemUuTien += 0.5;
    }
  }
  if (y != "0") {
    if (y == "1") {
      diemUuTien += 2.5;
    } else if (y == "2") {
      diemUuTien += 1.5;
    } else {
      diemUuTien += 1;
    }
  }
  return diemUuTien;
}
function tinhDiem(a, b, c) {
  var diem3Mon = a + b + c;
  return diem3Mon;
}
document.getElementById("btnThongBao").onclick = function () {
  var diemChuan = document.getElementById("diemChuan").value * 1;
  var diem1 = document.getElementById("diem1").value * 1;
  var diem2 = document.getElementById("diem2").value * 1;
  var diem3 = document.getElementById("diem3").value * 1;

  var khuVuc = document.getElementById("khuVuc").value;
  var uuTien = document.getElementById("uuTien").value;

  var output = "";
  var tongDiem = tinhDiem(diem1, diem2, diem3) + tinhDiemUuTien(khuVuc, uuTien);
  output += "Tổng điểm: " + tongDiem + " - ";
  if (tongDiem >= diemChuan && diem1 > 0 && diem2 > 0 && diem3 > 0) {
    output += "Đậu";
  } else {
    output += "Rớt";
  }

  document.getElementById("thongBaoKetQua").innerHTML = output;
  document.getElementById("thongBaoKetQua").classList.add("bg-success");
  document.getElementById("thongBaoKetQua").classList.add("text-white");
};

//Bài tập 2: Chương trình Tính tiền điện
function tinhTienDien(luongDien) {
  const MUC1 = 50;
  const MUC2 = 100;
  const MUC3 = 150;
  const MUC4 = 200;

  const MUCGIA1 = 500;
  const MUCGIA2 = 650;
  const MUCGIA3 = 850;
  const MUCGIA4 = 1100;
  const MUCGIAKHAC = 1300;

  var tienDien = 0;

  if (luongDien <= MUC1) {
    tienDien += luongDien * MUCGIA1;
  } else {
    tienDien += MUC1 * MUCGIA1;
    if (luongDien <= MUC2) {
      tienDien += (luongDien - MUC1) * MUCGIA2;
    } else {
      tienDien += (MUC2 - MUC1) * MUCGIA2;
      if (luongDien <= MUC3) {
        tienDien += (luongDien - MUC2) * MUCGIA3;
      } else {
        tienDien += (MUC3 - MUC2) * MUCGIA3;
        if (luongDien <= MUC4) {
          tienDien += (luongDien - MUC3) * MUCGIA4;
        } else {
          tienDien += (MUC4 - MUC3) * MUCGIA4;
          tienDien += (luongDien - MUC4) * MUCGIAKHAC;
        }
      }
    }
  }
  return tienDien;
}
document.getElementById("btnTinhTienDien").onclick = function () {
  var luongDienTieuThu = document.getElementById("luongDienTieuThu").value * 1;
  var soTienDien = tinhTienDien(luongDienTieuThu);

  var output = "Số tiền điện: " + soTienDien;

  document.getElementById("thongBaoSoTienDien").innerHTML = output;
  document.getElementById("thongBaoSoTienDien").classList.add("bg-success");
  document.getElementById("thongBaoSoTienDien").classList.add("text-white");
};
