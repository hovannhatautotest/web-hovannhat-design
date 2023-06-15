// validation form login
const inputUsername = document.querySelector("#loginID");
const inputPassword = document.querySelector("#password");
const btnLogin = document.querySelector(".btn-custom");

// validation form login

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputUsername.value === "" || inputPassword.value === "") 
  {
    alert("vui lòng không để trống");
  } 
  else if (inputUsername.value === "admin" && inputPassword.value === "admin") 
  {
    alert("Đăng nhập thành công!HiHi");
    window.location.href = "trangchu.html";
  }
  else 
  {  
      alert("Đăng Nhập Thất Bại");
  }
});
