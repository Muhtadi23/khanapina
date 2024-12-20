import Link from 'next/link';
import React from 'react';
import { MdDashboard, MdMenu, MdSupervisedUserCircle } from "react-icons/md";
import { LuUtensilsCrossed } from "react-icons/lu";

const menuItems = [
    {
        title: "DASHBOARD",
        items: [
            {
                icon: <MdDashboard />,
                label: "Overview",
                href: "/",
                visible: ["admin", "restaurant", "customer", "delivery"],
            },
            {
                icon: <LuUtensilsCrossed />,
                label: "Orders",
                href: "/orders",
                visible: ["admin", "restaurant", "customer", "delivery"],
            },
            {
                icon: <MdMenu />,
                label: "Menu",
                href: "/menu",
                visible: ["admin", "restaurant"],
            },
            {
                icon: <MdSupervisedUserCircle />,
                label: "Customers",
                href: "/customers",
                visible: ["admin", "restaurant"],
            },
            {

                label: "Delivery Partners",
                href: "/delivery-partners",

            },
            {

                label: "Reviews",
                href: "/reviews",
                visible: ["admin", "restaurant", "customer"],
            },
            {

                label: "Analytics",
                href: "/analytics",
                visible: ["admin", "restaurant"],
            },
        ],
    },
    {
        title: "ACCOUNT",
        items: [
            {
                label: "Profile",
                href: "/profile",
                visible: ["admin", "restaurant", "customer", "delivery"],
            },
            {
                label: "Settings",
                href: "/settings",
                visible: ["admin", "restaurant", "customer", "delivery"],
            },
            {
                label: "Logout",
                href: "/logout",
                visible: ["admin", "restaurant", "customer", "delivery"],
            },
        ],
    },
];


const SidebarMenu = () => {
    return (
        <div className="mt-2">
            {menuItems.map((i) => (
                <div className="flex flex-col gap-2" key={i.title}>
                    <span className="hidden lg:block font-semibold text-xl my-4">
                        {i.title}
                        <span>
                            {i.icon}
                        </span>
                    </span>
                    {
                        i.items.map(item => (
                            <Link className='flex items-center gap-1' href={item.href} key={item.label}>
                                <span>
                                    {item.icon}
                                </span>
                                <span className=''>{item.label}</span>
                            </Link>
                        ))
                    }
                </div>
            ))}
        </div>
    );
};

export default SidebarMenu; 