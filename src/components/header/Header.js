import './Header.css';
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <section className='header-container'>
        <h1 className='title'>Pawty Trainer</h1>
      </section>
      <nav>
        <Link to ='/'className='dashboard-nav'>Dashboard</Link>
        <Link to ='/create' className='add-dog-nav'>Add Dog</Link>
        <Link to ='/add_event' className='add-event-nav'>Add Event</Link>
        <Link to ='/calendar' className='calendar-nav'>Calendar</Link>
      </nav>
    </header>
  );
}