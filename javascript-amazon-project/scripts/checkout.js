import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import "../data/cart-class.js"
//import "../data/backend-practice.js"

// async makes a function to return a promise
// await lets us to write asynch code like normal code
async function loadPage() {

    try {
        await loadProductsFetch();

        await new Promise((resolve) => {
          loadCart(() => {
            //reject('error');
            resolve();
          });
        });
      
        renderOrderSummary();
        renderPaymentSummary();
      

    } catch (error) {
        console.log('Error:', error);
    } 
}

loadPage();

/*
Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
      loadCart(() => {
        resolve();
      });
    }),
  ]).then((values) => {
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
  });

  */

/*

Promise.all([
  new Promise((resolve) => {
    loadProducts(() => {
      resolve("value1");
    });
  }),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  }),
]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});

*/

/*
// Promises help us to keep our code flat, avoiding nested callbacks
new Promise((resolve) => {
  loadProducts(() => {
    resolve("value1");
  });
})
  .then((value) => {
    console.log(value);
    return new Promise((resolve) => {
      loadCart(() => {
        resolve();
      });
    });
  })
  .then(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });

  */

/*
* nested callbacks
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/
