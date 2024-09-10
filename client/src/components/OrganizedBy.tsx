import Image from "next/image";

const OrganizedBy = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 mb-10 py-10 bg-white">
      <h2 className="text-3xl sm:text-5xl font-semibold text-gray-500 mb-8 sm:mb-16">
        Organized by
      </h2>
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Image
          src="/sustLogo.png"
          alt="Logo"
          width={130}
          height={130}
          className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
        />
        <div className="text-center sm:text-left">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-500">School of Applied Sciences & Technology</p>
          <p className="text-lg sm:text-2xl md:text-3xl font-bold">
            Shahjalal University of Science and Technology
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrganizedBy;
