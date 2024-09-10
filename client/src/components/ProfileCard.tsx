import ScrollToTopButton from "../components/ScrollToTopButton";

interface ProfileCardProps {
  profile: {
    name: string;
    title: string;
    role: string;
    imageUrl: string;
  };
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  return (
    <div className="w-full sm:w-11/12 mx-auto p-4 bg-white border rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 sm:w-36 sm:h-36 overflow-hidden rounded-full">
          <img src={profile.imageUrl} alt={profile.name} className="object-cover w-full h-full" />
        </div>
        <div className="mt-4 text-center px-4">
          <h2 className="text-xl sm:text-2xl font-bold">{profile.name}</h2>
          <p className="mt-2 text-xl sm:text-2xl text-gray-600">{profile.title}</p>
          <p className="mt-1 text-lg sm:text-xl font-semibold text-gray-600">{profile.role}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
