"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import Footer from "../components/footer";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });

  const Onlogin = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("Login success", response.data);

      if(!response.ok){
        Swal.fire('กรุณากรอก Username หรือ Password')
      }else{
        let timerInterval;
        Swal.fire({
          title: "กำลังเข้าสู่ระบบ",
          timer: 1000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
          },
          willClose: () => {
            clearInterval(timerInterval);
            router.push("/")
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
      }
    } catch (error) {
      console.log("Login failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <div className="">
      <nav className="p-3 flex  md:justify-start md:items-center max-sm:justify-center ">
        <div><Image
          src={"/logo/Rsu_logo.png"}
          width={170}
          height={170}
          className=""
        ></Image></div>
      </nav>
      <hr />
      <div className=" p-6">
        <div className="grid md:grid-cols-2 rounded-lg shadow-2xl m-3 rounded-lg sm:grid-cols-1">
          <div className="flex flex-column justify-center items-center p-4 bg-gray-200 rounded-lg">
            <div className="flex flex-column justify-center items-center">
              <Image src={"/logo/Rangsit.png"} width={170} height={170}></Image>
              <h1 className="text-3xl">Admin Website</h1>
            </div>
            <label htmlFor="username">Username :</label>
            <input
              className="p-2 border border-gray-400 rounded-full mb-4 focus:outline-none focus:border-gray-600 w-2/3"
              id="username"
              type={"text"}
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="username"
              required
            />
            <label htmlFor="password">Password :</label>
            <input
              className="p-2 border border-gray-400 rounded-full focus:outline-none focus:border-gray-600 w-2/3"
              id="password"
              type={"password"}
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="password"
            />
            <Link href="/signup" className="text-red-600 text-xs mt-2 ">
              Forget password??
            </Link>
            <button
              className="mt-3 p-3 border border-green-400 rounded-full mb-4 focus:outline-none w-65 focus:border-gray-600 bg-green-500 text-white w-2/3"
              onClick={Onlogin}
            >
              Login
            </button>
          </div>
          <div className="bg-gray-250 w-full bg-[url('https://www2.rsu.ac.th/Upload/images/wall/RSU-contact.jpg')] bg-cover bg-center rounded-r-lg"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
