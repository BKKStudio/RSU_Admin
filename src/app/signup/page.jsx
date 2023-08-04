"use client";

import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/navigation";
import React from "react";


export default function SingupForm() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    firstname: "",
    lastname: "",
    tell: "",
    username: "",
    password: "",
  });

 
const handleSubmit = async (e) => {
  e.preventDefault();
  if(!user){
    alert("กรุณากรอกข้อมูลให้ครบ")
    return
  }
  try {
   const res =  await fetch("http://localhost:3000/api/users/signup",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(user)
    })
    if(res.ok){
      router.push("/")
    }else{
      throw new Error("Failed to Add Admins")
    }
  } catch (error) {
    console.log(error);
  }
}

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };
 


  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.username.length > 0 &&
      user.password.length > 0 &&
      user.firstname.length > 0 &&
      user.lastname.length > 0 &&
      user.tell.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);


  return (
    <Layout>
      <p className="text-center bg-pink-600 p-3 text-white text-2xl">
        Registers Admins
      </p>
      <div className="bg-red-300 mt-2 rounded p-3 ">
        <form className="" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2">
            <div className="m-2">
              <label className="pb-2">email</label>
              <input
                id="email"
                type={"text"}
                className="rounded w-full h-7"
                value={user.email}
                onChange={(ev) => setUser({...user, email: ev.target.value })}
              ></input>
            </div>
            <div className="m-2">
              <label className="pb-2">Firstname</label>
              <input
                id="firstname"
                type={"text"}
                className="rounded  w-full h-7"
                value={user.firstname}
                onChange={(ev) =>
                  setUser({...user, firstname: ev.target.value })
                }
              ></input>
            </div>
            <div className="m-2">
              <label className="pb-2">Lastname</label>
              <input
                id="lastname"
                type={"text"}
                className="rounded  w-full h-7"
                value={user.lastname}
                onChange={(ev) =>
                  setUser({...user, lastname: ev.target.value })
                }
              ></input>
            </div>
            <div className="m-2">
              <label className="pb-2">Tell</label>
              <input
                type="text"
                id="tell"
                className="rounded  w-full h-7"
                value={user.tell}
                onChange={(ev) => setUser({...user, tell: ev.target.value })}
              ></input>
            </div>
            <div className="m-2">
              <label className="pb-2">Username</label>
              <input
                id="username"
                type={"text"}
                className="rounded  w-full h-7"
                value={user.username}
                onChange={(ev) =>
                  setUser({...user, username: ev.target.value })
                }
              ></input>
            </div>
            <div className="m-2">
              <label className="pb-2">Password</label>
              <input
                id="password"
                type={"text"}
                className="rounded  w-full h-7"
                value={user.password}
                onChange={(ev) =>
                  setUser({...user, password: ev.target.value })
                }
              ></input>
            </div>
          </div>
          <div className="flex flex-column items-center gap-2 mt-2">
            <button
              className="bg-green-600 text-white h-8 rounded w-3/4"
              type="submit"
            >
              {buttonDisabled ? "กรุณากรอกข้อมูลให้ครบ" : "Regieters"}
            </button>
            <button className="bg-red-600 text-white h-8 rounded w-3/4" onClick={handleClick}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
