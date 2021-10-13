import React from "react";


export default function Navbar() {
    return(
        <div className="w-full h-1/12 sticky top-0 z-50">
            <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-400"/>
            <div className="flex py-2.5 px-4 justify-between shadow-md items-center bg-white">
                <a href="/"
                   className="flex justify-between items-center font-medium text-lg focus:underline truncate">
                    Get Better Quick
                </a>
                <div className="items-center space-x-4">
                    <button>Find Support</button>
                    <button>Helpful Information</button>
                    <button>Get Involved</button>
                    <button>About</button>
                </div>
            </div>
        </div>
    )
}