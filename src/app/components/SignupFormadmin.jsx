"use client";

import { useState } from "react";
import Layout from "./Layout";
import { useRouter } from "next/navigation";

export default function SingupForm() {
  const router = useRouter();
 

  return (
    <Layout>
      <p className="text-center bg-pink-600 p-3 text-white text-2xl">
        Registers Admins
      </p>
      <div className="bg-red-300 mt-2 rounded p-3">
        <form className="" >
          <div className="grid grid-cols-2">
            <div className="m-2">
              <label className="pb-2">คณะ/Faculty</label>
              <input
                type={"text"}
                className="rounded w-full h-7"
              ></input>
            </div>
            <div className="m-2">
              <label className="pb-2">สาขา/Major</label>
              <input
                type={"text"}
                className="rounded  w-full h-7"
              ></input>
            </div>
            <div className="m-2">
              <label className="pb-2">เลขบัตรประขาชน/Idcard</label>
              <input
                type={"text"}
                className="rounded  w-full h-7"
              ></input>
            </div>
            <div className="m-2">
              <label className="pb-2">วันเกิด/Birthday</label>
              <input
                type="date"
                id="birthday"
                name="birthday"
                className="rounded  w-full h-7"
              ></input>
            </div>
            <div className="m-2">
              <label className="pb-2">ชื่อ/Firstname</label>
              <input
                type={"text"}
                className="rounded  w-full h-7"
              ></input>
            </div>
            <div className="m-2">
              <label className="pb-2">นามสกุล/Lastname</label>
              <input
                type={"text"}
                className="rounded  w-full h-7"
              ></input>
            </div>
            <div className="m-2">
              <label className="pb-2">Email</label>
              <input
                type={"email"}
                className="rounded  w-full h-7"
              ></input>
            </div>
            <div className="m-2">
              <label className="pb-2">Tell</label>
              <input
                type={"tell"}
                className="rounded  w-full h-7"
              ></input>
            </div>
          </div>
          <div className="flex flex-column items-center gap-2 mt-2">
            <button
              className="bg-green-600 text-white h-8 rounded w-3/4"
              type="submit"
            >
              Update
            </button>
            <button
              className="bg-gray-400 text-white h-8 rounded w-3/4"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
