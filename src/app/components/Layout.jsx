import Aside from "./Aside";


export default function Layout({ children }) {
  return (
    <div className="h-screen relative">
      <div className="flex ">
        <div className="">
        <Aside />
        </div>
        <div className="flex-grow bg-gray-100">{children}</div>
      </div>
    </div>
  );
}
