const handelingProductDetail = async () => {
  const id = window.localStorage.getItem("Product-ID");
  const idForm = new FormData();
  idForm.append("product-id", id);

  const raw = await fetch("/back_end/product_detail.php", {
    method: "POST",
    body: idForm,
  });

  const Info = await raw.json();
  console.log(Info);

  if (Info.status) {
    const data = Info.data;

    const title = document.querySelector(".Title");
    const price = document.getElementById("product-price");
    const inStock = document.getElementById("product-in-stock");
    const stock = document.getElementById("product-stock");
    const category = document.getElementById("category");
    const img = document.getElementById("product-img");
    const description = document.getElementById("product-description");
    const btnBuy = document.getElementById("btn-buy");

    data.Stock = parseInt(data.Stock);
    data.Price = parseInt(data.Price);

    title.textContent = data.Name;
    price.textContent = "PKR " + String(data.Price);
    stock.textContent = data.Stock;
    inStock.textContent = data.Stock == 0 ? "NO" : "YES";
    category.textContent = data.Type;
    img.src = data.image;
    description.textContent = data.Description;

    const buyingMessage = async () => {
      const updateForm = new FormData();
      const updateStock = data.Stock - 1;
      updateForm.append("id", id);

      if (data.Stock > 1) {
        updateForm.append("stock", updateStock);
      }

      const updateBody = {
        method: "POST",
        body: updateForm,
      };

      const updateUrl = "/back_end/update_product_stock.php";
      const deleteUrl = "/back_end/remove_product.php";

      const raw = await fetch(
        data.stock > 1 ? updateUrl : deleteUrl,
        updateBody
      );

      stock.textContent = data.stock - 1;
      const messageContainer = document.getElementById("message-container");

      messageContainer.innerHTML = `
     <div class='d-flex flex-column align-items-center position-absolute start-0 end-0 top-50 p-3 text-center message'>
        <p class='mt-2'>Total-Price:PKR ${data.Price}</p>
        <p>Thank you for buying this product, hope you have a greath time.</p>
        <button id='btn-ok' class='btn btn-primary'>Ok</button>
     </div>`;

      const btnOk = document.getElementById("btn-ok");
      btnOk.addEventListener("click", () => {
        messageContainer.innerHTML = "";
      });
    };

    btnBuy.addEventListener("click", buyingMessage);

    const btn_edit = document.getElementById("btn-edit");

    const upateForm = () => {
      window.localStorage.setItem("edit-product-id", data.ID);
      window.location.href = "./edit_form.html";
    };

    btn_edit.addEventListener("click", upateForm);
  }
};

window.addEventListener("DOMContentLoaded", handelingProductDetail);
