import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";

const Cart = () => {
  const productData = useSelector((state) => state.markkett.productData);
  const userInfo = useSelector((state) => state.markkett.userInfo);
  const [totalAmount, setTotalAmount] = useState("");
  const [payNow, setPayNow] = useState(false);

  useEffect(
    (item) => {
      let price = 0;
      productData.map((item) => {
        price += item.price * item.quantity;
        return price;
      });
      setTotalAmount(price.toFixed(2));
    },
    [productData]
  );
  const handleCheckOut = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please Sign in Checkout");
    }
  };
  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="CartImage"
      />
      {productData.length > 0 ? (
        <div className="max-w-screen-xl mx-auto py-20 flex">
          <CartItem />
          <div className="w-1/3 bg-[#fafafa] py-6 px-4">
            <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
              <h2 className="text-2xl font-medium">Cart Total Items</h2>
              <p className="flex items-center gap-4 text-base">
                Sub Total
                <span className="font-titleFont font-bold text-lg">
                  $ {totalAmount}
                </span>
              </p>
              <p className="flex items-start gap-4 text-base">
                Shipping
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  vel deserunt ullam, soluta molestiae atque? Optio eum autem?
                </span>
              </p>
            </div>
            <p className="font-titleFont font-semibold flex justify-between mt-6">
              Total <span className="text-xl font-bold">$ {totalAmount}</span>
            </p>
            <button
              onClick={handleCheckOut}
              className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
            >
              Proceed to Checkout
            </button>
            {payNow && (
              <div className="w-full mt-6 flex items-center justify-center">
                <StripeCheckout
                  stripeKey="pk_test_51LXpmzBcfNkwYgIPXd3qq3e2m5JY0pvhaNZG7KSCklYpVyTCVGQATRH8tTWxDSYOnRTT5gxOjRVpUZmOWUEHnTxD00uxobBHkc"
                  name="eMarkkett Online Shopping"
                  amount={totalAmount * 100}
                  label="Pay to eMarkkett"
                  description={`Your Payment amount is $${totalAmount}`}
                  // token={payment}
                  email={userInfo.email}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="max-w-screen-xl mx-auto py-10 flex flex-col items-center gap-2 justify-center">
          <p className="text-xl text-orange-600 font-titleFont font-semibold">
            Your Cart is Empty. Please go back to Shopping and add products to
            Cart.
          </p>
          <Link to="/">
            <button className=" bg-gray-700 text-white font-semibold w-52 p-1 items-center mt-8 ml-7 hover:bg-gray-600 active:bg-gray-500">
              Go to Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
