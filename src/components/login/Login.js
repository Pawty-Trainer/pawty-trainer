import './Login.css';
import { Link } from 'react-router-dom'

export const Login = () => {

  return (
    <section>
      <h1>login</h1>
      <Link to ='/signup'>Sign Up</Link>
    </section>
  )
}