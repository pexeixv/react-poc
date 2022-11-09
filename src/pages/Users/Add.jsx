import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/users", user);
    navigate("/");
  };
  return (
    <div className="container mx-auto px-5 py-20">
      <h1 className="text-6xl font-black text-center py-12">Add User</h1>

      <form
        onSubmit={(e) => onSubmit(e)}
        className="flex flex-col space-y-4 mx-auto max-w-2xl"
      >
        <input
          type="text"
          className="form-input  rounded-md"
          placeholder="Enter Name"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
        />
        <input
          type="text"
          className="form-input  rounded-md"
          placeholder="Enter Username"
          name="username"
          value={username}
          onChange={(e) => onInputChange(e)}
        />
        <input
          type="email"
          className="form-input  rounded-md"
          placeholder="Enter E-mail Address"
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}
        />
        <input
          type="text"
          className="form-input  rounded-md"
          placeholder="Enter Phone Number"
          name="phone"
          value={phone}
          onChange={(e) => onInputChange(e)}
        />
        <input
          type="text"
          className="form-input  rounded-md"
          placeholder="Enter Website Name"
          name="website"
          value={website}
          onChange={(e) => onInputChange(e)}
        />
        <button
          className="text-white bg-black py-2 px-4 rounded-md"
          type="submit"
        >
          Add User
        </button>
      </form>
    </div>
  );
};
export default AddUser;
