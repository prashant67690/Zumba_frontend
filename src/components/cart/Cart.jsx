import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import burger from "../../assests/category/burger.jpg";
import biryani from "../../assests/category/biryani.jpg";
import dhosa from "../../assests/category/dhosa.jpg";
import pizza from "../../assests/category/pizza.jpg";
import { useDispatch, useSelector } from "react-redux";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <img src={img} alt="Item" />
      <h4>{title}</h4>
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {

  const {
    cartItems:{
      cheeseBurger:{quantity:cheeseBurger},
      chickenBiryani:{quantity:chickenBiryani},
      masalaDosa:{quantity:masalaDosa},
      italianPizza:{quantity:italianPizza},
    },
    subTotal,
    tax,
    shippingCharges,
    total,
  } = useSelector(state=>state.cart);

  const {cartItems:orderItems} = useSelector(state=>state.cart);

  const dispatch = useDispatch();

  const increment = (item) => {
    switch (item) {
      case 1:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 2:
        dispatch({type:"chickenBiryaniIncrement"})
        dispatch({ type: "calculatePrice" });
        break;
      case 3:
        dispatch({type:"masalaDosaIncrement"})
        dispatch({ type: "calculatePrice" });
        break;          
      case 4:
          dispatch({type:"italianPizzaIncrement"})
          dispatch({ type: "calculatePrice" });
          break;
      default:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
    }
  };

  const decrement = (item) => {
    switch (item) {
      case 1:
        if (cheeseBurger=== 0) break;
        dispatch({ type: "cheeseBurgerDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 2:
        if (chickenBiryani === 0) break;
        dispatch({ type: "chickenBiryaniDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 3:
        if (masalaDosa === 0) break;
        dispatch({ type: "masalaDosaDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 4:
        if (italianPizza === 0) break;
        dispatch({ type: "italianPizzaDecrement" });
        dispatch({ type: "calculatePrice" });
        break;  

      default:
        if (cheeseBurger === 0) break;
        dispatch({ type: "cheeseBurgerDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
    }
  };


  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(orderItems));
    localStorage.setItem(
      "cartPrices",
      JSON.stringify({
        subTotal,
        tax,
        shippingCharges,
        total,
      })
    );
  }, [orderItems, subTotal, tax, shippingCharges, total]);

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"CheeseBurger"}
          img={burger}
          value={cheeseBurger}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Chicken Biryani"}
          img={biryani}
          value={chickenBiryani}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"Masala Dhosa"}
          img={dhosa}
          value={masalaDosa}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />
        <CartItem
          title={"Italian Pizza"}
          img={pizza}
          value={italianPizza}
          increment={() => increment(4)}
          decrement={() => decrement(4)}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{subTotal}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{tax}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{shippingCharges}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>₹{total}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;