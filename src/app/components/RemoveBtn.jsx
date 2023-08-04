"use client";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function RemoveBtn({id,level}) {
  const router = useRouter();
    const removedata = async () =>{
        Swal.fire({
          title: 'Are you sure?',
          text: "คุณต้องการลบรายชื่อหรือไม่??",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'ใช่, ลบข้อมูล!'
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`/api/${level}?id=${id}`,{
                method:"DELETE",
            })
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            router.refresh();
            router.push("/newstudent");
          }
        })
      }
      return(
        <button onClick={removedata}   className="bg-red-600 text-white h-8 rounded w-3/4">Delete</button>
      )
}