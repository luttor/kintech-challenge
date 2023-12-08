'use client'

import { Show } from '@/interfaces/shows'
import { Button } from '@nextui-org/react'
import { IconHeart, IconHeartFilled } from '@tabler/icons-react'
import { useState } from 'react'
import { toast } from 'sonner'

interface Props {
    show: Show
}

const FavoriteButton = ({ show }: Props) => {
    const data = localStorage.getItem('favorites') || [];
    let favorites: Show[] = JSON.parse(data as string) as Show[] || [];
    const index = favorites?.findIndex((item) => item.id === show.id);

    const [exist, setExist] = useState(index === -1);

    const markToFavorite = async () => {

        if (index === -1 || index === undefined) {
            favorites.push(show);
            setExist(false);
            toast.success(`Tv Show [${show.name}] added like Favorite...!`)
        } else {
            favorites.splice(index, 1);
            setExist(true);
            toast.warning(`Tv Show [${show.name}] removed from Favorites!`)
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
    };

    return (
        <Button size="sm" variant="light" isIconOnly onClick={markToFavorite}>
            {exist ? <IconHeart color="red" /> : <IconHeartFilled color='red' />}
        </Button>
    )
}

export default FavoriteButton