import React from "react";
import logo from "../Assets/Images/logo.png";
import { BiCategory } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";

const Navber = () => {
  return (
    <div className="md:container md:mx-auto">
      <div className="logo flex justify-center mt-5">
        <img className="w-40 md:w-56" src={logo} alt="" />
      </div>
      <div>
        <div class="navbar bg-base-100">
          <div class="navbar-start">
            <div class="dropdown  hidden md:block">
              <label
                tabindex="0"
                class="btn btn-primary m-1 text-xl font-light"
              >
                <BiCategory />
                <span className="mx-4">CATEGORIES</span>
                <BiChevronDown />
              </label>
              <ul
                tabindex="0"
                class="dropdown-content menu p-2 shadow bg-secondary rounded-box w-56 mt-3"
              >
                <li>
                  <a>WOMAN COLLECTION</a>
                </li>
                <li>
                  <a>MAN COLLECTION</a>
                </li>
                <li>
                  <a>KIDS COLLECTION</a>
                </li>
                <li>
                  <a>ACCESORIES</a>
                </li>
                <li>
                  <a>KITCHEN ITEMS</a>
                </li>
                <li>
                  <a>COMPUTER PARTS</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0">
              <li>
                <a>HOME</a>
              </li>
              <li>
                <a>ORDERS</a>
              </li>
              <li>
                <a>BLOG</a>
              </li>
              <li>
                <a>CONTACT</a>
              </li>
            </ul>
          </div>
          <div class="navbar-end">
            <div class="items-center gap-3 hidden md:flex">
              <div class="dropdown dropdown-end">
                <label
                  tabindex="0"
                  class="btn btn-secondary bg-transparent border-transparent btn-circle mt-2"
                >
                  <div class="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-7 w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span class="badge badge-lg bg-primary text-base-100 indicator-item">
                      8
                    </span>
                  </div>
                </label>
                <div
                  tabindex="0"
                  class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div class="card-body">
                    <span class="font-bold text-lg">8 Items</span>
                    <span class="text-info">Subtotal: $999</span>
                    <div class="card-actions">
                      <button class="btn btn-primary btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                  <div class="w-10 rounded-full">
                    <img src="https://api.lorem.space/image/face?hash=33791" />
                  </div>
                </label>
                <ul
                  tabindex="0"
                  class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a class="justify-between">
                      Profile
                      <span class="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
