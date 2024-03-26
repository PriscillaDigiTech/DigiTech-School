// windowLoad
let windowHeightMin = window.innerWidth <= 1090;

function windowLoad() {
  windowHeightMin === true
    ? window.addEventListener("load", closeNav(), false)
    : window.addEventListener("load", openNav(), true);
}

const openIcon = document.querySelector("#open-icon");
const closeIcon = document.querySelector("#close-icon");
const navList = document.querySelector(".menuNav");
const navListLi = navList.querySelector(".liNav");

function openNav() {
  openIcon.style.display = "none";
  closeIcon.style.display = "block";
  navList.style.display = "block";
}

function closeNav() {
  closeIcon.style.display = "none";
  openIcon.style.display = "block";
  navList.style.display = "none";
}

//formulaire d'inscription

document.addEventListener("DOMContentLoaded", function () {
  var checkboxes = document.querySelectorAll('input[name="programmes"]');
  var enfantInfo = document.getElementById("enfant_info");

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      if (checkbox.value === "DigiKids" || checkbox.value === "DigiBootCamp") {
        if (checkbox.checked) {
          enfantInfo.style.display = "block";
        } else {
          enfantInfo.style.display = "none";
        }
      }
    });
  });
});
