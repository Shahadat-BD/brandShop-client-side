import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneForward } from "react-icons/bs";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import logo from "../../../assets/images/logo.png";
const Footer = () => {
  return (
    <div className="bg-gray-800">
      <footer className="footer lg:p-12 p-12 md:p-5 text-base-content ">
        <aside>
          <p className="text-red-500 text-4xl font-bold">
            BD <span className="text-white font-bold">Shop</span>
          </p>
          <div className="text-white">
            <div className="flex items-center gap-3 mt-3">
              <CiLocationOn className="text-2xl font-bold" />
              <p>
                
                21,Sheik Mujib Road Agrabad
                <br />
                chittagong,BD
              </p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <BsTelephoneForward className="text-2xl font-bold" />
              <p>+88033462332</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <AiOutlineMail className="text-2xl  font-bold" />
              <p>socialEvent34@gmail.com</p>
            </div>
          </div>
        </aside>
        <nav className="text-white">
          <header className=" text-red-500 font-bold text-xl">
            Our Brands
          </header>
          <a className="link link-hover">Daraz.com</a>
          <a className="link link-hover">Amazon.com</a>
          <a className="link link-hover">Alibaba.com</a>
          <a className="link link-hover">Walmart.com</a>
          <a className="link link-hover">Rokomari.com</a>
          <a className="link link-hover">Chaldal.com</a>
        </nav>
        <nav className="text-white">
          <header className="text-red-500 font-bold text-xl">Company</header>
          <a className="link link-hover">Why Choose Us</a>
          <a className="link link-hover">Brands</a>
          <a className="link link-hover">My Cart</a>
          <a className="link link-hover">Add Product</a>
          <a className="link link-hover">Footer</a>
        </nav>
        <nav className="text-white">
          <form>
            <header className="text-red-500 font-bold text-xl ">
              Contact Us
            </header>
            <fieldset className="form-control lg:w-80 md:w-full w-80">
              <label className="label">
                <span className="text-white ">Enter your email address</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full lg:pr-16"
                />
                <button className="bg-red-500 h-12 px-4 rounded-r-md font-bold text-white absolute top-0 right-0">
                  Subscribe
                </button>
                <div className="flex items-center mt-5">
                  <AiFillFacebook className="text-4xl font-bold mr-2" />
                  <AiFillInstagram className="text-4xl font-bold mr-2" />
                  <AiFillLinkedin className="text-4xl font-bold mr-2" />
                  <AiFillTwitterSquare className="text-4xl font-bold mr-2" />
                </div>
              </div>
            </fieldset>
          </form>
        </nav>
      </footer>
      <h1 className="text-white text-center pb-3">All right reserved.created by <span className="text-red-500 font-semibold"> @shahadat</span></h1>
    </div>
  );
};

export default Footer;