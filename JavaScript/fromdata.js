const btn = document.getElementById("btn");
const signUpBtn = document.getElementById("btn-sign-up");
const logInBtn = document.getElementById("log-in");
const resetBtn = document.getElementById("reset");

const productHanlder = () => {
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

  fetch("/back_end/add_product.php", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((res) => {
      
      if (res.status) {

        alert(res.message);
        window.location.href = "/myproducts.html";

      } else {
        alert(res.message);
      }
    });
};

const signUpHanlder = () => {
  const userName = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const conFormPasswrod = document.getElementById("conform_password").value;
  const signUpInfo = new FormData();
  signUpInfo.append("username", userName);
  signUpInfo.append("email", email);
  signUpInfo.append("password", password);
  signUpInfo.append("conform_password", conFormPasswrod);

  fetch("/back_end/sign_up.php", {
    method: "POST",
    body: signUpInfo,
  })
    .then((res) => res.json())
    .then((res) => {
      const message = document.getElementById("message");
      message.classList.add(res.status ? "text-primary" : "text-red");
      message.classList.remove(res.status ? "text-red" : "text-primary");
      message.innerText = res.message;
    })
    .catch((error) => {
      console.log(error);
    });
};

const loginHandler = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const logInInfo = new FormData();
  logInInfo.append("email", email);
  logInInfo.append("password", password);

  const sending = {
    method: "POST",
    body: logInInfo,
  };

  fetch("/back_end/login_in.php", sending)
    .then((res) => res.json())
    .then((res) => {
      if (res.status) {
        window.location.href = "/myproducts.html";
      } else {
        const message = document.getElementById("message");
        message.classList.add("text-red");
        message.innerText = res.message;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const resetBtnHandler = () => {
  const email = document.getElementById("email").value;
  const resetForm = new FormData();
  resetForm.append("email", email);

  const sending = {
    method: "POST",
    body: resetForm,
  };

  fetch("/back_end/resetpassword.php", sending)
    .then((res) => res.json())
    .then((res) => {
      const message = document.getElementById("message");
      message.classList.add(res.status ? "text-primary" : "text-red");
      message.classList.remove(res.status ? "text-red" : "text-primary");
      message.innerText = res.message;
    })
    .catch((error) => {
      console.log(error);
    });
};

if (btn) {
  btn.addEventListener("click", productHanlder);
}

if (signUpBtn) {
  signUpBtn.addEventListener("click", signUpHanlder);
}

if (logInBtn) {
  logInBtn.addEventListener("click", loginHandler);
}

if (resetBtn) {
  resetBtn.addEventListener("click", resetBtnHandler);
}
