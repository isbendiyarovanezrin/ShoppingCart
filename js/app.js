const productList = document.querySelector(".product-list");

function loadJson() {
  fetch("data/products.json")
    .then((responce) => responce.json())
    .then((data) => {
      let item = "";
      data.forEach((product) => {
        item += `
          <div class="product-item">
            <div class="product-img-box">
              <img
                src="${product.imgSrc}"
                alt="product image"
                class="product-img"
              />
              <div class="content-overlay">
                <div class="overlay-link">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-img">
                        <img src="${product.imgSrc}" />
                      </div>
                      <div class="modal-body">
                        <h1>${product.name}</h1>
                        <h2>${product.price}</h2>
                        <p>${product.detail}</p>
                        <p>Imported: NO</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="overlay-info">
                  <p class="overlay-content-p">Design | Branding</p>
                  <h5 class="text-center">Creative Web Design</h5>
                </div>
              </div>
            </div>
            <hr />
            <div class="product-content d-flex justify-content-around">
              <p class="product-price">${product.price}</p>
              <button type="button" class="btn-add-cart mb-3 bg-transparent">
                + Cart
              </button>
            </div>
          </div>
        `;
      });
      productList.innerHTML = item;
    })
    .catch((error) => {
      alert(error);
    });
}
loadJson();
