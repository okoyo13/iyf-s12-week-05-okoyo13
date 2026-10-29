// getElementById - returns single element
const header = document.getElementById("main-header");
console.log("getElementById:", header);

// getElementsByClassName - returns HTMLCollection (live)
const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

// getElementsByTagName - returns HTMLCollection (live)
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

// querySelector - returns first match
const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

// querySelectorAll - returns NodeList (static)
const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);

// 1. Select the h1 element
const heading = document.querySelector("h1");
console.log("h1 element:", heading);

// 2. Select all elements with class "content"
const allContents = document.querySelectorAll(".content");
console.log("All content elements:", allContents);

// 3. Select the form with id "contact-form"
const contactForm = document.getElementById("contact-form");
console.log("Contact form:", contactForm);

// 4. Select the email input
const emailInput = document.querySelector("#email");
console.log("Email input:", emailInput);

// 5. Select all list items in the nav
const navItems = document.querySelectorAll("nav li");
console.log("Navigation list items:", navItems);

// 6. Select the first .nav-link
const firstNavLink = document.querySelector(".nav-link");
console.log("First navigation link:", firstNavLink);

// 7. Select the last paragraph
const lastParagraph = document.querySelector("p:last-of-type");
console.log("Last paragraph:", lastParagraph);

// Traversing the DOM

const nav = document.querySelector("nav");

// Parent
console.log(nav.parentElement);

// Children
console.log(nav.children);
console.log(nav.firstElementChild);
console.log(nav.lastElementChild);

// Siblings
const article = document.querySelector("article");
console.log(article.nextElementSibling);
console.log(article.previousElementSibling);

// Descendants
const navLinks = nav.querySelectorAll("a");
console.log(navLinks);

// Practice Task 1:Select the header, then navigate to the nav inside it
const headerElement = document.querySelector("header");
const navInsideHeader = headerElement.querySelector("nav");
console.log("Nav inside header:", navInsideHeader);

// Practice Task 2: Select the first nav-link, then get its parent li
const firstLinkElement = document.querySelector(".nav-link");
console.log("Parent li:", firstLinkElement.parentElement);

// Practice Task 3: Select the article, then get its next sibling
const articleElement = document.querySelector("article");
console.log("Article next sibling:", articleElement.nextElementSibling);

// Practice Task 4: Select the ul, then get all its child li elements
const navList = document.querySelector("nav ul");
console.log("Nav list children:", navList.children);

// Practice Task 5: Start from the footer and navigate up to the body
const footerElement = document.querySelector("footer");
console.log("Footer parent:", footerElement.parentElement);
console.log("Footer grandparent:", footerElement.parentElement.parentElement);
console.log(
  "Footer great-grandparent:",
  footerElement.parentElement.parentElement.parentElement,
);
// Modifying Content
// Text Content

const h1 = document.querySelector("h1");

// Reading text
console.log("textContent:", h1.textContent);
console.log("innerText:", h1.innerText);

// Modifying text
h1.textContent = "New Title";

// HTML Content

// Reading HTML
const articleContentElement = document.querySelector("article");
console.log("Article innerHTML:", articleContentElement.innerHTML);

// Modifying HTML
articleContentElement.innerHTML = `
    <h2>Updated Article</h2>
    <p>This is new content.</p>
`;

// Safer: textContent (escapes HTML)
const userInput = "<script>alert('hack!')</script>";
articleContentElement.textContent = userInput;

// Displays as text, not executed
console.log("User input displayed as text:", articleContentElement.textContent);

// Restore article content for the following DOM exercises

articleContentElement.innerHTML = `
    <h2 class="title">Article Title</h2>
    <p class="content">This is the first paragraph.</p>
    <p class="content">This is the second paragraph.</p>
`;

// Attributes

const link = document.querySelector(".nav-link");

// Get attribute before changing it
console.log("Original href attribute:", link.getAttribute("href"));
console.log("Original href property:", link.href);

// Set attribute
link.setAttribute("href", "https://example.com");

// Check after changing it
console.log("Updated href attribute:", link.getAttribute("href"));
console.log("Updated href property:", link.href);

// Check attribute
console.log("Has target attribute:", link.hasAttribute("target"));

// Remove attribute
link.removeAttribute("target");

// Data attributes
const element = document.querySelector("[data-id]");
console.log("Data ID:", element.dataset.id);
console.log("Data category:", element.dataset.category);

