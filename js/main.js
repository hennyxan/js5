let btnAdd = document.querySelector('[name="btnAdd"]');
let btnRemove = document.querySelector('[name="btnRemove"]');
let btnClone = document.querySelector('[name="btnClone"]');
let cart = document.querySelector('[name="cart"]');

let itemNo = 1; 


cart.addEventListener("click", () => {
    event.preventDefault();
    if (event.target.tagName === "INPUT") {
        event.target.parentNode.remove();
    }
});

btnAdd.addEventListener("click", () => {
    let item = document.createElement("div");
    let text = document.createTextNode("" + itemNo);
    itemNo++; 
    let btn = document.createElement("input");

    item.className = "cart-item";
    item.appendChild(text);

    btn.setAttribute("type", "button");
    btn.setAttribute("name", "btnDel");
    btn.setAttribute("value", "X");

    item.appendChild(btn);
    cart.appendChild(item);
});

btnRemove.addEventListener("click", () => {
    
    if (cart.children.length > 0) {
        
        cart.lastChild.remove();
    }
});

btnClone.addEventListener("click", () => {
    if (cart.children.length > 0) {
        cart.lastChild.firstChild.textContent += " c ";
    }
});
