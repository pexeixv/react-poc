import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import ListingTable from "../../components/ListingTable";

const DeleteUser = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const openModal = () => {};

  const closeModal = () => {
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3000/users/${id}`);
    setUser(result.data);
  };
  const { id } = useParams();
  useEffect(() => {
    loadUser(id);
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3000/users/${id}`);
    navigate("/");
  };

  return (
    <>
      <ListingTable />
      <div
        className="absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center"
        id="modal"
        // onClick={() => closeModal()}
      >
        <div className="p-8 rounded-lg bg-white">
          <div className="flex justify-end">
            <button onClick={() => closeModal()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-4">
            <h1 className="text-2xl font-black">Are you sure?</h1>
            <p>Are you sure you wish to delete user {user.name}?</p>
          </div>
          <div className="mt-4 flex items-center justify-end gap-4">
            <button
              className="bg-red-700 px-4 py-2 rounded text-white"
              onClick={() => deleteUser(user.id)}
            >
              Yes
            </button>
            <Link to="/" className="bg-black px-4 py-2 rounded text-white">
              No
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default DeleteUser;
