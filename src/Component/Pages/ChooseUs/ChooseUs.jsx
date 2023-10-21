import React from "react";
import banner from "../../../assets/product/chooseUs.png";
import { AiOutlineCheckSquare } from "react-icons/ai";
const ChooseUs = () => {
  return (
    <div className="my-10">
        <h1 className="text-center font-bold text-3xl">
            Why <span className="text-red-500">Choose Us</span>
          </h1>
      <div className="flex lg:flex-row  flex-col-reverse items-center justify-around ">
        <img className="lg:w-[650px] w-full lg:h-[550px]" src={banner} alt="" srcset="" />
        <div className="lg:w-3/4 w-full">
          <p className="text-gray-500 my-5 "> <span className="text-red-500 font-bold text-2xl">Welcome to BD Shop,</span> your premier destination for an unparalleled e-commerce experience. We proudly offer an extensive array of products, spanning fashion, electronics, home essentials, and more, all within easy reach</p>
          <div className="flex mb-2 items-center">
            <AiOutlineCheckSquare className="text-red-500 text-3xl mr-3 " />{" "}
            <p className="font-bold text-gray-500">
              {" "}
              Discover a wide selection of products, from fashion to electronics
              .
            </p>
          </div>
          <div className="flex mb-2 items-center ">
            <AiOutlineCheckSquare className="text-red-500 text-3xl mr-3 " />{" "}
            <p className="font-bold text-gray-500">
              {" "}
              Enjoy competitive pricing and exclusive deals to save on your
              purchases.
            </p>
          </div>
          <div className="flex mb-2 items-center ">
            <AiOutlineCheckSquare className="text-red-500 text-3xl mr-3 " />{" "}
            <p className="font-bold text-gray-500">
              {" "}
              Enjoy competitive pricing and exclusive deals to save on your
              purchases.
            </p>
          </div>
          <div className="flex mb-2 items-center ">
            <AiOutlineCheckSquare className="text-red-500 text-3xl mr-3 " />{" "}
            <p className="font-bold text-gray-500">
              {" "}
              Shop confidently with our secure payment methods and data
              protection.
            </p>
          </div>
          <div className="flex mb-2 items-center ">
            <AiOutlineCheckSquare className="text-red-500 text-3xl mr-3 " />{" "}
            <p className="font-bold text-gray-500">
              {" "}
              We prioritize quality, ensuring that our products meet your
              standards.
            </p>
          </div>
          <div className="flex mb-2 items-center">
            <AiOutlineCheckSquare className="text-red-500 text-3xl mr-3 " />{" "}
            <p className="font-bold text-gray-500">
              {" "}
              Shop anytime, anywhere, and have your items delivered to your
              doorstep.
            </p>
          </div>
          <div className="flex items-center">
            <AiOutlineCheckSquare className="text-red-500 text-3xl mr-3 " />{" "}
            <p className="font-bold text-gray-500">
              {" "}
              BD Shop is a name you can rely on for a trustworthy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
