let menProducts = [];
let womenProducts = [];
let kidsProducts = [];
document.addEventListener('DOMContentLoaded', function () {
    fetchProducts();
});

function fetchProducts() {
    fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
        .then(response => response.json())
        .then(data => {

            data.categories.forEach(category => {
                if (category.category_name === 'Men') {
                    menProducts = category.category_products;
                }
                else if (category.category_name === 'Women') {
                    womenProducts = category.category_products;
                }
                else if (category.category_name === 'Kids') {
                    kidsProducts = category.category_products;
                }
            });
            filterCategory('Men')
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
}

function filterCategory(category) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';
    if (category === 'Men') {
        menProducts.forEach(product => {
            productsContainer.innerHTML += `
      <div class="product" id="${product.id}">
        ${product.badge_text ? `<div class="badge">${product.badge_text}</div>` : ''}
        <img src="${product.image}" alt="${product.title}" >
        <div class="product-info">
        <div>
            <span class="product-title">${product.title}</span>
            <span class="dot-separator"></span>
            <span class="product-vendor">${product.vendor}</span>
            </div>
        <div>
            <span class="product-price">Rs ${parseFloat(product.price).toFixed(2)}</span>
            <span class="product-compare-at-price">${parseFloat(product.compare_at_price).toFixed(2)}</span>
            <span class="product-discount">${calculateDiscount(product.price, product.compare_at_price)}% off </span>
        </div>
        <div><button class="add-to-cart">Add to Cart</button></div>
        </div>
      </div>
        `;
        });
    }
    else if (category === 'Women') {
        womenProducts.forEach(product => {
            productsContainer.innerHTML += `
      <div class="product" id="${product.id}">
        ${product.badge_text ? `<div class="badge">${product.badge_text}</div>` : ''}
        <img src="${product.image}" alt="${product.title}" >
        <div class="product-info">
        <div>
            <span class="product-title">${product.title}</span>
            <span class="dot-separator"></span>
            <span class="product-vendor">${product.vendor}</span>
            </div>
        <div>
            <span class="product-price">Rs ${parseFloat(product.price).toFixed(2)}</span>
            <span class="product-compare-at-price">${parseFloat(product.compare_at_price).toFixed(2)}</span>
            <span class="product-discount">${calculateDiscount(product.price, product.compare_at_price)}% off </span>
        </div>
        <div><button class="add-to-cart">Add to Cart</button></div>
        </div>
      </div>
        `;
        });
    }
    else if (category === 'Kids') {
        kidsProducts.forEach(product => {
            productsContainer.innerHTML += `
      <div class="product" id="${product.id}">
        ${product.badge_text ? `<div class="badge">${product.badge_text}</div>` : ''}
        <img src="${product.image}" alt="${product.title}" >
        <div class="product-info">
        <div>
            <span class="product-title">${product.title}</span>
            <span class="dot-separator"></span>
            <span class="product-vendor">${product.vendor}</span>
            </div>
        <div>
            <span class="product-price">Rs ${product.price}</span>
            <span class="product-compare-at-price">${product.compare_at_price}</span>
            <span class="product-discount">${calculateDiscount(product.price, product.compare_at_price)}% off </span>
        </div>
        <div><button class="add-to-cart">Add to Cart</button></div>
        </div>
      </div>
        `;
        });
    }

    document.querySelectorAll('.tab-bar button').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelectorAll('.tab-bar button').forEach(button => {
        if (button.innerHTML === category) {
            button.classList.add('active');
        } else {

            button.classList.remove('active');
        }
    });
}
function calculateDiscount(price, compareAtPrice) {
    const discount = ((compareAtPrice - price) / compareAtPrice) * 100;
    return discount.toFixed(2);
}