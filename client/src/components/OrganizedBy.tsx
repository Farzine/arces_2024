import Image from "next/image";

const OrganizedBy = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-white">
      <h2 className="text-lg text-gray-500 mb-4">Organized by</h2>
      <div className="flex items-center space-x-4">
        <Image
          src="/sustLogo.png"
          alt="Logo"
          width={100}
          height={100}
          className="w-20 h-20 object-contain"
        />
        <div className="text-center">
          <p className="text-sm text-gray-500">School of Applied Sciences & Technology</p>
          <p className="text-lg font-bold">Shahjalal University of Science and Technology</p>
        </div>
      </div>
    </div>
  );
};

export default OrganizedBy;
