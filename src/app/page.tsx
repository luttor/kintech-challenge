'use client';

import { Show } from "@/interfaces/shows";
import List from '@/components/ShowList';
import { Toaster } from "sonner";

export default function Home() {

  const data = localStorage.getItem('favorites');
  let favorites: Show[] = JSON.parse(data as string) as Show[] || [];

  return (
    <>
      
      <List data={favorites} />
    </>
  )
}
