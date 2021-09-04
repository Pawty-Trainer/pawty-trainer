import './Header.css';
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <section className='header-container'>
        <h1 className='title'>Pawty Trainer</h1>
      </section>
      <nav>
        <Link to ='/'>Dashboard</Link>
        <Link to ='/create'>Add Dog</Link>
        <Link to ='/add_event'>Add Event</Link>
        <Link to ='/calendar'>Calendar</Link>
      </nav>
    </header>
  );
}