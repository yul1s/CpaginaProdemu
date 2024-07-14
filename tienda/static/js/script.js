/*funcion del carrito de compras*/
document.addEventListener('DOMContentLoaded', () => {
  const productList = document.getElementById('product-list');
  const cartList = document.getElementById('cart-list');
  const totalPrice = document.getElementById('total-price');
  const cartCount = document.getElementById('cart-count');

  let cart = [];
  let total = 0;

  // PRODUCTOS
  const products = [
      { name: "Cinta Negra", price: 2.700, img: "static/img/cinta-negra.jpg" },
      { name: "Cinta Rosa", price: 2.000, img: "static/img/cinta-rosa-pequeña.jpg" },
      { name: "Cinta Rosa Pequeñita", price: 700, img: "static/img/cinta-rosa-pequeñita.jpg"},
      { name: "Cinta Rosa", price: 2.200, img: "static/img/cinta-rosa.jpg" },
      { name: "Llavero de Corazón Rosa", price: 1.000, img: "static/img/llavero-rosa.jpg" },
      { name: "Monedero Café con Leche", price: 3.650, img: "static/img/monedero-cierre-cafe.jpg" },
      { name: "Llavero Pompom", price: 1.250, img: "static/img/llavero-pompom.jpg" },
      { name: "Llavero de Corazón", price: 1.250, img: "static/img/llavero-colores.jpg" },
      { name: "Monedero Negro con Café", price: 3.650, img: "static/img/monedero-cierre-negro-cafe.jpg" },
      { name: "Monedero Negro", price: 3.650, img: "static/img/monedero-cierre-negro.jpg" },
      { name: "Monedero Palo Rosa", price: 3.650, img: "static/img/monedero-rosa-rojo.jpg" },
      { name: "Moño Girasol", price: 3.000, img: "static/img/monio-amarillo-cafe.jpg" },
      { name: "Moño Sunshine", price: 3.000, img: "static/img/monio-amarillo.jpg" },
      { name: "Moño café", price: 3.000, img: "static/img/monio-cafe.jpg" },
      { name: "Moño Morado", price: 3.000, img: "static/img/monio-morado.jpg" },
      { name: "Moño Rosaseo", price: 3.500, img: "static/img/monio-lana-esponjosa.jpg" },
      { name: "Moño Negro", price: 3.200, img: "static/img/monno-negro.jpg" },
      { name: "Recipiente", price: 4.500, img: "static/img/recipiente-rojo2.jpg" }
  ];

  // RENDERIZAR PRODUCTOS
  products.forEach(product => {
      const col = document.createElement('div');
      col.className = 'col-md-3 product-container';
      col.innerHTML = `
          <div class="card product-card">
              <img src="${product.img}" class="card-img-top product-image" alt="${product.name}">
              <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">$${product.price.toFixed(2)}</p>
                  <button class="btn btn-primary add-to-cart" data-name="${product.name}" data-price="${product.price.toFixed(2)}">Añadir al Carrito</button>
              </div>
          </div>`;
      productList.appendChild(col);
  });

  // EVENTO AÑADIR AL CARRITO
  document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', event => {
          const name = event.target.getAttribute('data-name');
          const price = parseFloat(event.target.getAttribute('data-price'));

          // BUSCAR SI EL PRODUCTO YA ESTA EN EL CARRITO
          const existingProduct = cart.find(item => item.name === name);
          if (existingProduct) {
              existingProduct.quantity += 1;
              existingProduct.totalPrice += price;
          } else {
              cart.push({ name, price, quantity: 1, totalPrice: price });
          }

          total += price;
          updateCart();
      });
  });

  // EVENTO BOTÓN COMPRAR
  document.querySelector('.buy-button').addEventListener('click', () => {
      alert('Compra realizada con éxito!'); // Mensaje de compra exitosa

      // Reiniciar el carrito y total
      cart = [];
      total = 0;
      updateCart();
  });

  // ACTUALIZAR CARRO DE COMPRAS
  function updateCart() {
      cartList.innerHTML = ''; // Limpiar lista de carrito
      cart.forEach((item, index) => {
          const listItem = document.createElement('li');
          listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
          listItem.innerHTML = `
              ${item.name} - $${item.totalPrice.toFixed(2)} 
              <span class="badge badge-primary badge-pill">${item.quantity}</span>
              <button class="btn btn-danger btn-sm remove-from-cart" data-index="${index}">Eliminar</button>
          `;
          cartList.appendChild(listItem);
      });

      totalPrice.textContent = total.toFixed(2);
      cartCount.textContent = cart.reduce((count, item) => count + item.quantity, 0);

      // EVENTO ELIMINAR DEL CARRITO
      document.querySelectorAll('.remove-from-cart').forEach(button => {
          button.addEventListener('click', event => {
              const index = parseInt(event.target.getAttribute('data-index'));
              const product = cart[index];
              total -= product.price;

              if (product.quantity > 1) {
                  product.quantity -= 1;
                  product.totalPrice -= product.price;
              } else {
                  cart.splice(index, 1);
              }

              updateCart();
          });
      });
  }

  // IR AL CARRITO
  document.querySelector('a[href="#carrito-section"]').addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#carrito-section').scrollIntoView({
          behavior: 'smooth'
      });
  });
});

