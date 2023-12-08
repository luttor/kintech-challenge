import ItemSeason from "@/components/ItemSeason"
import { Season } from '../../../interfaces/seasons';
import api from "@/api";
import { Show } from "@/interfaces/shows";
import CardInfoShow from "@/components/CardInfoShow";

export default async function ShowDetail({ params: { id } }: { params: { id: string } }) {

    const { list, get } = api;
    const show: Show = await get<Show>(`/shows/${id}`);
    const seasons = await list<Season[]>(`/shows/${id}/seasons`);

    return (
        <>
            <CardInfoShow show={show} />
            <div className="grid justify-center grid-cols-1 md:grid-cols-4 gap-4 m-8">
                {
                    seasons.map((item) => <ItemSeason key={item.id} showId={show.id} info={item} />)
                }
            </div>
        </>
    )
}