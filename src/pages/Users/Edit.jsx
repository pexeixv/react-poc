import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
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

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/users/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3000/users/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container mx-auto px-5 py-20">
      <h1 className="text-6xl font-black text-center py-12">Edit User</h1>

      <form
        onSubmit={(e) => onSubmit(e)}
        className="flex flex-col space-y-4 mx-auto max-w-2xl"
      >
        <input
          type="text"
          className="form-input  rounded-md"
          placeholder="Enter Your Name"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
        />
        <input
          type="text"
          className="form-input  rounded-md"
          placeholder="Enter Your Username"
          name="username"
          value={username}
          onChange={(e) => onInputChange(e)}
        />
        <input
          type="email"
          className="form-input  rounded-md"
          placeholder="Enter Your E-mail Address"
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}
        />
        <input
          type="text"
          className="form-input  rounded-md"
          placeholder="Enter Your Phone Number"
          name="phone"
          value={phone}
          onChange={(e) => onInputChange(e)}
        />
        <input
          type="text"
          className="form-input  rounded-md"
          placeholder="Enter Your Website Name"
          name="website"
          value={website}
          onChange={(e) => onInputChange(e)}
        />
        <button
          className="text-white bg-black py-2 px-4 rounded-md"
          type="submit"
        >
          Update User
        </button>
      </form>
    </div>
  );
};
export default EditUser;
