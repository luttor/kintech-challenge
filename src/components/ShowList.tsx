import { Show } from "@/interfaces/shows"
import CardShow from "./CardShow"

interface Props {
    data: Show[]
}

const ShowList = ({ data }: Props) => {

    return (
        <div className="grid justify-center grid-cols-1 md:grid-cols-4 gap-4 m-8">
            {data.map((item) => <CardShow key={item.id} info={item} />)}
        </div>
    )
}

export default ShowList