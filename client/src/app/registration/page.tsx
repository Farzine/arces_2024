"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

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
    phoneNumber: "",
    countryCode: "",
    picture: null as File | null,
  });
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        const countryData = response.data.map((country: any) => ({
          name: country.name.common,
          flag: country.flags.svg,
          callingCode: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : ""),
        }));
        // Sort the countries alphabetically by name
        countryData.sort((a: Country, b: Country) => a.name.localeCompare(b.name));
        setCountries(countryData);
      })
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setForm({
      ...form,
      picture: file,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <form className="w-full max-w-lg p-8 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-semibold mb-8 text-center">Research Tracks Registration</h1>
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
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
          <label htmlFor="university" className="block text-gray-700 font-medium mb-2">
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
          <label htmlFor="country" className="block text-gray-700 font-medium mb-2">
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
            <option value="" disabled>Select your country</option>
            {countries.map((country) => (
              <option key={country.name} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
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
          <label htmlFor="countryCode" className="block text-gray-700 font-medium mb-2">
            Country Code
          </label>
          <select
            id="countryCode"
            name="countryCode"
            value={form.countryCode}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          >
            <option value="" disabled>Select</option>
            {countries.map((country) => (
              <option key={country.callingCode} value={country.callingCode}>
                {country.name} ({country.callingCode})
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="picture" className="block text-gray-700 font-medium mb-2">
            Picture
          </label>
          <input
            type="file"
            id="picture"
            name="picture"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}

