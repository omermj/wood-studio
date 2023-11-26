import { Outlet } from "react-router-dom";
import { Header } from "../components";

const HomeLayout = () => {
  return (
    <>
      {/* <nav>
        <span className="text-4xl text-primary">Comfy</span>
      </nav> */}
      <Header />
      <section className="align-element py-20">
        <Outlet />
      </section>
    </>
  );
};
export default HomeLayout;
