import Layout from "@/app/components/Layout"

  
export default async function UserProfilePage({params}) {
    const{id} = params
    return(
        <Layout>
            <h1>
            Profilepage User : {id}
            </h1>
            <div>{data}</div>
        </Layout>
    )
}