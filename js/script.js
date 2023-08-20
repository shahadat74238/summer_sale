// Select Product Entry.
function productEntry(itemName){
    const selectItemsContainer = document.getElementById('select-items-container');
    const count = selectItemsContainer.childElementCount;

    const h1 = document.createElement('h1');
    h1.classList.add('font-bold', 'text-xl');
    h1.innerHTML = `${count + 1}. ${itemName}`;
    selectItemsContainer.appendChild(h1);
};

// Set total price.
function setElementInnertext(elementId, totalPrice){
    const element = document.getElementById(elementId);
    element.innerText = totalPrice;
};

let totalPrice = 0;
// First Porduct.
function clickHandler(data){
    const productName = data.childNodes[3].childNodes[3].innerText;
    productEntry(productName);
    
    const productPrice = data.childNodes[3].childNodes[5].innerText.split(' ')[0];
    
    totalPrice = parseFloat(totalPrice) + parseFloat(productPrice);
   
    // set total price innertext.
    setElementInnertext('set-total-price', totalPrice.toFixed(2));

    // set total innertext.
    setElementInnertext('set-total', totalPrice.toFixed(2));

};