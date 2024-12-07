import React, { useState } from "react";
import { MdOutlineMail, MdCall } from "react-icons/md";
import { PiCertificateDuotone } from "react-icons/pi";

const Header = ({ servicesRef, teamRef, contactRef }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleScrollTo = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    

    const handleDropdown = () => {
        setShowDropdown((prev) => !prev);
    };

    return (
        <header className="header text-lg md:text-2xl py-5 px-5">
            <nav>
                <ul className="nav-list" style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ width: "50%", display: "flex" }}>
                        <img className="w-[30%] md:w-[15%]" src="images/viatec.png" style={{ alignSelf: "start"}} />
                    </div>
                    <div className="relative flex flex-col items-center">
                        <li onClick={handleDropdown} className="cursor-pointer">
                            Kontakt
                        </li>
                        {showDropdown && (
                            <div
                                className={`bg-[#6c2636] flex flex-col gap-3 text-white absolute mt-10 p-4 rounded shadow-lg text-start dropdown`}
                                style={{ zIndex: 9999 }}
                            >
                                <p className="flex gap-3 items-center"><MdOutlineMail /> cerovicljiljana@gmail.com</p>
                                <p className="flex gap-3 items-center"><MdOutlineMail /> office@viatec.com</p>
                                <p className="flex gap-3 items-center"><MdCall /> +381 642502283</p>
                                <p className="flex gap-3 items-center"><PiCertificateDuotone /> Maticni Broj: 20236647</p>
                                <p className="flex gap-3 items-center"><PiCertificateDuotone /> PIB: 104798500</p>
                            </div>
                        )}
                    </div>

                    <li onClick={() => handleScrollTo(servicesRef)}>Usluge</li>
                    <li onClick={() => handleScrollTo(teamRef)}>Tim</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
