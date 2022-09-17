import React from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import How from './components/How';
import Knowledge from './components/Knowledge';
import Sector from './components/Sector';

function App() {
    return (
        <>
            <Hero />
            <Sector />
            <div className='my-[4.6rem]'>
                <How />
            </div>
            <Knowledge />
            <Footer />
        </>
    );
}

export default App;
