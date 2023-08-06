import Aside from "./Aside";


export default function Layout({ children }) {
  return (
    <div className="bg-gray-100 ">
        <Aside/>
        <div className="bg-gray-100 mt-5">{children}</div>
    </div>
  );
}
