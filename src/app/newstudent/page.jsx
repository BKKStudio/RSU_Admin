"use client";
import Layout from "../components/Layout";
import Link from "next/link";
import { BsPencilSquare } from "react-icons/bs";
import { useState } from "react";
import Swal from "sweetalert2";

export default function NewStudents() {
  const [data, setData] = useState([]);
  const [level, setLevel] = useState("");
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);


  const GetBachelors = async () => {
    setShow(false);
    try {
      const res = await fetch(`/api/bachelors`, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed Fetch Data");
      } else {
        const studentData = await res.json();
        setData(studentData);
        setLevel("editstudent");
        setText("ระดับปริญญาตรี");
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
            setShow(true);
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
    setShow(false);
    try {
      const res = await fetch("/api/masters", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed Fetch Data");
      } else {
        const studentData = await res.json();
        setData(studentData);
        setLevel("editmasters");
        setText("ระดับปริญญาโท");
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
            setShow(true);
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
    setShow(false);
    try {
      const res = await fetch("/api/doctors", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed Fetch Data");
      } else {
        const studentData = await res.json();
        setData(studentData);
        setLevel("editdoctors");
        setText("ระดับปริญญาเอก");
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
            setShow(true);
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
    setShow(false);
    try {
      const res = await fetch("/api/internationals", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed Fetch Data");
      } else {
        const studentData = await res.json();
        setData(studentData);
        setLevel("editinters");
        setText("หลักสูตร International");
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
            setShow(true);
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
      <div className="max-w- mx-2">
      <div
        id="carouselExampleInterval"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner rounded-lg">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              className="d-block w-100  bg-[url('https://www2.rsu.ac.th/Upload/images/wall/RSU-contact.jpg')] bg-cover bg-center h-72 rounded-lg"
              alt=""
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div
              className="d-block w-100  bg-[url('https://f.ptcdn.info/924/039/000/o27s3jddvBq8n4kyhZn-o.jpg')] bg-cover bg-center h-72 rounded-lg"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <div
              className="d-block w-100  bg-[url('https://f.ptcdn.info/924/039/000/o27rtaev1kNerEQF5Me-o.jpg')] bg-cover bg-center h-72 h-72 rounded-lg"
              alt=""
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <p className="text-center bg-pink-600 p-3 text-white text-2xl mt-2">
        นักศึกษาใหม่ {text}
      </p>
      <div className=" mt-2 flex  gap-2 justify-center max-sm:grid max-sm:grid-cols-2">
        <button
          className="bg-red-600 p-2 rounded text-white"
          onClick={GetBachelors}
        >
          ปริญญาตรี
        </button>
        <button
          className="bg-green-600 p-2 rounded text-white"
          onClick={GetMasters}
        >
          ปริญญาโท
        </button>
        <button
          className="bg-yellow-500 p-2 rounded text-white"
          onClick={GetDoctors}
        >
          ปริญญาเอก
        </button>
        <button
          className="bg-purple-600 p-2 rounded text-white"
          onClick={GetInternationals}
        >
          International
        </button>
      </div>
      <div className="max-xl:overflow-auto  text-center bg-white shadow-lg rounded-lg mt-2">
        <table className="w-full max-lg:w-max border ">
          <thead >
            <tr >
              <th className="border p-2" >คณะ/Faculty</th>
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
          <tbody className="">
            {show === true &&
              data.length > 0 &&
              data.map((student) => (
                <tr key={student._id} className="border">
                  <td className="border text-sm p-2">{student.Faculty}</td>
                  <td className="border text-sm p-2">{student.Major}</td>
                  <td className="border text-sm p-2">{student.idcard}</td>
                  <td className="border text-sm p-2 ">{student.birthday}</td>
                  <td className="border text-sm p-2">{student.firstname}</td>
                  <td className="border text-sm p-2">{student.lastname}</td>
                  <td className="border text-sm p-2">{student.email}</td>
                  <td className="border text-sm p-2">{student.tell}</td>
                  <td className="border text-sm p-2">
                    <Link
                      href={`/${level}/${student._id}`}
                      className={"flex justify-center"}
                    >
                      <BsPencilSquare color={"red"} size={20} />
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      </div>
    </Layout>
  );
}
