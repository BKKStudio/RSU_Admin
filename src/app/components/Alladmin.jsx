
import React, { useState, useEffect } from "react";

const getAlluser = async () =>{
    try {
        const res = await fetch(`/api/users/alluser`, {
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
}

export default function Alladmin() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAlluser()
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, []);

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map((alluser,index) => (
        <div className="bg-gray-100 w-full" key={index}>
          <div className="flex justify-between p-3">
            <div className="flex gap-2 items-center">
              <div className="bg-[url('https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/abafe1ec-2208-4f59-a041-cee0e74f92b8/973127756/loma-vpn-screenshot.png')] bg-cover bg-center w-8 h-8 rounded-full"></div>
              <span>{alluser.firstname} {alluser.lastname}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`${alluser.statususe === false ? "bg-red-500" : "bg-green-500"} w-3 h-3 rounded-full`}></div>
              <div>{`${alluser.statususe === false ? "Offline" : "Active Now"}`}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}