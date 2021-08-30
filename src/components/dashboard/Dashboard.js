import './Dashboard.css';

export const Dashboard = ({ data }) => {

  return (
    <section className="dashboard">
      <h2>Welcome {data.user.name}!</h2>

      <section>
        <section>
          <h3>My Dogs</h3>
          <ul>
            <li>Fifi</li>
          </ul>
        </section>

        <section>
          <h3>Upcoming Events</h3>
          <dl>
            <dt>Today</dt>
            <dd>6pm - Sit with Fifi</dd>

            <dt>Tomorrow</dt>
            <dd>4pm - Play with Fifi</dd>
          </dl>
        </section>
      </section>
    </section>
  )
}