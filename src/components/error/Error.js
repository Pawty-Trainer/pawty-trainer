import { Link } from 'react-router-dom';
import './Error.css';

export const Error = ({ error }) => {
  return (
    <article className='error-container'>
      <div className='error-div'>
        <h2 className='error-h2'>{error}</h2>
        <Link to='/'>
          <button className='details-back'>Home</button>
        </Link>
      </div>
    </article>
  )
}