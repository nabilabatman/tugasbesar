document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
  
    cards.forEach(card => {
        const minusBtn = card.querySelector(".btn-minus");
        const plusBtn = card.querySelector(".btn-plus");
        const quantitySpan = card.querySelector(".quantity");
  
        minusBtn.addEventListener("click", () => {
            let currentQty = parseInt(quantitySpan.textContent);
            if (currentQty > 0) {
                quantitySpan.textContent = currentQty - 1;
            }
        });
  
        plusBtn.addEventListener("click", () => {
            let currentQty = parseInt(quantitySpan.textContent);
            quantitySpan.textContent = currentQty + 1;
        });
    });
  });