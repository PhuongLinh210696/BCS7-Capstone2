const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
console.log(productId)
getDetail(productId)


function getDetail(productId) {
    
    // dùng axios gọi dữ liệu từ server về
    var promise = axios({
      //     // url
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${productId}`,
      method: "get",
    });
    promise.then(function (res) {
        console.log(res.data.content)       
        renderProductDetail(res.data.content)
    });
     
   
  }

function renderProductDetail(arr) {
    var content = "";
    var content2 = "";
    var productsDetail = new ProductRelated();
    Object.assign(productsDetail, arr);
    console.log(productsDetail)
    content += `
    <div class="row">
                      <div class="col-12">
                          <div class="product-single-item">
                              <div class="row">
                                  <div class="col-xl-6">
                                      <div class="product-single-thumb product-single-thumb-normal">
                                          <div
                                              class="swiper-container single-product-thumb single-product-thumb-slider swiper-container-fade swiper-container-initialized swiper-container-horizontal">
                                              <div class="swiper-wrapper" style="transition-duration: 0ms;">
                                                  <div class="swiper-slide swiper-slide-active"
                                                      style="width: 570px; opacity: 1; transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">
                                                      <a class="lightbox-image" data-fancybox="gallery"
                                                          href="${productsDetail.image}">
                                                          <img src="${productsDetail.image}" width="570" height="541"
                                                              alt="Image-HasTech">
                                                      </a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-xl-6">
                                      <div class="product-single-info">
                                          <h3 class="main-title">${productsDetail.name}</h3>
                                          <div class="prices">
                                              <span class="price">$${productsDetail.price}</span>
                                          </div>
                                          <p>${productsDetail.shortDescription}</p>
                                          <div class="product-quick-action">
                                              <div class="qty-wrap">
                                                  <div class="pro-qty">
                                                      <input type="text" title="Quantity" value="1">
                                                      <div class="dec qty-btn">-</div>
                                                      <div class="inc qty-btn">+</div>
                                                  </div>
                                              </div>
                                              <button class="btn-theme" type="button">Add to Cart</button>
                                          </div>
                                          <div class="product-info-footer">
                                              <h6 class="code"><span>Code :</span>Ch-256xl</h6>
                                              <div class="social-icons">
                                                  <span>Share</span>
                                                  <a href="#/"><i class="fa-brands fa-facebook-f"></i></a>
                                                  <a href="#/"><i class="fa-brands fa-dribbble"></i></a>
                                                  <a href="#/"><i class="fa-brands fa-pinterest-p"></i></a>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-12">
                          <div class="product-review-tabs-content">
                              <ul class="nav product-tab-nav" id="ReviewTab" role="tablist">

                                  <li role="presentation">
                                      <a id="description-tab" data-bs-toggle="pill" href="#description" role="tab"
                                          aria-controls="description" aria-selected="true" class="active">Description</a>
                                  </li>

                              </ul>
                              <div class="tab-content product-tab-content" id="ReviewTabContent">

                                  <div class="tab-pane fade active show" id="description" role="tabpanel"
                                      aria-labelledby="description-tab">
                                      <div class="product-description">
                                          <p>${productsDetail.description}</p>
                                      </div>
                                  </div>

                              </div>
                          </div>
                      </div>
                  </div>
    `;
    for (let i = 0; i < productsDetail.relatedProducts.length; i++) {
        const element = productsDetail.relatedProducts[i];
        console.log(element)
        content2 += `
        
  
                  <div class="swiper-slide" style="width: 270px; margin-right: 30px;">
                      <!--== Start Product Item ==-->
                      <div class="product-item">
                          <div class="inner-content">
                              <div class="product-thumb">
                                  <a href="single-product.html">
                                      <img src="${element.image}" width="270" height="274"
                                          alt="Image-HasTech">
                                  </a>
                              </div>
                              <div class="product-info">
                                  <div class="category">
                                      <ul>
                                          <li><a href=""></a></li>
                                      </ul>
                                  </div>
                                  <h4 class="title"><a href="single-product.html">${element.name}</a></h4>
                                  <div class="prices">
                                      <span class="price">$${element.price}</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <!--== End product Item ==-->
                  </div>
  
  
             
    `;
    }
      
    document.getElementById("proSingleItem").innerHTML = content;
    document.getElementById("proRelated").innerHTML = content2;
}