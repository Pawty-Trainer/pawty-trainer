import './Header.css';
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <h1>Pawty Trainer</h1>
      <nav>
        <Link to ='/'>Dashboard</Link>
        <Link to ='/calendar'>Calendar</Link>
        <Link to ='/create'>Create Dog</Link>
      </nav>
    </header>
  );
}