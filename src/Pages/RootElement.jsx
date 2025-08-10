import { Outlet } from "react-router-dom";
import Navbar from "../Components/UI/Navigation/Navigation";
import Layout from "../Components/UI/Layout/Layout";
import ContactModal from "../Components/ContactModal";
const RootElement = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Outlet />
      </Layout>
      <Layout.Footer />
      <ContactModal />
    </>
  );
};

export default RootElement;
