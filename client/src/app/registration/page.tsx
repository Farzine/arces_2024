"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useRouter } from "next/navigation";

const baseUrl = process.env.NEXT_PUBLIC_APP_BACKEND_URL;
const frontendUrl = process.env.NEXT_PUBLIC_APP_FRONTEND_URL;


interface Country {
  name: string;
  flag: string;
  callingCode: string;
}

export default function ResearchTracks() {
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
    try {
      const response = await axios.post(`${baseUrl}registration`, form);
      if (response.status === 201) {
        route.push(`${frontendUrl}attendee/${response.data._id}`);
      }
    } catch (error) {
      window.alert("Can't Register User");
    }
    setSubmitting(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <form
        className="w-full max-w-lg p-8 bg-white shadow-md rounded-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-semibold mb-8 text-center">
          Research Tracks Registration
        </h1>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="university"
            className="block text-gray-700 font-medium mb-2"
          >
            University
          </label>
          <input
            type="text"
            id="university"
            name="university"
            value={form.university}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="country"
            className="block text-gray-700 font-medium mb-2"
          >
            Country
          </label>
          <select
            id="country"
            name="country"
            value={form.country}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
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
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block text-gray-700 font-medium mb-2"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
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
        ) : null}
        <CldUploadWidget onUpload={handleProfilePicUpload} uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}>
          {({ open }) => {
            return (
              <button
                type="button"  // Changed type to "button" to prevent form submission
                className="border my-2 p-2 rounded-md hover:bg-slate-300"
                onClick={() => open()}
              >
                Upload your image <span className="text-red-600">*</span>
              </button>
            );
          }}
        </CldUploadWidget>
        <div className="text-center">
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}
