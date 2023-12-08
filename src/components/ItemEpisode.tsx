import { Episode } from "@/interfaces/episodes"

import { Card, CardFooter, CardHeader, Divider, Image, Link } from "@nextui-org/react"

interface Props {
    info: Episode,
}

const ItemEpisode = ({ info }: Props) => {
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
                    <p className="text-md">Episode: {info.number}: {info.name}</p>
                    <p className="text-small text-foreground/80">{info.airdate.toString()} / {info.airtime}</p>
                </div>
            </CardHeader>
            <Divider />
            <Divider />
            <CardFooter className="flex place-content-center">
                <p>
                    {info.summary}
                </p>
            </CardFooter>
        </Card>
    )
}

export default ItemEpisode