element.dataset.newAttr = "value";
console.log("New data attribute:", element.dataset.newAttr);

// Modifying Styles

const container = document.querySelector(".container");

// Inline styles
container.style.backgroundColor = "#f0f0f0";
container.style.padding = "30px";
container.style.borderRadius = "8px";

// Multiple styles
Object.assign(container.style, {
  backgroundColor: "#333",
  color: "white",
  padding: "20px",
});

// Creating Elements

const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph!";
newParagraph.className = "content highlight";

// Add to the page
const articleForAdding = document.querySelector("article");
articleForAdding.appendChild(newParagraph);

// Insert before another element
const firstParagraph = articleForAdding.querySelector("p");
articleForAdding.insertBefore(newParagraph, firstParagraph);

// Modern insertion methods
articleForAdding.prepend(newParagraph);
articleForAdding.append(newParagraph);
firstParagraph.before(newParagraph);
firstParagraph.after(newParagraph);

// Removing Elements

// Remove an element
const footerToRemove = document.querySelector("footer");
footerToRemove.remove();

// Remove a child
const navToModify = document.querySelector("nav");
const lastLinkToRemove = navToModify.querySelector("li:last-child");
lastLinkToRemove.parentElement.removeChild(lastLinkToRemove);

// Clear all children using innerHTML
// Uncomment this line to test clearing the article:
// articleForAdding.innerHTML = "";

// OR clear all children using removeChild
// Uncomment this block to test the alternative method:
/*
while (articleForAdding.firstChild) {
    articleForAdding.removeChild(articleForAdding.firstChild);
}
*/

// Cloning Elements

const navItem = document.querySelector(".nav-link").parentElement;
const clone = navItem.cloneNode(true); // true = deep clone

clone.querySelector("a").textContent = "New Link";

document.querySelector(".nav-list").appendChild(clone);

// Build: Dynamically Add Navigation Items

function addNavItem(text, href) {
  const li = document.createElement("li");
  const link = document.createElement("a");

  link.className = "nav-link";
  link.textContent = text;
  link.href = href;

  li.appendChild(link);

  const navList = document.querySelector(".nav-list");
  navList.appendChild(li);
}

addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");

// Basic Events

const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

// Adding event listeners
button.addEventListener("click", function () {
  console.log("Button clicked!");
});

// Arrow function
button.addEventListener("click", () => {
  console.log("Clicked again!");
});

// Named function (can be removed later)
function handleClick() {
  console.log("Handled!");
}

button.addEventListener("click", handleClick);

// Remove event listener
button.removeEventListener("click", handleClick);

// Task 10.1: Exercise 2 — Event Types

// Mouse events
const eventButton = document.querySelector("button");
const eventHandler = () => console.log("Mouse event detected!");

eventButton.addEventListener("click", eventHandler);
eventButton.addEventListener("dblclick", eventHandler);
eventButton.addEventListener("mouseenter", eventHandler);
eventButton.addEventListener("mouseleave", eventHandler);
eventButton.addEventListener("mousemove", eventHandler);

// Keyboard and input events
const eventInput = document.createElement("input");
eventInput.type = "text";
eventInput.placeholder = "Test events";
document.body.appendChild(eventInput);

eventInput.addEventListener("keydown", () => console.log("Key down"));
eventInput.addEventListener("keyup", () => console.log("Key up"));
eventInput.addEventListener("focus", () => console.log("Input focused"));
eventInput.addEventListener("blur", () => console.log("Input lost focus"));
eventInput.addEventListener("input", () => console.log("Input changed"));
eventInput.addEventListener("change", () =>
  console.log("Input change committed"),
);

// Form events
const eventForm = document.createElement("form");
const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Test Form Submit";
eventForm.appendChild(submitButton);
document.body.appendChild(eventForm);

eventForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form submitted");
});

// Window events
window.addEventListener("load", () => console.log("Page loaded"));
window.addEventListener("resize", () => console.log("Window resized"));
window.addEventListener("scroll", () => console.log("Page scrolled"));

// Build: Click Counter

let count = 0;

const counterDisplay = document.createElement("p");
counterDisplay.textContent = count;

const increaseButton = document.createElement("button");
increaseButton.textContent = "+";

const decreaseButton = document.createElement("button");
decreaseButton.textContent = "-";

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";

document.body.appendChild(counterDisplay);
document.body.appendChild(increaseButton);
document.body.appendChild(decreaseButton);
document.body.appendChild(resetButton);

