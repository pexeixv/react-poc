import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3000/users/${id}`);
    setUser(res.data);
  };
  return (
    <section>
      <div className="container mx-auto px-5 py-24">
        <h1 className="text-6xl font-black text-center pb-12">
          Employee #{user.id}
        </h1>
        <ul className="max-w-3xl mx-auto">
          <li>
            <span className="font-bold">Name:</span> {user.name}
          </li>
          <li>
            <span className="font-bold">Username:</span> {user.username}
          </li>
          <li>
            <span className="font-bold">Email:</span> {user.email}
          </li>
          <li>
            <span className="font-bold">Phone:</span> {user.phone}
          </li>
          <li>
            <span className="font-bold">Website:</span> {user.website}
          </li>
        </ul>

        <div className="flex justify-center mt-20">
          <Link
            to={`/users/edit/${id}`}
            className="text-white bg-black py-2 px-4 rounded-md"
          >
            Edit this User
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ViewUser;
