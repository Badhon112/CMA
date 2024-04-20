import { useEffect, useState } from "react";
import images from "../assets/avatar.jpg";
import axios from "axios";
import { toast } from "react-toastify";
import Model from "./Model";
export type getdata = {
  _id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  photourl: string;
};
const AllContacts = () => {
  const [alldata, setAlldata] = useState<getdata[] | null>();

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/v1/getAllUser")
      .then((response) => {
        setAlldata(response.data.allusers);
      })
      .catch((error) => {
        toast.error("Error in Fetching Data");
      });
  }, []);

  const handleDelete = async (id: number) => {
    await axios
      .delete(`http://localhost:7000/api/v1/delete/${id}`)
      .then(() => {
        toast.success("User Deleted Succefull");
      })
      .catch((error) => {
        toast.error("Something Went Wrong");
      });
    window.location.reload();
  };
  const handleFileUpload = async (e: any) => {
    const file = e.target.files[0];
  };
  return (
    <div className="grid lg:grid-cols-3 m-3 ">
      {alldata
        ? alldata.map((item) => {
            return (
              <div
                key={item._id}
                className="max-w-sm rounded overflow-hidden items-center shadow-lg w-[350px]"
              >
                <img
                  className="w-28 h-28 flex items-center justify-center rounded-full m-3"
                  src={images}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 pt-4  items-center">
                  <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Name : {item.name}
                  </span>
                  <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Email : {item.email}
                  </span>
                  <span className="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Phone : {item.phone}
                  </span>
                  <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Address : {item.address}
                  </span>
                </div>
                <div className="flex justify-around m-3">
                  <Model id={item._id} />
                  <button
                    type="button"
                    onClick={() => handleDelete(item._id)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default AllContacts;
