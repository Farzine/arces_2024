"use client"

import Footer from '@/components/Footer';
import Navbar from '@/components/NavBar';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const RegistrationFees: React.FC = () => {

    const router = useRouter();

    const handleRegistration = () => {
        router.push('/registration');
    }

    return (
        <div className='min-h-screen'>
            <div className="fixed top-0 left-0 right-0 z-50">
                <Navbar />
            </div>
            <div className="container mx-auto px-4 py-8 bg-white mb-10 min-h-screen mt-16">
                <div className='flex items-center justify-center mt-14 mb-10'>
                    <Image
                        src="/fees.png"
                        alt="fees icon"
                        width={50}
                        height={50}
                        className=" mr-8"
                    />
                    <div>
                        <h1 className="text-4xl font-bold mb-4 text-center">REGISTRATION FEES</h1>
                    </div>
                </div>
                <p className="text-center text-lg text-red-600 font-semibold mb-4 cursor-pointer hover:underline" onClick={handleRegistration}>
                    Click to Registration
                </p>

                <p className="text-start font-semibold text-2xl ml-24 ">
                    FEES :
                </p>
                <div className="flex justify-center mb-8 ml-24 mr-24 mt-5">
                    <table className="min-w-full bg-white border-2 border-gray-400">
                        <thead className='text-lg'>
                            <tr>
                                <th className="py-2 px-4 border-2">Registration Fees</th>
                                <th className="py-2 px-4 border-2">Early Bird</th>
                                <th className="py-2 px-4 border-2">Regular</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            <tr>
                                <td className="py-2 px-4 border-2">Local Delegates (Author)</td>
                                <td className="py-2 px-4 border-2 font-semibold">BDT 6000</td>
                                <td className="py-2 px-4 border-2 font-semibold">BDT 7000</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-2">Local Delegates (Participant)</td>
                                <td className="py-2 px-4 border-2 font-semibold">BDT 5000</td>
                                <td className="py-2 px-4 border-2 font-semibold">BDT 6000</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-2">Local Students (Author/ Co-author)</td>
                                <td className="py-2 px-4 border-2 font-semibold">BDT 4000</td>
                                <td className="py-2 px-4 border-2 font-semibold">BDT 5000</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-2">Foreign Delegates</td>
                                <td className="py-2 px-4 border-2 font-semibold">USD 350</td>
                                <td className="py-2 px-4 border-2 font-semibold">USD 450</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-2">Foreign Students</td>
                                <td className="py-2 px-4 border-2 font-semibold">USD 200</td>
                                <td className="py-2 px-4 border-2 font-semibold">USD 250</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mb-8 ml-24">
                    <div className='flex'>
                        <h2 className="text-2xl font-bold mb-4 text-red-600">PAYMENT DEADLINE</h2>
                        <div>
                            <Image
                                src="/information-button.png"
                                alt="information icon"
                                width={27}
                                height={27}
                                className=" ml-4 mt-1"
                            />
                        </div>
                    </div>
                    <p className="flex items-center mb-4">
                        <span className="text-xl font-semibold">Early Bird</span>
                        <span className="ml-8 text-xl  font-semibold">Date: Dec 01-Dec 10, 2024</span>
                    </p>
                    <p className="flex items-center">
                        <span className="text-xl font-semibold">Regular</span>
                        <span className="ml-12 text-xl font-semibold">Date: Dec 11-Dec 25, 2024</span>
                    </p>
                </div>

                <div className="mb-8 ml-24">
                    <h2 className="text-2xl font-bold mb-4">PAYMENT SYSTEM</h2>
                    <p className="text-blue-500 cursor-pointer mb-4 hover:underline text-lg">Click for Details</p>
                </div>

                <div className="mb-8 ml-24">
                    <h2 className="text-2xl font-bold mb-4 underline text-red-600">Proceedings:</h2>
                    <p className="mb-4 text-justify">
                        The proceedings of the conference will be published in two forms: printed book (only extended abstract) and Pen drive (full proceedings).
                    </p>
                    <p className="mb-4 text-justify">
                        Selected papers will be considered for publication in the Journal of Engineering Research, Innovation and Education. We are in the process of indexing the proceedings in renowned digital repositories that are available online.
                    </p>
                    <p className="mb-4">for Adults and BDT 1000 for Children above three years.</p>
                </div>

                <div className="mb-8 ml-24">
                    <h2 className="text-2xl font-bold mb-4 underline text-red-600">Conference Tour:</h2>
                    <p className="mb-4">
                        An attractive tour will be arranged for delegates and accompanying persons to a beautiful location in Sylhet named “SADA PATHOR” in Volagonj.
                    </p>
                    <p className="mb-4">
                        It is adjacent to the Indian border. The location is one-hour traveling distance from the conference venue. Those who want to participate in the tour must register separately paying the required fees: BDT 1500
                    </p>
                </div>
            </div>
            <ScrollToTopButton />
            <Footer />
        </div>
    );
};

export default RegistrationFees;
