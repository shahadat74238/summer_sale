// Select Product Entry.
function productEntry(itemName){
    const selectItemsContainer = document.getElementById('select-items-container');
    const count = selectItemsContainer.childElementCount;
    const h1 = document.createElement('h1');
    h1.classList.add('font-bold', 'text-xl');
    h1.innerText = `${count + 1}. ${itemName}`;
    selectItemsContainer.appendChild(h1);
};
// Set total price.
function setElementInnertext(elementId, totalPrice){
    const element = document.getElementById(elementId);
    element.innerText = `${totalPrice} TK`;
};
let totalPrice = 0;
function clickHandler(data){
    const productName = data.childNodes[3].childNodes[3].innerText;
    productEntry(productName);
    const productPrice = data.childNodes[3].childNodes[5].innerText.split(' ')[0];
    totalPrice = parseFloat(totalPrice) + parseFloat(productPrice);
    setElementInnertext('set-total-price', totalPrice.toFixed(2));
    setElementInnertext('set-total', totalPrice.toFixed(2));
    // Purchase Botton disabled and enabled.
    if(totalPrice >= 0){
        const btnPurchase = document.getElementById('btn-purchase');
        btnPurchase.removeAttribute('disabled');
        btnPurchase.classList.add('!bg-[#E527B2]');
    }
    // Apply Botton disabled and enabled.
    if(totalPrice >= 200){
        const btnApply = document.getElementById('btn-apply');
        btnApply.removeAttribute('disabled');
        btnApply.classList.add('!bg-[#E527B2]');
    };
};
// 20% Discount .
function getDiscount(){
    const inputValue = document.getElementById('cuppon-input').value;
    if(inputValue !== "SELL200"){
        alert('Your Purchase not above TK 200!!!');
    }
    else{
        const discount = totalPrice * (20 / 100);
        setElementInnertext('discount', discount.toFixed(2));
        const discountTotal = totalPrice - discount;
        setElementInnertext('set-total', discountTotal.toFixed(2));
    };
};
// Reset Data.
function resetData(data){
    window.location.reload();
};

