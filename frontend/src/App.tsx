import { useQuery } from '@tanstack/react-query';
import './App.css';
import { getUsersOptions } from './client/@tanstack/react-query.gen';

function App() {
  const { data = [], isLoading, error } = useQuery(getUsersOptions());

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users: {error.message}</p>;

  return (
    <>
      <h4>Users</h4>

      <ul>
        {data.length === 0 ? (
          <li>No user found</li>
        ) : (
          data.map((user: any) => (
            <li key={user.id}>{user.name}</li>
          ))
        )}
      </ul>
    </>
  );
}

export default App;
