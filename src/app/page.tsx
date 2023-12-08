'use client';

import { Show } from "@/interfaces/shows";
import List from '@/components/ShowList';
import { useEffect, useState } from "react";

export default function Home() {
  const [favorites, setFavorites] = useState<Show[]>([] as Show[]);

  useEffect(() => {
    const data = window.localStorage.getItem('favorites');
    setFavorites(JSON.parse(data as string) as Show[] || []);
  }, [])

  return <List data={favorites} />
}
