'use client'
import { useState } from 'react';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Link, Input } from '@nextui-org/react';
import { IconSearch } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [filter, setFilter] = useState<string>('')
    const menuItems = [
        {
            title: 'Home',
            url: '/'
        },
        {
            title: 'Shows',
            url: '/shows'
        }];

    const { push } = useRouter();


    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className="font-bold text-inherit">KenTech</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            href={item.url}
                            size="lg"
                            color='foreground'
                        >
                            {item.title}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Input
                        label="Search"
                        variant="bordered"
                        placeholder="Search Tv Show"
                        endContent={
                            <button className="focus:outline-none" type="button" onClick={() => push(`/search/${filter}`)} disabled={!filter}>
                                <IconSearch />
                            </button>
                        }
                        type='text'
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            href={item.url}
                            size="lg"
                        >
                            {item.title}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}

export default Header