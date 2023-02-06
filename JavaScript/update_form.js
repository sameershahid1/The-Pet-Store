const handelingEditForm = async () => {
  const id = window.localStorage.getItem("edit-product-id");
  const dataForm = new FormData();
  dataForm.append("product-id", id);

  const raw = await fetch("/back_end/product_detail.php/", {
    method: "POST",
    body: dataForm,
  });
  const info = await raw.json();
  const data = info.data;
  console.log(data);

  document.getElementById("name").value = data.Name;
  document.getElementById("price").value = data.Price;
  document.getElementById("description").value = data.Description;
  document.getElementById("stock").value = data.Stock;
  document.getElementById("Category").value = data.Type;
  const btn_edit = document.getElementById("btn-edit");

  //Update method
  const update = () => {

    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    const stock = document.getElementById("stock").value;
    const Category = document.getElementById("Category").value;
    const image = document.getElementById("image").files[0];
    const formData = new FormData();

    formData.append("product-name", name);
    formData.append("product-description", description);
    formData.append("product-price", price);
    formData.append("product-image", image);
    formData.append("product-Category", Category);
    formData.append("product-stock", stock);
    formData.append("product-id", id);

    const response = fetch("/back_end/update_product.php", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  btn_edit.addEventListener("click", update);
};

window.addEventListener("DOMContentLoaded", handelingEditForm);
