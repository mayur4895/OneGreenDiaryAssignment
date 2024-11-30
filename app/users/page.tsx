'use client'
 
 
import { useQuery } from "@tanstack/react-query";
 
import { DataTable } from "./data-table"
import { columns,   } from "./column";
import { useUserStore } from "@/store/user-store";
import { Ghost, Loader2 } from "lucide-react";

const UsersPage = () => {
 
 const { setUsers} = useUserStore();
 
  const { isLoading,  data ,isSuccess} = useQuery({
    queryKey: ['userData'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
        res.json(),
      ),
    
  })

  if(isSuccess){
    setUsers(data)
  }
  if (isLoading) {
    return <div className=' flex items-center justify-center  w-full h-[100vh]'>
      <div className='  items-center text-center flex flex-col gap-2'>
      <Loader2 className=' animate-spin'/>
      <p>User Details lodding..</p>
      </div>

    </div>; // Show loading state
  }

  if(!data){
    return <div className=' flex items-center justify-center  w-full h-[100vh]'>
    <div className='  items-center text-center flex flex-col gap-2'>
     <Ghost/>
    <p>  Preety Empty here </p>
    </div>

  </div>;
  }
 
 

  
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
};

export default UsersPage;



 
 

 
 
 
 
