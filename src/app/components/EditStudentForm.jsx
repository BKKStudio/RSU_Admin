"use client";

import { useState } from "react";
import Layout from "./Layout";
import { useRouter } from "next/navigation";
import RemoveBtn from "./RemoveBtn";
import Swal from "sweetalert2";

export default function EditStudentForm({
  id,
  Faculty,
  Major,
  idcard,
  birthday,
  firstname,
  lastname,
  email,
  tell,
  level,
}) {
  const router = useRouter();
  const [newFaculty, setnewFaculty] = useState(Faculty);
  const [newMajor, setnewMajor] = useState(Major);
  const [newIdcard, setnewIdcard] = useState(idcard);
  const [newBirthday, setnewBirthday] = useState(birthday);
  const [newFirstname, setnewFirstname] = useState(firstname);
  const [newLastname, setnewLastname] = useState(lastname);
  const [newEmail, setnewEmail] = useState(email);
  const [newTell, setnewTell] = useState(tell);

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/newstudent");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/${level}/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newFaculty,
          newMajor,
          newIdcard,
          newBirthday,
          newFirstname,
          newLastname,
          newEmail,
          newTell,
        }),
      });
      if (!res.ok) {
        throw new Error("Failed Update");
      }
      Swal.fire({
        title: "คุณต้องการบันทึกการเปลี่ยนแปลงหรือไม่?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("แก้ไขข้อมูลสำเร็จ", "", "success");
          router.refresh();
          router.push("/newstudent");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <p className="text-center bg-pink-600 p-3 text-white text-2xl">
        แก้ไขข้อมูลนักศึกษาใหม่
      </p>
      <div className="bg-red-300 mt-2 rounded p-3">
        <form className="" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2">
            <div className="m-2">
              <label className="pb-2">คณะ/Faculty</label>
              <input
                type={"text"}
                className="rounded w-full h-7"
                onChange={(e) => setnewFaculty(e.target.value)}
                value={newFaculty}
              ></input>
            </div>
            <div className="m-2">
              <label className="pb-2">สาขา/Major</label>
              <input
                type={"text"}
                className="rounded  w-full h-7"
                onChange={(e) => setnewMajor(e.target.value)}
                value={newMajor}
              ></input>
            </div>
            <div className="m-2">
              <label className="pb-2">เลขบัตรประขาชน/Idcard</label>
              <input
                type={"text"}
                className="rounded  w-full h-7"
                onChange={(e) => setnewIdcard(e.target.value)}
                value={newIdcard}
              ></input>
            </div>
            <div className="m-2">
              <label className="pb-2">วันเกิด/Birthday</label>
              <input
                type="date"
                id="birthday"
                name="birthday"
                className="rounded  w-full h-7"
                onChange={(e) => setnewBirthday(e.target.value)}
                value={newBirthday}
              ></input>
            </div>
            <div className="m-2">
              <label className="pb-2">ชื่อ/Firstname</label>
              <input
                type={"text"}
                className="rounded  w-full h-7"
                onChange={(e) => setnewFirstname(e.target.value)}
                value={newFirstname}
              ></input>
            </div>
            <div className="m-2">
              <label className="pb-2">นามสกุล/Lastname</label>
              <input
                type={"text"}
                className="rounded  w-full h-7"
                onChange={(e) => setnewLastname(e.target.value)}
                value={newLastname}
              ></input>
            </div>
            <div className="m-2">
              <label className="pb-2">Email</label>
              <input
                type={"email"}
                className="rounded  w-full h-7"
                onChange={(e) => setnewEmail(e.target.value)}
                value={newEmail}
              ></input>
            </div>
            <div className="m-2">
              <label className="pb-2">Tell</label>
              <input
                type={"tell"}
                className="rounded  w-full h-7"
                onChange={(e) => setnewTell(e.target.value)}
                value={newTell}
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
          </div>
        </form>
        <div className="flex flex-column gap-2 mt-2 justify-center items-center">
        <RemoveBtn id={id} level={level} />
        <button
          className="bg-gray-400 text-white h-8 rounded w-3/4"
          onClick={handleClick}
        >
          Cancel
        </button>
        </div>
      </div>
    </Layout>
  );
}
