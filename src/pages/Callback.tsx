import { useEffect, useState } from 'react';

const URL = 'https://projectchula888.pages.dev'; // Assuming this is your base URL

const fetchUser = async (ticket: string) => {
  const response = await fetch(`${URL}/register/${ticket}`);
  return response.json();
};

function Callback() {
  const [, setTicket] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const _ticket = urlParams.get('ticket');
    console.log('Ticket is ' + _ticket);
    if (!_ticket) {
      console.error('Ticket is missing');
      return;
    }

    setTicket(_ticket);

    fetchUser(_ticket.toString().trim())
      .then((userData) => {
        setUser(userData);
        setLoading(false);
        console.log(userData);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (user) return <div>{JSON.stringify(user)}</div>;

  return null;
}

export default Callback;
