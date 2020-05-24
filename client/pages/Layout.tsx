import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Footer from './Footer';

const Layout: React.FC<{}> = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className='flex-1 px-2 lg:px-0 relative'>
                <div
                    className='absolute top-0 left-0 right-0 bottom-0'
                    style={{
                        backgroundColor: '#00B894',
                        height: '32rem',
                        transform: 'skewY(-4deg)',
                        transformOrigin: 'top left',
                        zIndex: -1,
                    }}
                />
                <div className="ml-auto mr-auto max-w-3xl">
                    <div className='flex items-center justify-between py-4'>
                        <Link to='/' className='flex items-center'>
                            <div className='font-semibold text-2xl'>this</div>
                            <div className='mx-1 h-8 inline-flex items-center justify-center rounded-full text-white w-8' style={{ backgroundColor: '#6C5CE7' }}>vs</div>
                            <div className='font-semibold text-2xl'>that</div>
                        </Link>
                    </div>
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
