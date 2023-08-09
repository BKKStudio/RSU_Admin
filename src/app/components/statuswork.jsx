import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function StatusBtn() {
  const router = useRouter();
  const [userstatus, setUser] = useState(null);
  const [st, setSt] = useState(true);

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
      throw error;
    }
  };

  const updateUserStatus = async (newStatus) => {
    try {
      const res = await fetch(`/api/users/user/${userstatus._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ statususe: newStatus }),
      });
      if (!res.ok) {
        throw new Error("Failed Update");
      }
      // Refresh the page using window.location.reload()
      window.location.reload();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    getUser().then((data) => {
      setUser(data);
      setSt(data.statususe); // Set initial status based on user data
    });
  }, []);

  const handleToggle = () => {
    const newStatus = !st;
    setSt(newStatus);
    updateUserStatus(newStatus);
  };

  return (
    <div>
      <button
        key={userstatus._id} 
        onClick={handleToggle}
        className={`p-2 ml-2 rounded-lg text-white ${st ? "bg-green-500" : "bg-red-500"}`}
      >
        {st ? "Active Now" : "Offline"}
      </button>
    </div>
  );
}