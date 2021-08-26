import './Header.css';
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <NavLink to ='/'>Dashboard</NavLink>
      <NavLink to ='/calendar'>Calendar</NavLink>
      <NavLink to ='/create'>Create Dog</NavLink>
    </header>
  );
}