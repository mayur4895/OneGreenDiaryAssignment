'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
const router = useRouter();
  useEffect(()=>{
    router.push("/users")
  })
  return (
   <div>
  
   </div>
  );
}
