import avatar from "../assets/avatar.jpg";
import axios from "axios";
import { Button, Modal } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getdata } from "./AllContacts";
interface formData {
  name: string;
  email: string;
  phone: string;
  address: string;
  photourl: string;
}

interface Props {
  id: number;
}

const Model: React.FC<Props> = ({ id }) => {
  const navigate = useNavigate();
  //   const [alldata, setAlldata] = useState<getdata[] | null>();
  const [getsingledata, setGetsingledata] = useState({
    name: String,
    email: String,
    phone: String,
    address: String,
    photourl: String,
  });
  const [formdata, setFormdata] = useState<formData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    photourl: "",
  });
  useEffect(() => {
    axios
      .get(`http://localhost:7000/api/v1/getSingleUser/${id}`)
      .then((response) => {
        setGetsingledata(response.data.singleUser);
        // console.log(response.data.singleUser);
      })
      .catch((error) => {
        toast.error("Error in Fetching Data");
      });
        // console.log(getsingledata);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const res = await axios.put(
        `http://localhost:7000/api/v1/update/${id}`,
        formdata
      );
      console.log(res);
      if (res.status === 200) {
        toast.success("User Updated Succefull");
        navigate("/AllContacts");
      }
      if (res.status === 400) {
        toast.error("User Update Failed");
      }
    } catch (error) {
      toast.error("User Update Failed");
    }
  };
  const handleFileUpload = async (e: any) => {
    const file = e.target.files[0];
  };
  const [openModal, setOpenModal] = useState(false);
  const UpdateOpenmenu = () => {
    setOpenModal(true);
  };
  return (
    <>
      <Button color="blue" onClick={UpdateOpenmenu}>
        Update
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Update user</Modal.Header>
        <Modal.Body>
          <div className="">
            <div className="">
              <form
                className="max-w-sm mx-auto text-2xl border p-6 rounded-lg"
                onSubmit={handleSubmit}
              >
                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="User Name"
                    required
                    value={formdata.name}
                    onChange={handleChange}
                    // defaultValue={alldata?.name}
                  />
                </div>
                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email.com"
                    required
                    name="email"
                    value={formdata.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="PhoneNumber"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Phone Number
                  </label>
                  <input
                    type="text"
                    id="number"
                    placeholder="0123456789"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    name="phone"
                    value={formdata.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="PhoneNumber"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    placeholder="Abc, State"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    name="address"
                    value={formdata.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-5">
                  <label className=" flex flex-col mb-2 items-center  text-sm font-medium text-gray-900 dark:text-white ">
                    <img
                      className="w-24 h-24 items-center rounded-full"
                      src={avatar}
                      alt="This is photourl images"
                    />
                  </label>
                  <input
                    type="file"
                    id="myFile"
                    // name="myFile"
                    accept=".jpeg, .png, .jpg"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="User Name"
                    required
                    name="photourl"
                    value={formdata.photourl}
                    onChange={handleChange}
                  />
                </div>
                {/* <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button> */}
                <Modal.Footer>
                  <Button
                    color="blue"
                    type="submit"
                    onClick={() => setOpenModal(false)}
                  >
                    Update{" "}
                  </Button>
                  <Button color="gray" onClick={() => setOpenModal(false)}>
                    Cancel
                  </Button>
                </Modal.Footer>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Model;
