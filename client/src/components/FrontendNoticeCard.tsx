import React, { useEffect, useState } from 'react';
const baseUrl = process.env.NEXT_PUBLIC_APP_BACKEND_URL;

interface Notice {
  _id: string;
  title: string;
  description: string;
}

const FrontendNoticeCard: React.FC = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch(`${baseUrl}/notices`);
        if (!response.ok) {
          throw new Error('Error fetching notices');
        }
        const data = await response.json();
        setNotices(data);
      } catch (err) {
        setError('Error fetching notices');
        console.error(err);
      }
    };

    fetchNotices();
  }, []);

  return (
    <div className="max-w-80 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-customPurple text-white text-left py-4 px-6">
        <h2 className="text-xl font-bold text-black">NOTICES</h2>
      </div>
      <div className="p-4">
        {notices.map((title, index) => (
          <div
            key={index}
            className={`flex p-2 rounded-md items-start pl-4 ${
              index % 2 !== 0 ? 'bg-white' : 'bg-gray-200'
            }`}
          >
            <div className="w-6 h-6 mr-2">
            <svg fill="#000000" height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  viewBox="-183.6 -183.6 979.20 979.20" stroke="#000000" stroke-width="5.507991"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-183.6" y="-183.6" width="979.20" height="979.20" rx="489.6" fill="#e2e4e4" ></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M570.107,500.254c-65.037-29.371-67.511-155.441-67.559-158.622v-84.578c0-81.402-49.742-151.399-120.427-181.203 C381.969,34,347.883,0,306.001,0c-41.883,0-75.968,34.002-76.121,75.849c-70.682,29.804-120.425,99.801-120.425,181.203v84.578 c-0.046,3.181-2.522,129.251-67.561,158.622c-7.409,3.347-11.481,11.412-9.768,19.36c1.711,7.949,8.74,13.626,16.871,13.626 h164.88c3.38,18.594,12.172,35.892,25.619,49.903c17.86,18.608,41.479,28.856,66.502,28.856 c25.025,0,48.644-10.248,66.502-28.856c13.449-14.012,22.241-31.311,25.619-49.903h164.88c8.131,0,15.159-5.676,16.872-13.626 C581.586,511.664,577.516,503.6,570.107,500.254z M484.434,439.859c6.837,20.728,16.518,41.544,30.246,58.866H97.32 c13.726-17.32,23.407-38.135,30.244-58.866H484.434z M306.001,34.515c18.945,0,34.963,12.73,39.975,30.082 c-12.912-2.678-26.282-4.09-39.975-4.09s-27.063,1.411-39.975,4.09C271.039,47.246,287.057,34.515,306.001,34.515z M143.97,341.736v-84.685c0-89.343,72.686-162.029,162.031-162.029s162.031,72.686,162.031,162.029v84.826 c0.023,2.596,0.427,29.879,7.303,63.465H136.663C143.543,371.724,143.949,344.393,143.97,341.736z M306.001,577.485 c-26.341,0-49.33-18.992-56.709-44.246h113.416C355.329,558.493,332.344,577.485,306.001,577.485z"></path> <path d="M306.001,119.235c-74.25,0-134.657,60.405-134.657,134.654c0,9.531,7.727,17.258,17.258,17.258 c9.531,0,17.258-7.727,17.258-17.258c0-55.217,44.923-100.139,100.142-100.139c9.531,0,17.258-7.727,17.258-17.258 C323.259,126.96,315.532,119.235,306.001,119.235z"></path> </g> </g> </g> </g></svg>
            </div>
            <div className="ml-2">
              <div className="text-gray-900 font-bold">{title.title}</div>
              <div className="text-gray-500">{title.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FrontendNoticeCard;
