import ScrollToTopButton from "./ScrollToTopButton";

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
    <div className="w-11/12 mx-auto p-1 bg-white border rounded-lg shadow py-3">
      <div className="flex flex-col items-center">
        <div className="w-36 h-36 overflow-hidden rounded-full">
          <img src={profile.imageUrl} alt={profile.name} className="object-cover w-full h-full" />
        </div>
        <div className="mt-4 text-center">
          <h2 className="text-lg font-bold whitespace-nowrap">{profile.name}</h2>
          <p className="mt-2 text-sm text-gray-600">{profile.title}</p>
          <p className="mt-1 text-sm font-bold text-gray-600">{profile.role}</p>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default ProfileCard;
