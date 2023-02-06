//This function is used to create Product.
const productCreator = (Data) => {
  const Product = `
      <div style="cursor:pointer;" id="Product${Data._id}" class='me-0 ms-0 me-lg-5 ms-lg-5 me-xl-5 ms-xl-5 me-md-5 me-md-5 me-sm-4 me-sm-4 card text-center'>
       <img id='${Data._id}' class='card-img-bottom ms-1 p-2 img-size' src=${Data.image} alt=${Data.Category}>
       <div class='p-0 pb-2 card-body'>
         <h5 class="card-title">${Data.name}</h5>
         <p class="card-text">PRK ${Data.price}</p>
         <button onclick="Shifter('Product${Data._id}')" class="btn btn-primary ps-4 pe-4">Show Details</button>
       </div>
      </div>
      `;
  return Product;
};

const gettingProducts = async () => {
  try {
    const Category = window.localStorage.getItem("search-data");
    const raw = await fetch(
      `http://localhost:4004/product/Category/${Category}`
    );
    const data = await raw.json();
    const products = document.getElementById("Products");
    const list = data.map((element) => productCreator(element));
    let product = "";
    list.forEach((da) => {
      product += da;
    });
    products.innerHTML = product;
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener("DOMContentLoaded", gettingProducts);
