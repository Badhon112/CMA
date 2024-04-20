// import { useState } from "react";
// import avatar from "../assets/avatar.jpg";
// import axios from "axios";
// import ConvertToBase64 from "../utils/ConvertToBase64";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// interface formData {
//   name: string;
//   email: string;
//   phone: string;
//   address: string;
//   photourl: "";
// }
// const AddContacts = () => {
//   const navigate = useNavigate();
//   const [formdata, setFormdata] = useState<formData>({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     photourl: "",
//   });
//   const present_key = "895738473725787";
//   const cloud_name = "dssk1gapb";
//   const [loading, setLoading] = useState(false);
//   const [selectedImage, setSelectedImage] = useState<File>();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormdata({ ...formdata, [e.target.name]: e.target.value });
//   };
//   // const UploadFile=async(type)=>{
//   //   k
//   // }

//   const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { files } = e.target;
//     const selectedFiles = files as FileList;
//     setSelectedImage(selectedFiles?.[0]);
//     // console.log(selectedImage);
//     const formData = new FormData();
//     formData.append("file", selectedFiles?.[0]);
//     formData.append("upload_preset", present_key);
//     axios.post(``)
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     try {
//       e.preventDefault();
//       setLoading(true);
//       // const imgUrl=await UploadFile("image")
//       console.log(formdata);

//       const res = await axios.post(
//         "http://localhost:7000/api/v1/create",
//         formdata
//       );
//       // console.log(res);
//       if (res.status === 200) {
//         toast.success(res.data.msg);
//         navigate("/");
//       }
//       if (res.status === 400) {
//         toast.error("User Create Failed");
//       }
//     } catch (error) {
//       toast.error("User Create Failed");
//     }
//   };
//   const handleFileUpload = async (e: any) => {
//     const file = e.target.files[0];
//     console.log(file);
//   };
//   return (
//     <div className="mt-16">
//       <p className="text-4xl text-center font-bold p-3">Add Contacts</p>
//       <form
//         className="max-w-sm mx-auto text-2xl border p-6 rounded-lg"
//         onSubmit={handleSubmit}
//       >
//         <div className="mb-5">
//           <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//             Your Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="User Name"
//             required
//             value={formdata.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-5">
//           <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//             Your email
//           </label>
//           <input
//             type="email"
//             id="email"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="Email.com"
//             required
//             name="email"
//             value={formdata.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-5">
//           <label
//             htmlFor="PhoneNumber"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Your Phone Number
//           </label>
//           <input
//             type="text"
//             id="number"
//             placeholder="0123456789"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             required
//             // value={phone}
//             // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//             //   setPhone(e.target.value)
//             // }
//             name="phone"
//             value={formdata.phone}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-5">
//           <label
//             htmlFor="PhoneNumber"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Address
//           </label>
//           <input
//             type="text"
//             id="address"
//             placeholder="Abc, State"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             required
//             name="address"
//             value={formdata.address}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-5">
//           <label className=" flex flex-col mb-2 items-center  text-sm font-medium text-gray-900 dark:text-white ">
//             <img
//               className="w-24 h-24 items-center rounded-full"
//               src={avatar}
//               alt="This is photourl images"
//             />
//           </label>
//           <input
//             type="file"
//             id="myFile"
//             // name="myFile"
//             accept=".jpeg, .png, .jpg"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="User Name"
//             required
//             name="photourl"
//             value={formdata.photourl}
//             onChange={handleFileUpload}
//           />
//         </div>
//         <button
//           type="submit"
//           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddContacts;

import { useState } from "react";
import avatar from "../assets/avatar.jpg";
import axios from "axios";
// import ConvertToBase64 from "../utils/ConvertToBase64";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import ImageListTile from '@mui/material/ImageListTile'
// import ListSubheader from '@mui/material/ListSubheader'
interface formData {
  name: string;
  email: string;
  phone: string;
  address: string;
  photourl: string;
}
const AddContacts: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState<formData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    photourl: "",
  });
  const present_key = import.meta.env.CUP;
  const CLOUDNAME = import.meta.env.CLOUDNAME;
  console.log(present_key, CLOUDNAME);

  const [imageUrl, setImageUrl] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const file = e.target.files && e.target.files[0];

    const formDataimage = new FormData();
    if (file) {
      formDataimage.append("file", file);
      formDataimage.append("upload_preset", "wcbd10jz");
      formDataimage.append("cloud_name", "dssk1gapb");
    }
    try {
      await axios
        .post(
          `https://api.cloudinary.com/v1_1/dssk1gapb/image/upload`,
          formDataimage
        )
        .then((res) => {
          setImageUrl(res.data.secure_url);
          console.log(imageUrl);

          // formdata.photourl:imageUrl as string
          setFormdata((prevedata) => ({
            ...prevedata,
            imageUrl,
          }));
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(formdata);

      setLoading(false);
    } catch (error) {
      console.error("Error uploading image: ", error);
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    console.log(formdata);
    try {
      e.preventDefault();
      const res = await axios.post(
        "http://localhost:7000/api/v1/create",
        formdata
      );
      // console.log(res);
      if (res.status === 200) {
        toast.success(res.data.msg);
        navigate("/");
      }
      if (res.status === 400) {
        toast.error("User Create Failed");
      }
    } catch (error) {
      toast.error("User Create Failed");
    }
  };

  return (
    <div className="mt-16">
      <p className="text-4xl text-center font-bold p-3">Add Contacts</p>
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
          <div className="flex space-x-2">
            <input
              type="file"
              // name="myFile"
              accept=".jpeg, .png, .jpg"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Image"
              required
              name="photourl"
              onChange={handleFileUpload}
            />
          </div>
        </div>
        {loading ? (
          <button
            type="submit"
            disabled
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        ) : (
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default AddContacts;
