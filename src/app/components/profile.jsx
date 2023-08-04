
export default async function Profile() {
    return(
        <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <span className="text-base font-bold">SS</span>
          <span className="text-gray-500 text-xs">Username</span>
          <span className="text-gray-500 text-xs">Seksak@gmail.com</span>
        </div>
        <div className="bg-[url('/logo/test.jpg')] bg-cover bg-center w-9 h-9 rounded-full"></div>
      </div>
    )
}