import api from "@/api";
import CardInfoShow from "@/components/CardInfoShow";
import ItemEpisode from "@/components/ItemEpisode";
import { Episode } from "@/interfaces/episodes";
import { Show } from "@/interfaces/shows";

export default async function Episodes({ params: { id, seasonId } }: { params: { id: string, seasonId: string } }) {

    const { list, get } = api;
    const show: Show = await get<Show>(`/shows/${id}`);
    const episodes: Episode[] = await list<Episode[]>(`/seasons/${seasonId}/episodes`)

    return <>
        <CardInfoShow show={show} />
        <div className="grid justify-center grid-cols-1 md:grid-cols-4 gap-4 m-8">
            {episodes.map((item) => <ItemEpisode key={item.id} info={item}/>)}
        </div>
    </>
}