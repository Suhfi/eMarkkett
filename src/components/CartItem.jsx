import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetCart,
} from "../redux/markkettSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const CartItem = () => {
  const productData = useSelector((state) => state.markkett.productData);
  const dispatch = useDispatch();
  return (
    <div className="w-2/3 pr-10">
      <div>
        <h2 className="font-titleFont text-2xl">Shopping Cart</h2>
      </div>
      <div>
        {productData.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between gap-4 mt-6"
          >
            <div className="flex items-center gap-2">
              <CloseIcon
                onClick={() =>
                  dispatch(deleteItem(item._id)) &
                  toast.error(`${item.title} is removed`)
                }
                className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
              />
              <img
                className="w-32 h-32 object-cover"
                src={item.image}
                alt="ProductImage"
              />
            </div>
            <h2 className="w-52">{item.title}</h2>
            <p>{item.quantity}</p>
            <p className="w-10">{item.price}</p>
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <span
                  onClick={() =>
                    dispatch(
                      decrementQuantity({
                        _id: item._id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description,
                      })
                    )
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </span>
                <span>{item.quantity}</span>
                <span
                  onClick={() =>
                    dispatch(
                      incrementQuantity({
                        _id: item._id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description,
                      })
                    )
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </span>
              </div>
            </div>
            <p className="w-14">${item.quantity * item.price}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        <button
          onClick={() =>
            dispatch(resetCart()) & toast.error("Your Cart is Empty")
          }
          className="bg-red-500 w-52 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300"
        >
          Reset Cart
        </button>
        <Link to="/">
          <button className=" bg-gray-700 text-white font-semibold w-52 p-1 items-center mt-8 ml-7 hover:bg-gray-600 active:bg-gray-500">
            Go to Home Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartItem;
