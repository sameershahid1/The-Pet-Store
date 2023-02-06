const searchBtn = document.getElementById("btn-search");
const forgetBtn = document.getElementById("forget");

const logedList = `
<ul
class='row nav-fill list-unstyled pt-xl-1 pb-xl-1 ps-xl-3 pe-xl-3 navbar-color'
>
<li
  onclick='MoveHome()'
  class='col-12 col-sm-2 text-center pt-2 pb-2'
>
  Home
</li>
<li
  onclick='MoveProducts()'
  class='col-12 col-sm-2 text-center pt-2 pb-2'
>
  Products
</li>
<li
  onclick='moveToMyProducts()'
  class='col-12 col-sm-2 text-center pt-2 pb-2'
>
  My-Products
</li>
<li
  onclick='MoveAboutus()'
  class='col-12 col-sm-2 text-center pt-2 pb-2'
>
  About us
</li>
<li
  onclick='MoveContactUs()'
  class='col-12 col-sm-2 text-center pt-2 pb-2'
>
  Contacts
</li>
<li
  onclick='MoveCreateProduct()'
  class='col-12 col-sm-2 text-center pt-2 pb-2'
>
  Sell-Product
</li>
<li
  onclick='logOutHandler()'
  class='col-12 col-sm-2 text-center pt-2 pb-2'
>
  Log-out
</li>
`;

const unLogedList = `<ul
class='row nav-fill list-unstyled pt-xl-1 pb-xl-1 ps-xl-3 pe-xl-3 navbar-color'
>
<li
  onclick='MoveHome()'
  class='col-12 col-sm-2 text-center pt-2 pb-2'
>
  Home
</li>
<li
  onclick='MoveProducts()'
  class='col-12 col-sm-2 text-center pt-2 pb-2'
>
  Products
</li>
<li
  onclick='MoveAboutus()'
  class='col-12 col-sm-2 text-center pt-2 pb-2'
>
  About us
</li>
<li
  onclick='MoveContactUs()'
  class='col-12 col-sm-2 text-center pt-2 pb-2'
>
  Contacts
</li>
<li
  onclick='MoveLogIn()'
  class='col-12 col-sm-2 text-center pt-2 pb-2'
>
  Log-In
</li>
<li
  onclick='MoveSignUp()'
  class='col-12 col-sm-2 text-center pt-2 pb-2'
>
  Sign-Up
</li>
`;

//Controller
const MoveHome = () => {
  window.location.href = "./index.html";
};

const MoveLogIn = () => {
  window.location.href = "/login.html";
};

const moveToMyProducts = () => {
  window.location.href = "/myproducts.html";
};

const MoveSignUp = () => {
  window.location.href = "/signup.html";
};

const MoveProducts = () => {
  window.location.href = "./products.html";
};

const MoveAboutus = () => {
  window.location.href = "./About-us.html";
};

const MoveContactUs = () => {
  window.location.href = "./contact.html";
};

const MoveCreateProduct = () => {
  window.location.href = "./product-form.html";
};

const logOutHandler = async () => {
  await fetch("/back_end/logout_session.php");
  window.location.href = "/index.html";
};

//For opening the description page.
const Shifter = (ID) => {
  const Product = document.getElementById(ID);

  const Item = {
    id: Product.children[0].id,
  };
  console.log(Item);
  localStorage.setItem("Product-ID", Item.id);
  window.location.href = "./Product-Details.html";
};

const searchHandler = () => {
  const search = document.getElementById("search");
  const Category = search.value;
  console.log(Category);
  window.localStorage.setItem("search-data", Category);
  window.location.href = "./searched.html";
};

const urlChecker = async () => {
  const raw = await fetch("/back_end/login_session.php");
  const session = await raw.json();
  const navList = document.getElementById("nav-list");

  const path = window.location.pathname;
  const page = path.split("/").pop();

  navList.innerHTML = session ? logedList : unLogedList;
};

const forgetBtnHandler = () => {
  window.location.href = "/forgetpassword.html";
};

searchBtn.addEventListener("click", searchHandler);

if (forgetBtn) {
  forgetBtn.addEventListener("click", forgetBtnHandler);
}

window.addEventListener("DOMContentLoaded", urlChecker);
