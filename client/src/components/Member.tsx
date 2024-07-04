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
    <div className="w-full  mx-auto p-6 bg-white border rounded-lg shadow">
      <div className="flex flex-col items-center">
        <div className="w-40 h-40 overflow-hidden rounded-full">
          <img src={profile.imageUrl} alt={profile.name} className="object-cover w-full h-full" />
        </div>
        <div className="mt-4 text-center">
          <h2 className="text-lg font-bold whitespace-nowrap">{profile.name}</h2>
          <p className="mt-2 text-sm text-gray-600">{profile.title}</p>
          <p className="mt-1 text-sm font-bold text-gray-600">{profile.role}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
