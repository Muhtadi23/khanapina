import Navbar from "@/components/Navbar";
import SidebarMenu from "@/components/SidebarMenu";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({ children }) {
    return (
        <div className="h-screen flex mx-auto">
            <div className="w-[14%] md:w-[8%] lg:w-[16%] p-4">
                <Link href='/' className="flex items-center gap-2">
                    <Image src='/logo.png' alt="logo" width={32} height={32} >
                    </Image>
                    <span className="font-bold text-2xl hidden lg:block">Khanapina</span>
                </Link>
                <SidebarMenu></SidebarMenu>
                {/* <Navbar></Navbar> */}
            </div>
            <div className="w-[86%]  md:w-[92%] lg:w-[84%] overflow-scroll">
                <Navbar></Navbar>
                {children}
            </div>
        </div>
    );
}
