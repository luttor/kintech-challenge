'use client';

import api from "@/api"
import List from "@/components/ShowList";
import { Show } from "@/interfaces/shows";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Shows() {

    const { list } = api;

    const [shows, setShows] = useState<Show[]>([] as Show[]);
    const [currentPage, setCurrentPage] = useState<number>(0);

    useEffect(() => {
        const abortController = new AbortController();
        getShows();
        return () => {
            abortController.abort();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage]);

    const getShows = async () => {
        try {
            const url = currentPage === 0 ? '/shows' : `/shows?page=${currentPage}`;
            const data = await list<Show[]>(url);

            setShows(data);

        } catch (error) {
            console.error(error);
            toast.warning('Error retrieving list of Tv Shows: Page not found.');
            setCurrentPage(0);
        }
    }

    return (
        <>
            <div className="flex gap-2 m-8">
                <Button
                    size="sm"
                    variant="flat"
                    color="secondary"
                    onPress={() => setCurrentPage((prev) => (prev - 1))}
                >
                    Previous
                </Button>
                <Button
                    size="sm"
                    variant="flat"
                    color="secondary"
                    onPress={() => setCurrentPage((prev) => (prev + 1))}
                >
                    Next
                </Button>
            </div>
            <List data={shows} />
        </>
    )
}
