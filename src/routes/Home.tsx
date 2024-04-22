import Search from '../components/Search/Search';
import { UserProps } from '../types/user';
import { useState } from 'react';
import axios from 'axios';

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
      {users && (
        <div className="flex flex-col items-center text-gray-700 bg-white p-5 rounded-lg mt-5  ">
          <img
            className="w-20 h-20 rounded-full"
            src={users.avatar_url}
            alt={users.login}
          />
          <h1 className="text-2xl font-semibold mt-3">{users.login}</h1>
          <p className="text-sm text-gray-700">{users.location}</p>
          <p className="text-sm text-gray-700">Followers: {users.followers}</p>
          <p className="text-sm text-gray-700">Following: {users.following}</p>
        </div>
      )}
    </div>
  );
};

export default Home;

// const { avatar_url, login, location, followers, following } = data;

// const userData: UserProps = {
//   avatar_url,
//   login,
//   location,
//   followers,
//   following,
// };

// setUsers(userData);
