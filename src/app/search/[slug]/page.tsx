import api from '@/api'

import List from '@/components/ShowList';
import { Search } from '@/interfaces/searchs';
import { Show } from '@/interfaces/shows';

export default async function SearchMovies({ params: { slug } }: { params: { slug: string } }) {

    const { list } = api;
    const data: Search[] = await list<Search[]>(`/search/shows?q=:${slug.trim().toLowerCase()}`);
    const showFiltered = data.map((item) => item.show);

    return (
        <>
            <div className="flex gap-2 m-8">
                <h1>Filter by: {slug}</h1>
            </div>
            <List data={showFiltered as Show[]} />
        </>
    )
}