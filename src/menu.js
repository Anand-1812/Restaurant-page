 export function Menu() {
    const content = document.getElementById("content");
    content.innerHTML = " ";

    const menuItems = [
        ["Serial No", "Beverage", "Price"],
        ["1", "Espresso", "$ 10"],
        ["2", "Cappuccino", "$ 8"],
        ["3", "Latte", "$ 9"]
    ];

    // Heading
    const heading = document.createElement("h1");
    heading.textContent = "Social Brew House ☕ — your perfect place to unwind.";
    heading.className = "main-heading";

    //Menu
    const tableDiv = document.createElement("div");
    tableDiv.className = "table-div";
    tableDiv.appendChild(createMenu());

    content.appendChild(heading);
    content.appendChild(tableDiv);

    function createMenu() {
        const table = document.createElement("table");
        table.setAttribute('border', 1);
        const tbody = document.createElement("tbody");
        for (let i = 0;i < menuItems.length;i++) {
            const tr = document.createElement("tr");
            tbody.appendChild(tr);
            for (let j = 0;j < menuItems[0].length;j++) {
                const cell = i === 0 ? document.createElement("th") : document.createElement("td");
                cell.textContent = menuItems[i][j];
                tr.appendChild(cell);
            }
        }
        table.appendChild(tbody);
        return table;
    }
}