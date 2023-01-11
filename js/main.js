function payment() {
  var arr = document.getElementsByTagName("input");
  // console.log(arr);
  var car = arr[0];
  var suv = arr[1];
  var black = arr[2];
  var distance = arr[3].value;
  var time = arr[4].value;
  var grab;
  var price_1;
  var price_2;
  var price_3;
  var waiting;
  if (!car.checked && !suv.checked && !black.checked) {
    alert("Please choose a grab");
    return;
  } else if (car.checked) {
    grab = car.value;
    price_1 = 8000;
    price_2 = 12000;
    price_3 = 10000;
    waiting = 2000;
  } else if (suv.checked) {
    grab = suv.value;
    price_1 = 9000;
    price_2 = 14000;
    price_3 = 12000;
    waiting = 3000;
  } else if (black.checked) {
    grab = black.value;
    price_1 = 10000;
    price_2 = 16000;
    price_3 = 14000;
    waiting = 4000;
  }
  if (distance == "" || time == "") {
    alert("Please input the field");
    return;
  }
  if (isNaN(distance) || isNaN(time)) {
    alert("Distance and time must be a number");
    return;
  }
  document.getElementById("divThanhTien").style.display = "block";
  time = parseInt(time);
  distance = parseInt(distance);
  if (distance <= 0 && time <= 0) {
    alert("distance and time must be positive");
    return;
  }
  var total = price_1 + time * waiting;
  var td = document.getElementsByTagName("td");
  td[0].innerHTML = grab;
  td[1].innerHTML = 1 + "km";
  td[2].innerHTML = price_1;
  td[3].innerHTML = price_1;
  if (distance == 1) {
    td[4].innerHTML = "";
    td[5].innerHTML = "";
    td[6].innerHTML = "";
    td[7].innerHTML = "";
    td[8].innerHTML = "";
    td[9].innerHTML = "";
    td[10].innerHTML = "";
    td[11].innerHTML = "";
  }
  if (distance > 1 && distance <= 20) {
    total += (distance - 1) * price_2;
    td[4].innerHTML = grab;
    td[5].innerHTML = distance - 1 + "km";
    td[6].innerHTML = price_2;
    td[7].innerHTML = price_2 * (distance - 1);
    td[8].innerHTML = "";
    td[9].innerHTML = "";
    td[10].innerHTML = "";
    td[11].innerHTML = "";
  }
  if (distance > 20) {
    total += 19 * price_2 + (distance - 20) * price_3;
    td[4].innerHTML = grab;
    td[5].innerHTML = 19 + "km";
    td[6].innerHTML = price_2;
    td[7].innerHTML = price_2 * 19;
    td[8].innerHTML = grab;
    td[9].innerHTML = distance - 20 + "km";
    td[10].innerHTML = price_3;
    td[11].innerHTML = price_3 * (distance - 20);
  }
  td[12].innerHTML = "Thời gian chờ";
  td[13].innerHTML = time + "phút";
  td[14].innerHTML = waiting;
  td[15].innerHTML = waiting * time;
  td[16].innerHTML = "Total";
  td[19].innerHTML = total;
  document.getElementById("xuatTien").innerHTML = total;
}
