// Thực hành sự kiện click
console.log("Hello");

document.getElementById("btnClick").onclick = function () {
  // tất cả những xử lí sẽ hoạt động khi người dùng click vào button
  console.log("Tôi vừa click vào button");
  // B1. DOM tới thẻ img có id là hình ảnh
  document.getElementById("hinhAnh").src =
    "https://i.etsystatic.com/27130541/r/il/027c91/4483772010/il_fullxfull.4483772010_q3ar.jpg";
};

// Thực hiện tương tác với html thông qua selector

document.querySelector()

