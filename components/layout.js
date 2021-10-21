import React from 'react'
import Hero from './hero';
import Cards from './section2/cards';
import Selling from './section3/selling';
import Customer from './section4/customer';
import Tagline from './section3/tagline';
import { Header } from './header';

function Layout() {
    return (
        <div className="overflow-x-hidden overflow-hidden">
        <Header/>
        <Hero/>
        <Cards/>
        <Selling/>
        <Tagline/>

        <Customer/>
            
        </div>
    )
}

export default Layout;
