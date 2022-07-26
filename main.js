//Bài tập 1: Tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + … + n > 10000
function timSoNguyen() {
  var sum = 0;
  var i = 1;
  while (sum <= 10000) {
    sum += i;
    i++;
  }
  i--;
  return i;
}
document.querySelector("#btnTimSo").onclick = function () {
  var output = "Số Nguyên đó là: " + timSoNguyen();
  document.querySelector("#thongBaoSoNguyen").innerHTML = output;
};

//Bài tập 2: Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x +
// x^2 + x^3 + … + x^n
function tinhTong(x, n) {
  var sum = 0;
  if (n > 1) {
    for (var i = 1; i <= n; i++) {
      sum += Math.pow(x, i);
    }
  } else {
    sum = x;
  }
  return sum;
}

document.querySelector("#btnTinhTong").onclick = function () {
  var x = document.querySelector("#soX").value * 1;
  var n = document.querySelector("#soN").value * 1;

  var sum = tinhTong(x, n);
  document.querySelector("#hienThiKQ").innerHTML = sum;
};

//Bài tập 3: Nhập vào n. Tính giai thừa 1*2*...n
function tinhGiaiThua(n) {
  if (n <= 0) {
    alert("Vui lòng nhập n lớn hơn 0");
    return;
  }
  var result = 1;
  for (var i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
document.querySelector("#btnTinhGiaiThua").onclick = function () {
  var n = document.querySelector("#numberN").value * 1;
  document.querySelector("#display").innerHTML = tinhGiaiThua(n);
};

//Bài tập 4: chương trình khi click vào button sẽ in ra 10 thẻ div. Nếu
//div nào vị trí chẵn thì background màu đỏ và lẻ thì background màu xanh.
document.querySelector("#btnInTheDiv").onclick = function () {
  var listDivs = "";
  for (var i = 1; i <= 10; i++) {
    if (i % 2 === 1) {
      listDivs +=
        "<div class='bg-primary' style='height: 20px; width: 100%'>" + "</div>";
    } else {
      listDivs +=
        "<div class='bg-danger' style='height: 20px; width: 100%'>" + "</div>";
    }
  }
  document.getElementById("inThe").innerHTML = listDivs;
};
