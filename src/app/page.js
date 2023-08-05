"use client"
import Layout from "./components/Layout";
import { BsQuestionCircle } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Rechart from './components/Rechart';


const getQuantityData = async (endpoint) => {
  try {
    const res = await fetch(`/api/quantity/${endpoint}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch quantity data for ${endpoint}`);
    }
    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
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


export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);


  const fetchData = async () => {
    try {
      const [bachelors, masters, doctors, inters, user] = await Promise.all([
        getQuantityData("bachelors"),
        getQuantityData("masters"),
        getQuantityData("doctors"),
        getQuantityData("inters"),
        getUser()
      ]);

      const alllevel =
        bachelors.bachelorsvalue +
        masters.mastersvalue +
        doctors.doctorsvalue +
        inters.intervalue;

      setData({ bachelors, masters, doctors, inters, user, alllevel });
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const {
    bachelors: { bachelorsvalue },
    masters: { mastersvalue },
    doctors: { doctorsvalue },
    inters: { intervalue },
    user,
    alllevel,
  } = data;

  return (
    <Layout>
      <div className="flex justify-center">
        <div className="">
          <p className="mt-5 flex justify-end items-center gap-1 text-blue-500">
            <BsQuestionCircle size={20} />
            Help & Report
          </p>
          <p className="text-3xl font-bold pb-3">Hi,{user.firstname} {user.lastname}!</p>
          <div className="rounded-lg ">
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
          </div>
          <div className="w-full h-0.5 bg-gray-300 mt-4 rounded-lg"></div>
          <div className="mt-2">
            <p className="font-bold text-4xl">Dashboard</p>
            <div className="grid 2xl:grid-cols-5 md:grid-cols-2 ">
              <div className="shadow-lg p-3 rounded-lg m-2">
                <p className="flex items-center gap-2 font-bold">
                  จำนวนนักศึกษาใหม่ทั้งหมด
                  <BsQuestionCircle size={20} color={"red"}/>
                </p>
                <p className="flex items-center gap-1 text-4xl font-bold text-lime-500">
                    {alllevel}<BsPeopleFill size={27} />
                </p>
                <p className="flex items-center gap-1 ">ประจำปีการศึกษา 2566</p>
                <p className="flex items-center gap-1 text-xs text-gray-500">
                  (ปริญญาตรี,ปริญญาโท,ปริญญาเอก,International)
                </p>
              </div>
              <div className="shadow-lg p-3 rounded-lg m-2">
                <p className="flex items-center gap-2 font-bold">
                  นักศึกษาใหม่ (ปริญญาตรี)
                </p>
                <p className="flex items-center gap-1 text-4xl font-bold text-pink-500">
                {bachelorsvalue} <BsPeopleFill size={27} />
                </p>
                <p className="flex items-center gap-1 ">ประจำปีการศึกษา 2566</p>
                <p className="flex items-center gap-1 text-xs text-gray-500">
                  (คณะ/สาขา) <Link href={""}>ดูเพิ่มเติม</Link>
                </p>
              </div>
              <div className="shadow-lg p-3 rounded-lg m-2">
                <p className="flex items-center gap-2 font-bold">
                  นักศึกษาใหม่ (ปริญญาโท)
                </p>
                <p className="flex items-center gap-1 text-4xl font-bold text-purple-500">
                {mastersvalue} <BsPeopleFill size={27} />
                </p>
                <p className="flex items-center gap-1 ">ประจำปีการศึกษา 2566</p>
                <p className="flex items-center gap-1 text-xs text-gray-500">
                  (คณะ/สาขา) <Link href={""}>ดูเพิ่มเติม</Link>
                </p>
              </div>
              <div className="shadow-lg p-3 rounded-lg m-2">
                <p className="flex items-center gap-2 font-bold">
                  นักศึกษาใหม่ (ปริญญาเอก)
                </p>
                <p className="flex items-center gap-1 text-4xl font-bold text-rose-500">
                {doctorsvalue}  <BsPeopleFill size={27} />
                </p>
                <p className="flex items-center gap-1 ">ประจำปีการศึกษา 2566</p>
                <p className="flex items-center gap-1 text-xs text-gray-500">
                  (คณะ/สาขา) <Link href={""}>ดูเพิ่มเติม</Link>
                </p>
              </div>
              <div className="shadow-lg p-3 rounded-lg m-2">
                <p className="flex items-center gap-2 font-bold">
                  นักศึกษาใหม่ (International)
                </p>
                <p className="flex items-center gap-1 text-4xl font-bold text-sky-500">
                 {intervalue} <BsPeopleFill size={27} />
                </p>
                <p className="flex items-center gap-1 ">ประจำปีการศึกษา 2566</p>
                <p className="flex items-center gap-1 text-xs text-gray-500  ">
                  (คณะ/สาขา) <Link href={""}>ดูเพิ่มเติม</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 flex justify-center z-0 p-4">
          <Rechart alllevel={alllevel} bachelorsvalue={bachelorsvalue} mastersvalue={mastersvalue}  doctorsvalue={doctorsvalue} intervalue={intervalue} />
          </div>
        </div>
      </div>
    </Layout>
  );
}