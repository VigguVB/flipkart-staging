function darkMode() {

  var elements = document.getElementsByClassName('list');
  for (let i = 0; i <= elements.length; i++) {
    elements[i].style.backgroundColor = "black";
    elements[i].style.color = "white"
  }

}
function lightMode() {
  var elements2 = document.getElementsByClassName('list');
  for (let i = 0; i <= elements2.length; i++) {
    elements2[i].style.backgroundColor = "white";
    elements2[i].style.color = "black"
  }
}

function loginHandler() {

  document.getElementById('loginName').innerText = "LOGIN";
  var a = document.getElementById('loginName').innerText;
  var accountlist = document.getElementsByClassName('accountHoverDiv');
  if (a === "LOGIN") {
    accountlist[0].style.display = "none"
  } else if (a === "My Account") {
    accountlist[0].style.display = "block"

  }

}
function loginClicked() {
  var a = document.getElementById('loginName').innerText;

  var loginModal = document.getElementById("loginModal");
  if (a === "LOGIN") {
    loginModal.style.display = "block";
    document.getElementById('marquee').style.display = "none";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    document.getElementsByClassName('quicksearch')[0].style.backgroundColor = "rgba(0, 0, 0, 0.08)"
  }
}
function validateLogin() {
  let username = document.getElementById("enteredUser").value;
  let password = document.getElementById("enteredpassword").value;
  var loginModal = document.getElementById("loginModal");
  var a = document.getElementById('loginName').innerText;
  var accountlist = document.getElementsByClassName('accountHoverDiv');
  var formSubmit = document.getElementById('form');
  formSubmit.addEventListener('submit', (event) => {
    event.preventDefault();
  })

  if (username === "9900262848" && password === "Vignesh") {
    formSubmit.addEventListener('submit', (event) => {
      event.preventDefault();
    })
    loginModal.style.display = "none";
    document.body.style.backgroundColor = "white";
    document.getElementById('marquee').style.display = "none";
    document.getElementById('loginName').innerText = "My Account";
    accountlist[0].style.display = "block";
  } else if (username.trim() === "" || password.trim() === "") {
    alert('UserName or Password Must not be Empty');
  } else if (username !== "9900262848" || password !== "Vignesh") {
    alert("Invalid Credentials");

  }

}

const closeModal = () => {
  var a = document.getElementById('loginName').innerText;
  var loginModal = document.getElementById("loginModal");
  var accountlist = document.getElementsByClassName('accountHoverDiv');
  loginModal.style.display = "none";
  if(a==="My Account"){
    accountlist[0].style.display = "block";
  }
  
  document.body.style.backgroundColor = "white";
  document.getElementById('marquee').style.display = "block";
}

function closeCoupon(){
  document.getElementById("coupon").style.display = "none"
}





