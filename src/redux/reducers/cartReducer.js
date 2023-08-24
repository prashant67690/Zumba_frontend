import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : {
        cheeseBurger: {
          quantity: 0,
          price: 200,
        },
        chickenBiryani: {
          quantity: 0,
          price: 120,
        },
        masalaDosa: {
          quantity: 0,
          price: 100,
        },
        italianPizza: {
          quantity: 0,
          price: 250,
        },
      },
  subTotal: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).subTotal
    : 0,
  tax: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).tax
    : 0,
  shippingCharges: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).shippingCharges
    : 0,
  total: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).total
    : 0,
  shippingInfo: localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo"))
    : {},
};

export const cartReducer = createReducer(initialState, {
  cheeseBurgerIncrement: (state) => {
    state.cartItems.cheeseBurger.quantity += 1;
  },
  chickenBiryaniIncrement: (state) => {
    state.cartItems.chickenBiryani.quantity += 1;
  },
  masalaDosaIncrement: (state) => {
    state.cartItems.masalaDosa.quantity += 1;
  },
  italianPizzaIncrement: (state) => {
    state.cartItems.italianPizza.quantity += 1;
  },
  cheeseBurgerDecrement: (state) => {
    state.cartItems.cheeseBurger.quantity -= 1;
  },
  chickenBiryaniDecrement: (state) => {
    state.cartItems.chickenBiryani.quantity -= 1;
  },
  masalaDosaDecrement: (state) => {
    state.cartItems.masalaDosa.quantity -= 1;
  },
  italianPizzaDecrement: (state) => {
    state.cartItems.italianPizza.quantity -= 1;
  },

  calculatePrice: (state) => {
    state.subTotal =
      state.cartItems.cheeseBurger.price *
        state.cartItems.cheeseBurger.quantity +
      state.cartItems.chickenBiryani.price *
        state.cartItems.chickenBiryani.quantity +
      state.cartItems.masalaDosa.price * state.cartItems.masalaDosa.quantity +
      state.cartItems.italianPizza.price *
        state.cartItems.italianPizza.quantity;

    state.tax = state.subTotal * 0.18;
    state.shippingCharges = state.subTotal > 1000 ? 0 : 200;
    state.total = state.subTotal + state.tax + state.shippingCharges;
  },

  emptyState: (state) => {
    state.cartItems = {
      cheeseBurger: {
        quantity: 0,
        price: 200,
      },
      chickenBiryani: {
        quantity: 0,
        price: 120,
      },
      masalaDosa: {
        quantity: 0,
        price: 100,
      },
      italianPizza: {
        quantity: 0,
        price: 250,
      },
    };

    state.subTotal = 0;
    state.shippingCharges = 0;
    state.tax = 0;
    state.total = 0;
  },

  addShippingInfo: (state, action) => {
    state.shippingInfo = {
      hNo: action.payload.hNo,
      city: action.payload.city,
      state: action.payload.state,
      country: action.payload.country,
      pinCode: action.payload.pinCode,
      phoneNo: action.payload.phoneNo,
    };
  },
});
