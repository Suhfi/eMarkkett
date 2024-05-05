import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/markkettSlice";
import { toast } from "react-toastify";

const Product = () => {
  const [details, setDetails] = useState({});
  let [baseQuantity, setBaseQuantity] = useState(1);
  const location = useLocation();
  useEffect(() => {
    setDetails(location.state.item);
  }, []);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div>
          <img
            className="w-full h-[550px] object-cover"
            src={details.image}
            alt="ProductImage"
          />
        </div>
        <div className="w-3/5 flex flex-col justify-center gap-12">
          <div>
            <h2 className="text-4xl font-semibold">{details.title}</h2>
            <div className="flex items-center gap-4 mt-3">
              <p className="line-through font-b text-gray-500">
                ${details.oldPrice}
              </p>
              <p className="font-semibold font-medium">${details.price}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-base">
            <div className="flex">
              <StarOutlineIcon />
              <StarOutlineIcon />
              <StarOutlineIcon />
              <StarOutlineIcon />
              <StarOutlineIcon />
            </div>
            <p className="text-xs text-gray-500 ">(Customer Review)</p>
          </div>
          <p className="text-base text-gray-500 -mt-3">{details.description}</p>
          <div className="flex gap-4">
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={() =>
                    setBaseQuantity(
                      baseQuantity === 1 ? (baseQuantity = 1) : baseQuantity - 1
                    )
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <span>{baseQuantity}</span>
                <button
                  onClick={() => setBaseQuantity(baseQuantity + 1)}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: details._id,
                    title: details.title,
                    image: details.image,
                    price: details.price,
                    quantity: baseQuantity,
                    description: details.description,
                  })
                ) & toast.success(`${details.title} is added`)
              }
              className="bg-black text-white py-3 px-6 active:bg-gray-800"
            >
              Add to Cart
            </button>
          </div>
          <p className="text-base text-gray-500">
            Category :
            <span className="font-medium capitalize">{details.category}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
