import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-neutral-800 text-white">
      <div className="container mx-auto max-w-7xl px-5 py-5 flex items-center justify-between">
        <Link to="/" className="text-lg font-bold">
          UserListing
        </Link>
        <Link
          to="/users/add"
          className="text-black bg-white py-2 px-4 rounded-md"
        >
          Add User
        </Link>
      </div>
    </header>
  );
};
export default Header;
