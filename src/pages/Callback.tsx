import { useEffect, useState } from 'react';

const URL = 'https://projectchula888.pages.dev'; // Assuming this is your base URL

const fetchUser = async (ticket: string) => {
    console.log(ticket)
  const response = await fetch("https://projectchula888-api.bunyawatapp37204.workers.dev/auth/register/60a6300964bd02e6d673e4f585c6608dbfc63d22e4e1c9a4b3f02a78d06b3a04");
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
