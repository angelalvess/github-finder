import { MdLocationOn } from 'react-icons/md';
import { UserProps } from '../../types/user';

const User = ({
  login,
  avatar_url,
  followers,
  following,
  location,
}: UserProps) => {
  return (
    <div className="flex flex-col items-center text-gray-700 bg-white p-5 rounded-lg mt-5  ">
      <img className="w-20 h-20 rounded-full" src={avatar_url} alt={login} />
      <h1 className="text-2xl font-semibold mt-3">{login}</h1>
      <p className="text-sm text-gray-700">
        {location}
        <MdLocationOn className="inline-block" />
      </p>
      <p className="text-sm text-gray-700">Followers: {followers}</p>
      <p className="text-sm text-gray-700">Following: {following}</p>
    </div>
  );
};

export default User;
