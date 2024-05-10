import { useEffect, useState } from 'react';
import axios from 'axios';

const URL = 'https://projectchula888-api.bunyawatapp37204.workers.dev/';

const fetchUser = async (ticket: string) => {
  const response = await axios.get(`${URL}/auth/callback/${ticket}`);
  return response.data;
};

function Callback() {
  const [ticket, setTicket] = useState<string>('');
  const [user, setUser] = useState<unknown | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    // Get the ticket from the URL query parameters
    const _ticket = new URLSearchParams(window.location.search).get('ticket') || '';
    if (!_ticket) {
      console.error('Ticket is missing');
      return;
    }

    setTicket(_ticket);

    fetchUser(ticket)
      .then((userData) => {
        setUser(userData);
        setLoading(false);
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
