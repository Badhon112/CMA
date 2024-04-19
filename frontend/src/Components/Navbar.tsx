import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-500 p-6 text-white flex text-3xl justify-between">
      {/* <div className="space-x-5 font-bold"> */}
        <Link to={"/AddContacts"}>Add Contacts</Link>
        <Link to={"/AllContacts"}>All Contacts</Link>
      {/* </div> */}
    </div>
  );
};

export default Navbar;
