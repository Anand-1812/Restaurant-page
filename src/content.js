const content = document.getElementById("content");

// Heading
const heading = document.createElement("h1");
heading.textContent = "Social Brew House ☕ — your perfect place to unwind.";
heading.className = "main-heading";

// Paragraph section
const paraDiv = document.createElement("div");
paraDiv.className = "para-section";

const para = document.createElement("p");
para.textContent = "Whether you're here to relax or get some work done, enjoy a cup of coffee and make yourself at home.";

paraDiv.appendChild(para);

// Append everything
content.appendChild(heading);
content.appendChild(paraDiv);