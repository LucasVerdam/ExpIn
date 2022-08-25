import { NavLink, useHistory } from 'react-router-dom';
import './App.css';
import Routes from './routes';
import { logout } from "./Services/utils"

function App() {
  const history = useHistory();
  function handleLogout() {
    logout();
    history.push("/");
  }
  return (
    <div className='App'>
      <header>
        <nav>
          <ul>
            <li >
              <button className='links_e'>
                <NavLink exact to="/" className="navl">
                  Login
                </NavLink>
              </button>
            </li>

            <li>
              <button className='links_e'>
                <NavLink exact to="/register" className="navl">
                  Registrar
                </NavLink>
              </button>
            </li>

            <li>
              <button onClick={handleLogout} className='links_e'>Logout</button>
            </li>
          </ul>
        </nav>
      </header>
      <Routes />
    </div>
  );
}

export default App;
