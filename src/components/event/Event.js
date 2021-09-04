import './Event.css';
import { Link } from 'react-router-dom';

export const Event = ({ matchingEvent }) => {

  return (
    <section className="event">
      <dl>
        <dt>Dog</dt>
        <dd>{matchingEvent.dog.name}</dd>

        <dt>Event Name</dt>
        <dd>{matchingEvent.name}</dd>

        <dt>Event Date</dt>
        <dd>{(new Date(matchingEvent.eventDatetime)).toLocaleString()}</dd>
      </dl>
      <Link to={'/'} ><button>Home</button></Link>
    </section>
  )
}