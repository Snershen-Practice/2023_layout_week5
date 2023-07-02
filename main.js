import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

let path = location.pathname;
let pathArr = path.split("/");
let pathName = pathArr[pathArr.length - 1];
let htmlName = pathName.slice(0, pathName.indexOf(".html"));
const navChild = document.querySelectorAll(".nav-link");

function headerNow() {
  navChild.forEach((item) => {
    // console.log(item.dataset.nav);
    if (item.dataset.nav === htmlName) {
      item.classList.add("nav-link-active");
      //   console.log(item.classList);
    }
  });
}

window.onload = function () {
  headerNow();
};
