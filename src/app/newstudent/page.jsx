'use client'
import Layout from "../components/Layout";
import Link from "next/link";
import { BsPencilSquare } from "react-icons/bs";
import { useState } from "react";
import Swal from "sweetalert2";

export default function NewStudents() {
  const [data, setData] = useState([]);
  const [level,setLevel] = useState("")
  const [text,setText] = useState("")
  const [show,setShow] = useState(false)

  const GetBachelors = async () => {
    setShow(false)
    try {
      const res = await fetch("http://localhost:3000/api/bachelors", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed Fetch Data");
      }else{
        const studentData = await res.json();
        setData(studentData);
        setLevel("editstudent")
        setText("ระดับปริญญาตรี")
        let timerInterval;
        Swal.fire({
          title: "กำลังโหลดข้อมูล",
          timer: 1000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
          },
          willClose: () => {
            clearInterval(timerInterval);
            setShow(true)
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

  const GetMasters = async () => {
    setShow(false)
    try {
      const res = await fetch("http://localhost:3000/api/masters", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed Fetch Data");
      }else{
        const studentData = await res.json();
        setData(studentData);
        setLevel("editmasters")
        setText("ระดับปริญญาโท")
        let timerInterval;
        Swal.fire({
          title: "กำลังโหลดข้อมูล",
          timer: 1000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
          },
          willClose: () => {
            clearInterval(timerInterval);
            setShow(true)
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

  const GetDoctors = async () => {
    setShow(false)
    try {
      const res = await fetch("http://localhost:3000/api/doctors", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed Fetch Data");
      }else{
        const studentData = await res.json();
        setData(studentData);
        setLevel("editdoctors")
        setText("ระดับปริญญาเอก")
        let timerInterval;
        Swal.fire({
          title: "กำลังโหลดข้อมูล",
          timer: 1000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
          },
          willClose: () => {
            clearInterval(timerInterval);
            setShow(true)
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

  const GetInternationals = async () => {
    setShow(false)
    try {
      const res = await fetch("http://localhost:3000/api/internationals", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed Fetch Data");
      }else{
        const studentData = await res.json();
        setData(studentData);
        setLevel("editinters")
        setText("หลักสูตร International")
        let timerInterval;
        Swal.fire({
          title: "กำลังโหลดข้อมูล",
          timer: 1000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
          },
          willClose: () => {
            clearInterval(timerInterval);
            setShow(true)
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


  return (
    <Layout>
      <p className="text-center bg-pink-600 p-3 text-white text-2xl">
        นักศึกษาใหม่ {text}
      </p>
      <div className="flex mt-2 gap-2 justify-center">
        <button className="bg-red-600 p-2 rounded text-white" onClick={GetBachelors}>
          ปริญญาตรี
        </button>
        <button className="bg-green-600 p-2 rounded text-white"  onClick={GetMasters}>
          ปริญญาโท
        </button>
        <button className="bg-yellow-500 p-2 rounded text-white" onClick={GetDoctors}>
          ปริญญาเอก
        </button>
        <button className="bg-purple-600 p-2 rounded text-white" onClick={GetInternationals}>
          International
        </button>
      </div>
      <div className="w-full mt-2 text-center">
        <div>
        </div>
        <table className="w-full border">
          <thead>
            <tr>
              <th className="border p-2">คณะ/Faculty</th>
              <th className="border p-2">สาขา/Major</th>
              <th className="border p-2">เลขบัตรประขาชน</th>
              <th className="border p-2">Birthday</th>
              <th className="border p-2">Firstname</th>
              <th className="border p-2">Lastname</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Tell</th>
              <th className="border p-2">Edit</th>
            </tr>
          </thead>
          <tbody>
            {show === true && data.length > 0 &&
              data.map((student) => (
                <tr key={student._id} className="border">
                  <td className="border text-sm p-2">{student.Faculty}</td>
                  <td className="border text-sm p-2">{student.Major}</td>
                  <td className="border text-sm p-2">{student.idcard}</td>
                  <td className="border text-sm p-2">{student.birthday}</td>
                  <td className="border text-sm p-2">{student.firstname}</td>
                  <td className="border text-sm p-2">{student.lastname}</td>
                  <td className="border text-sm p-2">{student.email}</td>
                  <td className="border text-sm p-2">{student.tell}</td>
                  <td className="border text-sm p-2">
                    <Link href={`/${level}/${student._id}`} className={"flex justify-center"}>
                      <BsPencilSquare color={"red"} size={20} />
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}