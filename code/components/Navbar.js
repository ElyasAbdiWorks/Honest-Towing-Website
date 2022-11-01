// packages
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// icons
import {BiMenuAltRight} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'

export default function Navbar() {
    // handle hamburger menu
    const [hamburgerClicked, setHamburgerClicked] = useState(false);
    const onHamburgerClicked = () => {
        setHamburgerClicked(!hamburgerClicked); 
    };
    const onLinkClicked = () => {
        setHamburgerClicked(!hamburgerClicked);
    }
    const onClickHome = (e) => {
        e.preventDefault();
        const elementToView = document.getElementById("home");
        setHamburgerClicked(false);
        elementToView.scrollIntoView({behavior:"smooth"}); 
    }

    const onClickAbout = (e) => {
        e.preventDefault();
        const elementToView = document.getElementById("textWithHeader");
        setHamburgerClicked(false);
        elementToView.scrollIntoView({behavior:"smooth"}); 
    }

    const onClickServices = (e) => {
        e.preventDefault();
        const elementToView = document.getElementById("services");
        setHamburgerClicked(false);
        elementToView.scrollIntoView({behavior:"smooth"}); 
    }

    const onClickPrices = (e) => {
        e.preventDefault();
        const elementToView = document.getElementById("prices");
        setHamburgerClicked(false);
        elementToView.scrollIntoView({behavior:"smooth"}); 
    }

    const onClickContact = (e) => {
        e.preventDefault();
        const elementToView = document.getElementById("contact");
        setHamburgerClicked(false);
        elementToView.scrollIntoView({behavior:"smooth"}); 
    }

    const onClickHomeMob = (e) => {
        e.preventDefault();
        const elementToView = document.getElementById("home");
        setHamburgerClicked(false);
        elementToView.scrollIntoView({behavior:"smooth"}); 
    }

    const onClickAboutMob = (e) => {
        e.preventDefault();
        const elementToView = document.getElementById("textWithHeader");
        setHamburgerClicked(false);
        elementToView.scrollIntoView({behavior:"smooth"}); 
    }

    const onClickServicesMob = (e) => {
        e.preventDefault();
        const elementToView = document.getElementById("services");
        setHamburgerClicked(false);
        elementToView.scrollIntoView({behavior:"smooth"}); 
    }

    const onClickPricesMob = (e) => {
        e.preventDefault();
        const elementToView = document.getElementById("prices");
        setHamburgerClicked(false);
        elementToView.scrollIntoView({behavior:"smooth"}); 
    }

    const onClickContactMob = (e) => {
        e.preventDefault();
        const elementToView = document.getElementById("contact");
        setHamburgerClicked(false);
        elementToView.scrollIntoView({behavior:"smooth"}); 
    }

  return (
    <header>
        <nav>
            <div className="nav-container flex flex-jc-sb flex-ai-c">
                <div className='logo'>
                    <Link href='/'><a><Image src='/logo.png' height={80} width={150}/></a></Link>
                </div>
                {/* desktop navbar */}
                {hamburgerClicked === false && 
                    <div className='nav-links'>
                        <a onClick={onClickHome} className='link'>Home</a>
                        <a onClick={onClickAbout} className='link'>About</a>
                        <a onClick={onClickServices} className='link'>Services</a>
                        <a onClick={onClickPrices} className='link'>Quote</a>
                        <a onClick={onClickContact} className='link'>Contact</a>
                        <a className="link" href="tel:6513878909"><button className="call_btn">&#128222;(651) 387 8909</button></a>
                    </div>
                }
                {/* hamburger icon */}
                <div className="hamburger">
                        {hamburgerClicked === false && <div className="hamburger-menu"><BiMenuAltRight size='3.5em' color="#1b45ff" onClick={onHamburgerClicked}/></div>}
                </div>
                {/* hamburger menu */}
                <div className={hamburgerClicked === true ? 'hamburger-fullscreen' : 'disappear'}>
                    <div className="x-btn"><AiOutlineClose size='3.5em' color="#1b45ff" onClick={onHamburgerClicked}/></div>
                    <div className="hamburger-links flex flex-col">
                        <a onClick={onClickHomeMob} className='link'>Home</a>
                        <a onClick={onClickAboutMob} className='link'>About</a>
                        <a onClick={onClickServicesMob} className='link'>Services</a>
                        <a onClick={onClickPricesMob} className='link'>Quote</a>
                        <a onClick={onClickContactMob} className='link'>Contact</a>
                        <a href="tel:6513878909"><button className="call_btn">&#128222;(612) 387 8909</button></a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  );
}

// @refresh reset
