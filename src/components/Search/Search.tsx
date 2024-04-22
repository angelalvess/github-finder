import { useState } from 'react';
type SearchProps = {
  loadUser: (username: string) => Promise<void>;
};

import { BsSearch } from 'react-icons/bs';

const Search = ({ loadUser }: SearchProps) => {
  const [username, setUsername] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      loadUser(username);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mt-10 mb-2">
        Search for a user
      </h2>
      <p className="text-center text-gray-400 mb-10">
        Know your best repositories
      </p>

      <div className="flex justify-center items-center w-full max-w-md mx-auto bg-white rounded-md shadow-md p-2 space-x-2">
        <input
          className=" text-black w-full p-2 border border-gray-300  outline-none rounded-md"
          type="text"
          placeholder="Search users..."
          value={username}
          onChange={({ target }) => setUsername(target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={() => loadUser(username)}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
