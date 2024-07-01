import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';


interface IndustryTrackProps {
  title: string;
  topics: string[];
}

const IndustryTrack: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [topics, setTopics] = useState<string[]>(['']);
  const token = Cookies.get('token');
  const routes = useRouter();

  const handleAddTopic = () => {
    setTopics([...topics, '']);
  };

  const handleTopicChange = (index: number, value: string) => {
    const newTopics = [...topics];
    newTopics[index] = value;
    setTopics(newTopics);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const data: IndustryTrackProps = { title, topics };

    try {
      const response = await fetch('http://localhost:5000/industry-tracks/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        console.log(await response.json());
        setTitle('');
        setTopics(['']);
      } else {
        console.error('Error submitting form', await response.text());
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  const handleSeeAll = () => {
    routes.push('/Admin/industryTrack');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <form onSubmit={handleSubmit} className="bg-blue-200 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add Industry Track</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Tittle:</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        {topics.map((topic, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700">Topic:</label>
            <input 
              type="text" 
              value={topic} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleTopicChange(index, e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        ))}
        <button 
          type="button" 
          onClick={handleAddTopic}
          className="mb-4 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          +
        </button>
        <div className="flex justify-between">
          <button 
            type="submit" 
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Submit
          </button>
          <button 
            type="button" 
            onClick={handleSeeAll}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            See all
          </button>
        </div>
      </form>
    </div>
  );
};

export default IndustryTrack;
