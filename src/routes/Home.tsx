import Search from '../components/Search/Search';
import { UserProps } from '../types/user';
import { useState } from 'react';
import axios from 'axios';
import User from '../components/User/User';

const Home = () => {
  const [users, setUsers] = useState<UserProps | null>(null);

  const loadUser = async (username: string) => {
    const response = await axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => {
        setUsers(res.data);
      });

    return response;
  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {users && <User {...users} />}
    </div>
  );
};

export default Home;
