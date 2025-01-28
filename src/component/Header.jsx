import { CiSearch } from "react-icons/ci";
import { MdErrorOutline } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
const Header = () => {
    return (
        <>
            <div className="flex justify-between p-5 ">
                <div>
                    <ul className="flex space-x-4">
                        <li className="font-bold text-2xl">LOGO</li>
                        <li className="pt-1 font-serif">Company Name</li>
                    </ul>
                </div>
                <div className="border-l-2 border-r-2 border-b-2 pl-2 space-x-2 flex">
                    <div className="pt-2    ">
                        <CiSearch />
                    </div>
                    <input className=" w-[40vw] " type="search" placeholder="Search" />
                </div>
                <div>
                    <ul className="flex space-x-4">
                        <li className="text-2xl pt-1">
                            <MdErrorOutline />
                        </li>
                        <li className="text-2xl pt-1">
                            <IoSettings />
                        </li>
                        <li className="text-3xl text-blue-600">
                            <CgProfile />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header
