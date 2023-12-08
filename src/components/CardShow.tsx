import { Show } from "@/interfaces/shows"
import { Card, CardBody, CardFooter, CardHeader, Chip, Divider, Image, Link } from "@nextui-org/react"
import FavoriteButton from "./FavoriteButton"

interface Props {
    info: Show
}

const CardShow = ({ info }: Props) => {
    return (
        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
                <Image
                    alt={info.name}
                    height={40}
                    radius="sm"
                    src={info.image?.medium ?? info.image?.original}
                    width={40}
                />
                <div className="flex flex-col">
                    <p className="text-md">{info.name}</p>
                    <p className="text-small text-default-500">{new Date(info.premiered).getFullYear()}</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                {info.rating.average ? <p>{info.rating?.average} / 10</p> : '--'}
                <div className="flex gap-1">
                    {info?.genres?.map((genre) => <Chip key={genre} size="sm" variant="bordered">{genre}</Chip>)}
                </div>
            </CardBody>
            <Divider />
            <CardFooter className="flex place-content-between">
                <Link
                    href={`/shows/${info.id}`}
                >
                    View
                </Link>
                <FavoriteButton show={info} />
            </CardFooter>
        </Card>
    )
}

export default CardShow