increaseButton.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});

decreaseButton.addEventListener("click", () => {
  if (count > 0) {
    count--;
    counterDisplay.textContent = count;
  }
});

resetButton.addEventListener("click", () => {
  count = 0;
  counterDisplay.textContent = count;
});

// Using Event Properties

document.addEventListener("click", function (event) {
  // The element that was clicked
  console.log("Target:", event.target);

  // The element the listener is attached to
  console.log("Current Target:", event.currentTarget);

  // Event type
  console.log("Type:", event.type);

  // Mouse position
  console.log("Position:", event.clientX, event.clientY);
});

document.addEventListener("keydown", function (event) {
  console.log("Key:", event.key);
  console.log("Code:", event.code);
  console.log("Shift:", event.shiftKey);
  console.log("Ctrl:", event.ctrlKey);
  console.log("Alt:", event.altKey);
});

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key.toLowerCase() === "s") {
    event.preventDefault();
    alert("Saved!");
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    document.querySelectorAll("form input").forEach(function (input) {
      input.value = "";
    });
  }
});

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "Enter") {
    event.preventDefault();

    const form = document.querySelector("#contact-form");

    if (form) {
      form.requestSubmit();
    }
  }
});

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Contact form submitted!");
  });
}

document.getElementById("grandparent").addEventListener("click", () => {
  console.log("Grandparent clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

const delegatedTaskList = document.getElementById("task-list");
const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");

// Handle task clicks using ONE listener on the parent ul
delegatedTaskList.addEventListener("click", function (event) {
  const clickedElement = event.target;

  // Delete a task when its Delete button is clicked
  if (clickedElement.matches(".delete-task")) {
    clickedElement.closest("li").remove();
    return;
  }

  // Toggle completed when the task text is clicked
  if (clickedElement.matches("span")) {
    clickedElement.closest("li").classList.toggle("completed");
  }
});

// Add a new task
addTaskButton.addEventListener("click", function () {
  const taskText = newTaskInput.value.trim();

  if (taskText === "") {
    return;
  }

  const listItem = document.createElement("li");
  const taskSpan = document.createElement("span");
  const deleteButton = document.createElement("button");

  taskSpan.textContent = taskText;

  deleteButton.textContent = "Delete";
  deleteButton.type = "button";
  deleteButton.classList.add("delete-task");

  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteButton);
  delegatedTaskList.appendChild(listItem);

  newTaskInput.value = "";
});

const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");

// Real-time name validation
nameInput.addEventListener("input", function (event) {
  const value = event.target.value.trim();

  if (value.length < 2) {
    showError(nameInput, "Name must be at least 2 characters");
  } else {
    clearError(nameInput);
  }
});

// Real-time email validation
emailInput.addEventListener("input", function (event) {
  const value = event.target.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(value)) {
    showError(emailInput, "Please enter a valid email");
  } else {
    clearError(emailInput);
  }
});

// Form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  console.log("Form data:", data);

  const validName = data.name.trim().length >= 2;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validEmail = emailRegex.test(data.email.trim());

  if (isValid(data)) {
    clearError(nameInput);
    clearError(emailInput);
    showSuccess("Form submitted successfully!");
    form.reset();
  } else {
    if (!validName) {
      showError(nameInput, "Name must be at least 2 characters");
    }

    if (!validEmail) {
      showError(emailInput, "Please enter a valid email");
    }
  }
});

// Display an error message
function showError(input, message) {
  input.classList.add("error");

  let errorMessage = input.nextElementSibling;

  if (!errorMessage || !errorMessage.classList.contains("error-message")) {
    errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message");
    input.insertAdjacentElement("afterend", errorMessage);
  }

  errorMessage.textContent = message;
}

// Clear an error message
function clearError(input) {
  input.classList.remove("error");

  const errorMessage = input.nextElementSibling;

  if (errorMessage && errorMessage.classList.contains("error-message")) {
    errorMessage.remove();
  }
}

// Display a success message
function showSuccess(message) {
  let successMessage = form.querySelector(".success-message");

  if (!successMessage) {
    successMessage = document.createElement("p");
    successMessage.classList.add("success-message");
    form.appendChild(successMessage);
  }

  successMessage.textContent = message;
}
function isValid(data) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return data.name.trim().length >= 2 && emailRegex.test(data.email.trim());
}
