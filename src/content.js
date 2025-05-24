const content = document.getElementById("content");

// Heading
const heading = document.createElement("h1");
heading.textContent = "My Restaurant Page 💪";

// Paragraph section
const paraDiv = document.createElement("div");
const para = document.createElement("p");
para.textContent = `The restaurant you need is your home kitchen 👍. 
Go ahead and make something!`;
paraDiv.appendChild(para);

// Time section
const timeDiv = document.createElement("div");
const time = document.createElement("p");
time.textContent = `The restaurant is your home ⭐⭐. There is no fixed time — whenever you're hungry, go ahead and make something.`;
timeDiv.appendChild(time);

// Location section
const locDiv = document.createElement("div");
const location = document.createElement("p");
location.textContent = `Seriously 😑, it's your house.`;
locDiv.appendChild(location);

// Append everything
content.appendChild(heading);
content.appendChild(paraDiv);
content.appendChild(timeDiv);
content.appendChild(locDiv);