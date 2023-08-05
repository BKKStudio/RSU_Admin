import Aside from "./Aside";


export default function Layout({ children }) {
  return (
    <div className="min-h-screen ">
      <div className="flex ">
        <div className="">
        <Aside/>
        </div>
        <div className="flex-grow bg-gray-100">{children}</div>
      </div>
    </div>
  );
}
