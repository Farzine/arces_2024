import Image from "next/image";

const OrganizedBy = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-white">
      <h2 className="text-4xl font-semibold text-gray-500 mb-16">Organized by</h2>
      <div className="flex items-center space-x-4">
        <Image
          src="/sustLogo.png"
          alt="Logo"
          width={130}
          height={130}
          className="w-24 h-24 object-contain"
        />
        <div className="text-center">
          <p className="text-md text-gray-500 justify-start flex">School of Applied Sciences & Technology</p>
          <p className="text-xl font-bold">Shahjalal University of Science and Technology</p>
        </div>
      </div>
    </div>
  );
};

export default OrganizedBy;
