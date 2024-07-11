"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ImagePlus } from "lucide-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseUrl = process.env.NEXT_PUBLIC_APP_BACKEND_URL;
const frontendUrl = process.env.NEXT_PUBLIC_APP_FRONTEND_URL;

interface Country {
  name: string;
  flag: string;
  callingCode: string;
}

export default function Registration() {
  const [form, setForm] = useState({
    name: "",
    university: "",
    country: "",
    email: "",
    phone: "",
    photoUrl: "",
  });
  const [countries, setCountries] = useState<Country[]>([]);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const route = useRouter();

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const countryData = response.data.map((country: any) => ({
          name: country.name.common,
          flag: country.flags.svg,
          callingCode:
            country.idd.root +
            (country.idd.suffixes ? country.idd.suffixes[0] : ""),
        }));
        // Sort the countries alphabetically by name
        countryData.sort((a: Country, b: Country) =>
          a.name.localeCompare(b.name)
        );
        setCountries(countryData);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleProfilePicUpload = (result: any) => {
    const uploadedURL = result.info.secure_url;
    setForm({
      ...form,
      photoUrl: uploadedURL,
    });
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    if (!form.name || !form.university || !form.country || !form.email || !form.phone || !form.photoUrl) {
      toast.error("Please upload your image.");
      setSubmitting(false);
      return;
    }
    try {
      const response = await axios.post(`${baseUrl}registration`, form);
      if (response.status === 201) {
        route.push(`${frontendUrl}/attendee/${response.data._id}`);
        toast.success("Registration successful.")
      }
    } catch (error) {
      toast.error("Failed to register. Please try again.")
      console.error("Error registering user:", error);
    }
    setSubmitting(false);
  };

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center">
        {/* Background Image Section */}
        <div className="relative h-full bg-black bg-opacity-50 overflow-hidden md:visible invisible">
          <Image
            src="/IICT.jpg"
            alt="IICT SUST"
            layout="fill"
            objectFit="cover"
            className="opacity-50 z-0"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-center z-10">
            <p className="text-white text-center font-mono text-5xl font-semibold p-4">
              8th International Conference on
            </p>
            <p className="text-white text-center font-mono text-3xl font-semibold p-4 mb-8">
              Engineering Research, Innovation and Education (ICERIE 2025)
            </p>
          </div>
        </div>
        {/* Registration Form Section */}
        <div className="p-8 bg-white shadow-md rounded-lg flex flex-col items-center ">
          <Image
            src="/logo1.png"
            height={200}
            width={200}
            alt=""
            className="aspect-square w-32"
          />
          <h1 className="text-2xl font-serif font-semibold mb-8 text-center">
            Register Now
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="name" className="mb-1 text-sm">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="university" className="mb-1 text-sm">
                University<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="university"
                name="university"
                value={form.university}
                onChange={handleChange}
                className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="country" className="mb-1 text-sm">
                Country<span className="text-red-500">*</span>
              </label>
              <select
                id="country"
                name="country"
                value={form.country}
                onChange={handleChange}
                className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                required
              >
                <option value="" disabled>
                  Select your country
                </option>
                {countries.map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="mb-1 text-sm">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="phone" className="mb-1 text-sm">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                required
              />
            </div>
            {form.photoUrl ? (
              <Image
                src={form.photoUrl}
                height={200}
                width={200}
                alt=""
                className="rounded-full h-32 w-32"
              />
            ) : (
              <Image
                src="/camera.png"
                height={200}
                width={200}
                alt=""
                className="rounded-full h-32 w-32"
              />
            )}
            <CldUploadWidget
              onUpload={handleProfilePicUpload}
              uploadPreset={process.env.NEXT_PUBLIC_IMG_UPLOAD_PRESET}
            >
              {({ open }) => (
                <button
                  type="button"
                  className="border my-2 p-2 rounded-md hover:bg-slate-300 flex gap-2"
                  onClick={() => open()}
                >
                  <ImagePlus />
                  Upload your image <span className="text-red-600">*</span>
                </button>
              )}
            </CldUploadWidget>
            <div className="text-center mt-4">
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
