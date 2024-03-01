"use strict";


// components
let loader = document.querySelector(".loader");

// loader
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        loader.classList.add("loader-active");
    }, 2500);
});

// 