function layGiaTriInput() {
    email = document.getElementById('txtEmail').value;
    password = document.getElementById('txtPassword').value;
    ten = document.getElementById('txtName').value;
    phone = document.getElementById('txtPhone').value;
    gender = displayRadioValue()

    var valid = true;
    valid = kiemTraRong(email,"tbEmail")
            &kiemTraRong(password,"tbPassword")
            &kiemTraRong(ten,"tbName")
            &kiemTraRong(phone,"tbPhone")
            &kiemTraEmail(email,"tbEmail")
            &kiemTraTen(ten,"tbName")
            &kiemTraMatKhau(password,"tbPassword")
    //Ở đây kiểm tra biến valid nếu valid false thì sẽ return không chạy những đoạn lệnh bên dưới
    if(!valid){
        return;
    }

    var register = new Register(
        email,
        password,
        ten,
        phone,
        gender
    )
    return register;
}

function displayRadioValue() {
    var gender = document.getElementsByName('gender');

    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked)
            return gender[i].value*1;
    }
}

function renderProduct(arr) {
    var content = "";
    for (let i = 0; i < arr.length; i++) {
      var productServer = arr[i];
      //tạo ra một đối tượng từ lớp đối tượng và truyền các giá trị có được từ arr[i] vào trong đó
      var products = new Product();
      // console.log(products)
      Object.assign(products, productServer);
    //   console.log(products);
    var cate = JSON.parse(products.categories)
    console.log(cate)
    console.log(cate[0].category)
      content += `
      <div class="col-sm-6 col-lg-4">
                    <div class="product-item">
                      <div class="inner-content">
                        <div class="product-thumb">
                          <a href="product.html?id=${products.id}">
                            <img src="${products.image}" width="370" height="350" alt="Image-HasTech">
                          </a>
                          <div class="product-action">
                            <a class="btn-product-cart" href="#">
                              <i class="fa-solid fa-cart-shopping"></i>
                            </a>
                          </div>
                        </div>
                        <div class="product-info">
                          <div class="category">
                            <ul>
                              <li><a href="shop.html">${cate[0].category} | ${cate[1].category} | ${cate[2].category}</a></li>
                            </ul>
                          </div>
                          <h4 class="title"><a href="#">${products.name}</a></h4>
                          <div class="prices">
                            <span class="price">$${products.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
      `
    }
    document.getElementById("listProduct").innerHTML = content;
  }

  


