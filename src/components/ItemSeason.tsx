import { Season } from "@/interfaces/seasons"

import { Card, CardFooter, CardHeader, Divider, Image, Link } from "@nextui-org/react"

interface Props {
    info: Season,
    showId: number;
}

const ItemSeason = ({ info, showId }: Props) => {
    return (
        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
                <Image
                    alt={info.name}
                    height={60}
                    radius="sm"
                    src={info.image?.medium ?? info.image?.original}
                    width={60}
                />
                <div className="flex flex-col">
                    <p className="text-md">Season {info.number}{info.name}</p>
                    <p className="text-small text-foreground/80">{new Date(info.premiereDate).getFullYear()}</p>
                </div>
            </CardHeader>
            <Divider />
            <Divider />
            <CardFooter className="flex place-content-center">
                <Link
                    href={`/shows/${showId}/season/${info.id}/episodes`}
                >
                    Episodes
                </Link>
            </CardFooter>
        </Card>
    )
}

export default ItemSeason