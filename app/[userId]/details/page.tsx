'use client';

import { Card, CardTitle } from '@/components/ui/card';
import { useUserStore } from '@/store/user-store';
import { Loader2 } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaAddressCard, FaUser } from 'react-icons/fa';
import { RiBuilding2Fill } from "react-icons/ri";
const UserDetails: React.FC = () => {
  const searchParam = useParams();
  const userId = searchParam.userId;

  const { users, setUsers } = useUserStore();
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    const fetchUsers = async () => {
      if (users.length === 0) {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data); // Update Zustand store with fetched data
      }
      setLoading(false); // Stop loading when data is fetched
    };
    fetchUsers();
  }, [users.length, setUsers]);

  if (loading) {
    return <div className=' flex items-center justify-center  w-full h-[100vh]'>
      <div className='  items-center text-center flex flex-col gap-2'>
      <Loader2 className=' animate-spin'/>
      <p>User Details lodding..</p>
      </div>

    </div>; // Show loading state
  }

  const user = users.find((user) => String(user.id) === userId); // Ensure type match for comparison

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg">
      <h1 className="text-2xl font-semibold mb-4 text-center">User Details</h1>
      <div className="grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2 gap-6 ">
        <Card className="p-4 rounded-lg shadow-md">
          <CardTitle className="text-xl font-semibold flex items-center gap-2"> <FaUser /> Personal Information</CardTitle>
          <ul className="flex flex-col gap-2 mt-4">
            <li>Name: {user.name}</li>
            <li>Username: {user.username}</li>
            <li>Email: {user.email}</li>
            <li>Phone: {user.phone}</li>
            <li>
              Website:{' '}
              <a
                href={`https://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {user.website}
              </a>
            </li>
          </ul>
        </Card>

        <Card className="p-4 rounded-lg shadow-md">
          <CardTitle className="text-xl font-semibold flex items-center gap-3"> <RiBuilding2Fill size={22}/>Company Details</CardTitle>
          <ul className="flex flex-col gap-2 mt-4">
            <li>Company Name: {user.company.name}</li>
            <li>Catchphrase: {user.company.catchPhrase}</li>
            <li>Business: {user.company.bs}</li>
          </ul>
        </Card>

        <Card className="p-4 rounded-lg shadow-md">
          <CardTitle className="text-xl font-semibold flex items-center gap-4"> <FaAddressCard  size={22}/> Address</CardTitle>

  
            <ul className=' flex flex-col gap-2 mt-4'>
            <p>Street: {user.address.street}</p>
          <p>Suite: {user.address.suite}</p>
          <p>City: {user.address.city}</p>
          <p>Zipcode: {user.address.zipcode}</p>
          <p>
            Geo Location: Latitude {user.address.geo.lat}, Longitude {user.address.geo.lng}
          </p>
            </ul>
          
         
        </Card>
      </div>
    </div>
  );
};

export default UserDetails;
