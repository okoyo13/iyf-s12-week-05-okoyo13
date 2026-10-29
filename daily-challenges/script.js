"use strict";

// DAY 1: Color Changer
const colorButton = document.getElementById("change-color");

colorButton.addEventListener("click", function () {
  const randomColor =
    "#" +
    Math.floor(Math.random() * 16777216)
      .toString(16)
      .padStart(6, "0");

  const headings = document.querySelectorAll("h1, h2, h3");

  headings.forEach(function (heading) {
    heading.style.color = randomColor;
  });
});

// DAY 2: Dynamic Element Creator
const addParagraphButton = document.getElementById("add-paragraph");
const paragraphContainer = document.getElementById("paragraph-container");
let paragraphCount = 0;

addParagraphButton.addEventListener("click", function () {
  paragraphCount++;

  const wrapper = document.createElement("div");
  const paragraph = document.createElement("p");
  const deleteButton = document.createElement("button");

  paragraph.textContent = `Paragraph ${paragraphCount}`;
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", function () {
    wrapper.remove();
  });

  wrapper.appendChild(paragraph);
  wrapper.appendChild(deleteButton);
  paragraphContainer.appendChild(wrapper);
});

// DAY 3: Image Remover
const removeImagesButton = document.getElementById("remove-images");
const toggleImagesButton = document.getElementById("toggle-images");
const imageContainer = document.getElementById("image-container");

removeImagesButton.addEventListener("click", function () {
  imageContainer.querySelectorAll("img").forEach(function (image) {
    image.remove();
  });
});

toggleImagesButton.addEventListener("click", function () {
  const images = imageContainer.querySelectorAll("img");

  images.forEach(function (image) {
    image.hidden = !image.hidden;
  });

  toggleImagesButton.textContent =
    images.length > 0 && images[0].hidden ? "Show Images" : "Hide Images";
});

// DAY 4: Content Copier
const copyButton = document.getElementById("copy-content");
const source = document.getElementById("source");
const target = document.getElementById("target");

copyButton.addEventListener("click", function () {
  target.innerHTML = source.innerHTML;
});

// Bonus: Copy source content when dropped onto target
source.draggable = true;

source.addEventListener("dragstart", function (event) {
  event.dataTransfer.setData("text/html", source.innerHTML);
});

target.addEventListener("dragover", function (event) {
  event.preventDefault();
});

target.addEventListener("drop", function (event) {
  event.preventDefault();
  target.innerHTML = event.dataTransfer.getData("text/html");
});

// DAY 5: Dark Mode Toggle
const darkModeButton = document.getElementById("toggle-dark-mode");

darkModeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
