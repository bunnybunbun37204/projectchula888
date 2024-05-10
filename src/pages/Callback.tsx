import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

// const URL = 'https://projectchula888.pages.dev'; // Assuming this is your base URL

const fetchUser = async (ticket: string) => {
  console.log(ticket);
  const response = await fetch(`https://projectchula888-api.bunyawatapp37204.workers.dev/auth/register/${ticket}`);
  return response.json();
};

function Callback() {
  const [, setTicket] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [, setCookie] = useCookies([
    'student_id',
    'student_lname',
    'student_fname',
    'student_email',
    'student_faculty',
  ]);

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
        setCookie('student_id', userData.result.id);
        setCookie('student_fname', userData.result.fname);
        window.location.href = '/explore';
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [setCookie]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (user) return <div>{JSON.stringify(user)}</div>;

  return null;
}

export default Callback;
