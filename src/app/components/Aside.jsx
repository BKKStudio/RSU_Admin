"use client";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { BsBoxArrowInRight} from "react-icons/bs";
import { BsHouseDoor } from "react-icons/bs";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { BsGear } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import Link from "next/link";
import React, { useState, useEffect } from "react";


const getUser = async () => {
  try {
    const res = await fetch("/api/users/user", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch user data");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to handle it in the component
  }
};




export default function Aside() {
  const router = useRouter();
  const [open,setOpen] = useState(false)
  const [darkmode,setDarkmodeMode] = useState(false)
  const onHome = () => {
    router.refresh();
    router.push("/");
  };

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUser()
      .then((data) => setUser(data))
      .catch((error) => setError(error));
  }, []);


  const onLogout = async () => {
    try {
      const res = await fetch("/api/users/logout", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed Fetch Data");
      } else {
        let timerInterval;
        Swal.fire({
          title: "กำลังออกจากระบบ",
          timer: 1000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
          },
          willClose: () => {
            clearInterval(timerInterval);
            router.push("/login");
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  
if(user === null){
  return(
    <div>Loading...</div>
    
  )
}
  return (
    <div className={`${darkmode ? "bg-white text-black duration-200 " : "bg-gray-900 text-white duration-200"}`}>
      <aside className={` z-1 h-screen ${darkmode ? "bg-white text-black duration-200 " : "bg-gray-900 text-white duration-200"}`} >
        <div className={`p-4 flex flex-col gap-3 justify-between ${open ? "w-64" : "w-20"} duration-200 relative`}>
          <div cla>
            <div className={`${open ? "flex justify-between items-center w-full": ""}`}>
            <div className="bg-[url('/logo/test.jpg')] bg-cover bg-center w-11 h-11 rounded-full"></div>
              <div className={`${open ? "flex flex-col justify-end items-end": "hidden"}`}>
                <span className="text-base font-bold text-3xl">{user.firstname} {user.lastname}</span>
                <span className="text-gray-500 text-sm">{user.username}</span>
                <span className="text-gray-500 text-xs">{user.email}</span>
              </div>
            </div>
            <div className="bg-gray-300 w-full h-0.5 rounded mt-3"></div>
          </div>
          <div className="flex flex-column gap-4">
            <button
              onClick={onHome}
              className="flex gap-2 no-underline"
            >
              <BsHouseDoor size={22} />
              <div className={`${open ? "flex gap-2 no-underline": "hidden"}`}>Home</div>
            </button>
            <div className="flex gap-2">
              <BsFillChatSquareTextFill size={22} />
              <span className={`${open ? "flex gap-2 no-underline ": "hidden"}`}>Post</span>
            </div>
            <Link
              href={"/newstudent"}
              className={`flex gap-2 no-underline ${darkmode ? "text-black duration-200" : "text-white duration-200"}`}
            >
              <BsFillPersonPlusFill size={22} />
              <span className={`${open ? "flex gap-2 no-underline ": "hidden"}`}>New Student</span>
            </Link>
            <Link
              href={"/signup"}
              className={`flex gap-2 no-underline ${darkmode ? "text-black duration-200" : "text-white duration-200"}`}
            >
              <BsFillPeopleFill size={22} />
              <div className={`${open ? " gap-2 no-underline ": "hidden"}`}>Register Admin</div>
            </Link>
          </div>
          <div
            className="flex flex-column gap-4"
          >
            <div className="flex gap-2">
              <BsGear size={22} />
              <span className={`${open ? "flex gap-2 no-underline ": "hidden"}`}>Setting</span>
            </div>
            <button onClick={onLogout} className="flex gap-2">
              <BsBoxArrowInRight size={22} />
              <span className={`${open ? "flex gap-2 no-underline ": "hidden"}`}>Logout</span>
            </button>
            <div className={`${open ? "flex p-2 gap-1 items-center bg-gray-200 rounded-lg" : ""}`}>
              <button onClick={() => setDarkmodeMode(!darkmode)} className={`${open ? "bg-gray-400 w-20 rounded-full p-1.5 " : ""}`}>
                <div className={`${open ? `${darkmode ? "p-1 bg-white rounded-full w-7 flex justify-center items-center duration-300" : " p-1 bg-white rounded-full w-7 flex justify-center items-center translate-x-10 duration-300"}` : `bg-gray-300 p-2 rounded-full duration-300`}`} ><BsSunFill size={15} className={`${darkmode ? "" : "hidden"}`}/><BsMoon size={15} className={`${darkmode ? "hidden" : `text-black duration-300 `}`}/></div>
              </button>
           <span className={`${open ? "flex gap-2 no-underline text-black": "hidden"}`}>Dark Mode</span>
            </div>
          </div>
          <div className=" flex justify-center rounded-full">
            <button onClick={()=> setOpen(!open)} className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center ">
            <BsChevronDoubleLeft size={20} className={`${!open && "rotate-180"}`}/>
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
