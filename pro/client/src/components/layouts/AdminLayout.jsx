import { NavLink, Outlet } from "react-router-dom";
import { FaRegListAlt} from "react-icons/fa"
import { FaUsers } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";
import { IoHome } from "react-icons/io5";
export const AdminLayout = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users"><FaUsers/> Users</NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts">  <GrContact /> Contacts</NavLink>
              </li>
              <li>
                <NavLink to="/admin/services"> <FaRegListAlt/> Services</NavLink>
              </li>
              <li>
                <NavLink to="/"><IoHome /> Home</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet/>
    </>
  );
};
