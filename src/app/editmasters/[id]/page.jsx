
import EditStudentForm from "@/app/components/EditStudentForm";


const getStudentById = async (id) =>{
    try {
        const res = await fetch(`/api/masters/${id}`,{
            cache:"no-store",
        })
        if(!res.ok){
            throw new Error("Failed To fetch ")
        }
        return res.json()
    } catch (error) {
        console.log(error);
    }
}

export default async function EditStudent({params}) {
    const {id} = params
    const  {newStudent}  = await getStudentById(id)
    const {Faculty,Major,idcard,birthday,firstname,lastname,email,tell,level} = newStudent
    return(
        <EditStudentForm id={id} Faculty={Faculty} Major={Major} idcard={idcard} birthday={birthday} firstname={firstname} lastname={lastname} email={email} tell={tell} level={level}/>
    )
}