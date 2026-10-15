
let total = 0;
function addToCart(name, price, qtyId) {
    let qty = document.getElementById(qtyId).value;
    if(qty <= 0 || qty === "") {
        alert("Sorry your request failed to be responded⚠️");
        return;
    }
    let amount = price * qty;
    total += amount;
    let item = document.createElement("li");
    item.innerHTML = name + " x " + qty + " = RWF" + amount;
    document.getElementById("cartList").appendChild(item);
    document.getElementById("total").innerText = total;
}