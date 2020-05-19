import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Footer from './Footer';

const Layout: React.FC<{}> = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className='flex-1 px-2 lg:px-0'>
                <div className="ml-auto mr-auto max-w-3xl mb-8">
                    <div className='flex items-center justify-between py-8'>
                        <Link to='/' className='p-1 text-2xl sm:text-3xl font-light'>
                            this <span>vs</span> that
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
