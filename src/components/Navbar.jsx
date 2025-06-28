import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">UX Guy</Link>
        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/case-studies" className={({ isActive }) => (isActive ? 'active' : '')}>
                Case Studies
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'active' : '')}>
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink to="/podcasts" className={({ isActive }) => (isActive ? 'active' : '')}>
                Podcasts
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
