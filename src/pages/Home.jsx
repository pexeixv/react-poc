import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await axios.get("http://localhost:3000/users");
    setUsers(res.data);
  };

  return (
    <div className="px-5 py-20">
      {users.map((user, index) => (
        <div key={index} className="mb-4 py-1 px-2 rounded bg-gray-200 ">
          {user.name}
        </div>
      ))}
    </div>
  );
};
export default Home;
