function getAllProduct() {
  // dùng axios gọi dữ liệu từ server về
  var promise = axios({
    // url
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "get",
  });
  promise.then(function (res) {
    console.log(res.data.content);
    renderProduct(res.data.content);
  });
  promise.catch(function (err) {
    console.log(err);
  });
}

getAllProduct();

function getProductByCategory(categoryId) {
  // dùng axios gọi dữ liệu từ server về
  var promise = axios({
    // url
    url: `https://shop.cyberlearn.vn/api/Product/getProductByCategory?categoryId=${categoryId}`,
    method: "get",
  });
  promise.then(function (res) {
    console.log(res.data.content);
    renderProduct(res.data.content);
  });
  promise.catch(function (err) {
    console.log(err);
  });
}
// getProductByCategory("WOMEN");


// Đăng ký 1 tài khoản

// document.getElementById("register").onclick = function () {
//   register();
// };

function register() {
  // ngăn chặn reload lại trang khi người dùng bấm vào nút button có type là submit
  event.preventDefault();

  // tạo ra một đối tượng
  var register = new layGiaTriInput();
  // gọi tới các thuộc tính trong đối tượng và gán các giá trị người dùng nhập vào
  //   register.email = document.getElementById("txtEmail").value;
  //   register.password = document.getElementById("txtPassword").value;
  //   register.name = document.getElementById("txtName").value;
  //   register.gender = document.getElementById("txtGender").value;
  //   register.phone = document.getElementById("txtPhone").value;
  console.log(register);
  // gọi api signup để tạo tài khoản
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    method: "POST",
    data: register,
  });
  promise.then(function (res) {
    console.log(res.data);
    // nếu như đăng ký thành công thì sẽ alert thông báo
    if (res.data.statusCode == 200) {
      alert(res.data.message);
    }
    alert(res.data.message);
  });
  promise.catch(function (err) {
    console.log(err);
  });
}
