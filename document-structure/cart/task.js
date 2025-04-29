document.addEventListener('DOMContentLoaded', function() {
    const cart = document.querySelector('.cart__products');
    
    // изменение количества
    document.querySelectorAll('.product__quantity-control').forEach(control => {
        control.addEventListener('click', function() {
            const quantityValue = this.closest('.product__quantity-controls')
                                .querySelector('.product__quantity-value');
            let value = parseInt(quantityValue.textContent);
            
            if (this.classList.contains('product__quantity-control_dec')) {
                value = Math.max(1, value - 1);
            } else if (this.classList.contains('product__quantity-control_inc')) {
                value += 1;
            }
            
            quantityValue.textContent = value;
        });
    });
    
    document.querySelectorAll('.product__add').forEach(button => {
        button.addEventListener('click', function() {
            const product = this.closest('.product');
            const productId = product.dataset.id;
            const productImage = product.querySelector('.product__image').src;
            const quantity = parseInt(product.querySelector('.product__quantity-value').textContent);
            
            // есть ли товар уже в корзине
            const existingProduct = cart.querySelector(`.cart__product[data-id="${productId}"]`);
            
            if (existingProduct) {
                // Увеличиваем количество
                const countElement = existingProduct.querySelector('.cart__product-count');
                countElement.textContent = parseInt(countElement.textContent) + quantity;
            } else {
                // Добавляем новый товар
                cart.insertAdjacentHTML('beforeend', `
                    <div class="cart__product" data-id="${productId}">
                        <img class="cart__product-image" src="${productImage}">
                        <div class="cart__product-count">${quantity}</div>
                    </div>
                `);
            }
        });
    });
});