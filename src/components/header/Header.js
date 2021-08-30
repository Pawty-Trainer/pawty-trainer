import './Header.css';
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <h1>Pawty Trainer</h1>
      <nav>
        <Link to ='/'>Dashboard</Link>
        <Link to ='/create'>Add Dog</Link>
        <Link to ='/event'>Add Event</Link>
        <Link to ='/calendar'>Calendar</Link>
      </nav>
    </header>
  );
}