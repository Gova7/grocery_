let bgContaierEl = document.createElement("div");
bgContaierEl.classList.add("bg-container");
document.body.appendChild(bgContaierEl);

let headingEl = document.createElement("h1");
headingEl.classList.add("heading");
headingEl.textContent = "Grocery List";
bgContaierEl.appendChild(headingEl);

let listContainerEl = document.createElement("ul");
listContainerEl.classList.add("listContainer")
bgContaierEl.appendChild(listContainerEl);



let groceryItems = ["milk", "bread", "choclates", "peanuts", "boost", "horlicks"]
for (let groceryItem of groceryItems) {
    let listitemEl = document.createElement("li");
    listitemEl.textContent = groceryItem;
    listContainerEl.appendChild(listitemEl);


}