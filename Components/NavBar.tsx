import React from 'react'
import {Bars3Icon} from '@heroicons/react/24/outline'

interface Props {
    navBarOpen: boolean;
    handleNavBar(): void;
}


const NavBar = ({navBarOpen, handleNavBar }: Props) => {
    if(!navBarOpen){
        return(<Bars3Icon onClick={handleNavBar} className="stroke-1 hover:cursor-pointer"/>)
    }
    else {
        return(
            <div>
                <a href="#section">Index</a>
                <a href="#section">Notes</a>
                <button onClick={handleNavBar}>x</button>
            </div>
        )
    }
    
}

export default NavBar