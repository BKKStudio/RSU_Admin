"use client";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { BsBoxArrowInRight, BsList } from "react-icons/bs";
import { BsHouseDoor } from "react-icons/bs";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsGear } from "react-icons/bs";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import StatusBtn from "./statuswork";



const getUser = async () => {
  try {
    const res = await fetch(`/api/users/user`, {
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

  if (user === null) {
    return <div>Loading...</div>;
  }
  return (
    <div className={` text-black bg-gray-100 p-1 `}>
      <nav className={`bg-white text-black mt-4  p-3 rounded-lg shadow-full`}>
        <div className={`flex  justify-between  bg-white z-1`}>
          <div>
            <div className={`flex `}>
              <div className="bg-[url('https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/abafe1ec-2208-4f59-a041-cee0e74f92b8/973127756/loma-vpn-screenshot.png')] bg-cover bg-center w-11 h-11 rounded-full"></div>
              <div className={`flex flex-col justify-end items-end w-36`}>
                <span className="text-base font-bold text-3xl">
                  {user.firstname} {user.lastname}
                </span>
                <span className="text-gray-500 text-sm">{user.username}</span>
              </div>
              <div className="bg-gray-300 w-0.5 h-11 rounded ml-2"></div>
              <StatusBtn/>
            </div>
          </div>
          <button
            className=" xl:hidden flex items-center"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          >
            <BsList size={30}/>
          </button>

          <div
            className="offcanvas offcanvas-end"
            data-bs-scroll="true"
            data-bs-backdrop="false"
            tabindex="-1"
            id="offcanvasScrolling"
            aria-labelledby="offcanvasScrollingLabel"
          >
            <div className="offcanvas-header ">
              <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                <Image src="/logo/Rsu_logo.png" alt="" width={150} height={150}/>
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <p className="flex flex-col gap-3  ">
              <button onClick={onHome} className="flex gap-2 no-underline  justify-center p-2 hover:bg-gray-300 rounded-lg">
              <BsHouseDoor size={22} />
              <div className={`flex gap-2 no-underline`}>Home</div>
            </button>
            <div className="flex gap-2 no-underline  justify-center p-2 hover:bg-gray-300  rounded-lg">
              <BsFillChatSquareTextFill size={22} />
              <span className={`flex gap-2 no-underline`}>Post</span>
            </div>
              <Link
              href={"/newstudent"}
              className={`flex gap-2 no-underline  justify-center p-2 text-black hover:bg-gray-300  rounded-lg`}
            >
              <BsFillPersonPlusFill size={22} />
              <span className={`flex gap-2 no-underline`}>New Student</span>
            </Link>
            <Link
              href={"/signup"}
            >
              <BsFillPeopleFill size={22} />
              <div className={`gap-2 no-underline`}>Register Admin</div>
            </Link>
            <div className="flex gap-2 no-underline  justify-center p-2 text-black hover:bg-gray-300  rounded-lg">
              <BsGear size={22} />
              <span className={`flex gap-2 no-underline `}>Setting</span>
            </div>
            <button
                onClick={onLogout}
                className="flex gap-1 justify-center items-center ml-2 bg-red-400 text-white p-1 rounded-lg"
              >
                <BsBoxArrowInRight size={22} />
                <span className={`flex gap-2 no-underline`}>Logout</span>
              </button>
              </p>
            </div>
          </div>



          <div className="xl:flex gap-4 justify-center items-center max-xl:hidden">
            <button onClick={onHome} className="flex gap-2 no-underline">
              <BsHouseDoor size={22} />
              <div className={`flex gap-2 no-underline`}>Home</div>
            </button>
            <div className="flex gap-2">
              <BsFillChatSquareTextFill size={22} />
              <span className={`flex gap-2 no-underline`}>Post</span>
            </div>
            <Link
              href={"/newstudent"}
              className={`flex gap-2 no-underline  text-black`}
            >
              <BsFillPersonPlusFill size={22} />
              <span className={`flex gap-2 no-underline`}>New Student</span>
            </Link>
            <Link
              href={"/signup"}
              className={`flex gap-2 no-underline text-black `}
            >
              <BsFillPeopleFill size={22} />
              <div className={`gap-2 no-underline`}>Register Admin</div>
            </Link>
            <div className="flex gap-2">
              <BsGear size={22} />
              <span className={`flex gap-2 no-underline `}>Setting</span>
            </div>
            <button
                onClick={onLogout}
                className="flex gap-1 justify-center items-center ml-2 bg-red-400 text-white p-1 rounded-lg"
              >
                <BsBoxArrowInRight size={22} />
                <span className={`flex gap-2 no-underline`}>Logout</span>
              </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
``;
