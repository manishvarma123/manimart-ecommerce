import React from "react";
import logo from "../Images/logo.svg";
import { Link, Outlet } from "react-router-dom";

export default function Header() {

  let num = 0;
  let dot3 = 0;
  let down_arrow = 0;

  const show = () => {
    if (num == 1) {
      document.getElementById('all').style.display = 'none';
      num = 0;
    }
    else {
      document.getElementById('all').style.display = 'block';
      num = 1;
    }
  }

  const dot = () => {
    if (dot3 == 0) {
      document.getElementById('sm-drop').style.display = 'block';
      dot3 = 1;
    }
    else {
      document.getElementById('sm-drop').style.display = 'none';
      dot3 = 0;
    }
  }

  const downarrow = () => {
    if (down_arrow == 0) {
      document.getElementById('sm-arrow').style.display = 'block';
      down_arrow = 1;
    }
    else {
      document.getElementById('sm-arrow').style.display = 'none';
      down_arrow = 0;
    }
  }


  return (
    <>
      <div className="hidden lg:block">
        <div className="w-screen bg-[#0274be]">
          <div className="max-w-[1200px] m-auto ">
            <div className="w-full flex justify-between items-center text-white py-2">
              <h2>
                24/7 Customer service{""}
                <span className="font-bold">1-800-234-5678</span>
              </h2>
              <div className="flex justify-start">
                <h2 className="cursor-pointer">Shipping & return</h2>
                <h2 className="ml-5 cursor-pointer">Track order</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen bg-[#0671e3] border-b-[1px] border-[#1c53789b]">
          <div className="max-w-[1200px] m-auto ">
            <div className="w-full flex justify-between items-center py-4 ">
              
                <Link to='/'>
                <div className="flex justify-start items-center">
                <img src={logo} className="mr-2 mt-[6px]" alt="" />
                <h1 className="text-white text-[24px] font-bold">manimart</h1>
                </div>
                </Link>
              
              <div className="flex items-center bg-white">
                <input
                  type="text"
                  placeholder="Search product ..."
                  className="px-3 py-2 w-full border-0"
                />
                <h1 className="px-2">
                  <i className="fa-solid fa-magnifying-glass bg-white  cursor-pointer "></i>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen bg-[#0671e3]">
          <div className="max-w-[1200px] m-auto ">
            <div className="w-full py-4 flex justify-between items-center">
              <ul className="text-white space-x-8 relative">
                <li className="inline-block space-x-2 cursor-pointer">
                  <a onClick={() => show()} className="font-bold hover:underline underline-offset-4 cursor-pointer">
                    All products
                    <i class="fa-solid fa-chevron-down ml-3"></i>
                  </a>

                  <ul id="all" className="absolute bpttom-0 hidden text-white font-bold z-50 bg-[#0671e3] pt-[26px] pb-3 px-8">
                    <li>
                      <Link onClick={() => show()} to='/Air' href="" className="inline-block py-2">Air conditioner</Link>
                    </li>
                    <li>
                      <Link onClick={() => show()} to='/Kitchen' href="" className="inline-block py-2">Kitchen appliances</Link>
                    </li>
                    <li>
                      <Link onClick={() => show()} to='/Laptop' href="" className="inline-block py-2">PCs & laptop</Link>
                    </li>
                    <li>
                      <Link onClick={() => show()} to='/Gadget' href="" className="inline-block py-2">Gadgets</Link>
                    </li>
                    <li>
                      <Link onClick={() => show()} to='/Smart' href="" className="inline-block py-2">Smart home</Link>
                    </li>
                  </ul>
                </li>
                <li className="inline-block ">
                  <Link to='/Home' className="font-bold hover:underline underline-offset-4 cursor-pointer">
                    Home appliances
                  </Link>

                </li>
                <li className="inline-block">
                  <Link to='/Audio' className="font-bold hover:underline underline-offset-4 cursor-pointer">
                    Audio & video
                  </Link>
                </li>
                <li className="inline-block">
                  <Link to='/Refrigerator' className="font-bold hover:underline underline-offset-4 cursor-pointer">
                    Refrigerator
                  </Link>
                </li>
                <li className="inline-block">
                  <Link to='/Arrival' className="font-bold hover:underline underline-offset-4 cursor-pointer">
                    New arrivals
                  </Link>
                </li>
                <li className="inline-block">
                  <Link to='/Today' className="font-bold hover:underline underline-offset-4 cursor-pointer">
                    Today's deal
                  </Link>
                </li>
                <li className="inline-block">
                  <Link className="font-bold hover:underline underline-offset-4 cursor-pointer">
                    Gift cards
                  </Link>
                </li>
              </ul>
              <ul className="text-white space-x-8">
                <li className="inline-block">
                  <Link className="font-bold hover:underline underline-offset-4 cursor-pointer">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </Link>
                </li>
                <li className="inline-block">
                  <Link className="font-bold hover:underline underline-offset-4 cursor-pointer bg-green-500 px-4 py-2">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <div className="w-screen bg-[#0671e3] border-b-[1px] border-[#1c53789b]">
          <div className="max-w-[1200px] m-auto ">
            <div className="w-full flex justify-between items-center py-3 px-3">
              <div className="flex justify-start items-center">
                <div onClick={() => dot()} className="group">
                  <i className="border-2 border-transparent group-hover:border-2 mt-2 mr-3 group-hover:border-white p-2 text-[20px] text-white fa-solid fa-bars"></i>
                </div>

                <Link to='/' className="no-underline">
                  <div className="flex items-center">
                    <img src={logo} className="mr-2 mt-[6px]" alt="" />
                    <h1 className="text-white text-[24px] font-bold hover:no-underline">manimart</h1>
                  </div>
                </Link>

              </div>
              <div className="flex items-center ">
                <ul className=" space-x-4 text-white">
                  <li className="inline-block">
                    <Link className="font-bold hover:underline underline-offset-4 cursor-pointer hover:text-black">
                      <i class="fa-solid fa-cart-shopping"></i>
                    </Link>
                  </li>
                  <li className="inline-block">
                    <Link className="font-bold cursor-pointer bg-green-500 px-3 py-2 hover:text-black hover:no-underline rounded-sm">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="sm-drop" className="hidden">
          <div className="w-full bg-white  drop-shadow-md px-4 py-3">
            <ul className="text-[#0671e3] space-y-2">
              <li className="space-x-3 space-y-3 relative">
                <a onClick={() => downarrow()} className="cursor-pointer">All products <i class="ml-3 fa-solid fa-chevron-down"></i></a>

                <ul id="sm-arrow" className="space-y-3 text-black hidden">
                  <li className="space-x-2">
                    <i class="fa-solid fa-angle-right"></i>
                    <Link onClick={() => {
                      downarrow()
                      dot()
                    }} to="/Air">Air conditioner</Link>
                  </li>
                  <li className="space-x-2">
                    <i class="fa-solid fa-angle-right"></i>
                    <Link onClick={() => {
                      downarrow()
                      dot()
                    }} to="/Kitchen">Kitchen appliances</Link>
                  </li>
                  <li className="space-x-2">
                    <i class="fa-solid fa-angle-right"></i>
                    <Link onClick={() => {
                      downarrow()
                      dot()
                    }} to="/Laptop">PCs & laptop</Link>
                  </li>
                  <li className="space-x-2">
                    <i class="fa-solid fa-angle-right"></i>
                    <Link onClick={() => {
                      downarrow()
                      dot()
                    }} to="/Gadget">Gadgets</Link>
                  </li>
                  <li className="space-x-2">
                    <i class="fa-solid fa-angle-right"></i>
                    <Link onClick={() => {
                      downarrow()
                      dot()
                    }} to="/Smart">Smart home</Link>
                  </li>
                </ul>
              </li>
              <li><Link onClick={() => dot()} to="/Home">Home appliances</Link></li>
              <li><Link onClick={() => dot()} to="/Audio">Audio & video</Link></li>
              <li><Link onClick={() => dot()} to="/Refrigerator">Refrigerator</Link></li>
              <li><Link onClick={() => dot()} to="/Arrival">New arrivals</Link></li>
              <li><Link onClick={() => dot()} to="/Today">Today's deal</Link></li>
              <li><a href="">Gift cards</a></li>
            </ul>
          </div>
        </div>

      </div>
      <Outlet />
    </>
  );
}
