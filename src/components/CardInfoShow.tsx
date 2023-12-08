import { Show } from "@/interfaces/shows"
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { Card, CardBody, Image, Button, Slider, Chip, Divider } from "@nextui-org/react";
import FavoriteButton from "./FavoriteButton";

interface Props {
    show: Show
}

const CardInfoShow = ({ show }: Props) => {
    return (
        <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 m-8"
            shadow="sm"
        >
            <CardBody>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                    <div className="relative col-span-6 md:col-span-2">
                        <Image
                            alt={show.name}
                            height={200}
                            shadow="md"
                            src={show.image?.medium ?? show.image?.original}
                            width={200}
                        />
                    </div>

                    <div className="flex flex-col col-span-6 md:col-span-10">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-0">
                                <h1 className="font-semibold text-foreground/90">{show.name}</h1>
                                <p className="text-small text-foreground/80">{new Date(show.premiered).getFullYear()}</p>
                                <p className="text-sm my-2">
                                    {show.summary}
                                </p>
                                <Divider />
                                <div className="flex gap-1 my-2">
                                    {show.genres.map((genre) => <Chip key={genre} size="sm" variant="bordered">{genre}</Chip>)}
                                </div>
                            </div>
                            <FavoriteButton show={show} />
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default CardInfoShow