import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import PostList from '../constants/PostList';
import { unslugify } from '../helpers/slugify';
import Layout from './Layout';

const HomePage = () => {
    return (
        <Layout>
            <Helmet>
                <title>this vs that - What is the difference between ___ and ___ in the front-end development?</title>
                <meta name='description' content='What is the difference between ___ and ___ in the front-end development?' />
            </Helmet>

            <h2 className='font-semibold mt-32 text-center text-2xl sm:text-5xl px-1'>
                What is the <span style={{ color: '#FFEAA7' }}>difference</span> between
            </h2>
            <h2 className='font-light mb-12 text-2xl sm:text-4xl text-center'>
                <span className='border-b-4 border-black pb-1 px-8'>this</span> <span>&</span> <span className='border-b-4 border-black pb-1 px-8'>that</span>
            </h2>

            <div className="mb-40 text-center">
                <a
                    className="text-2xl text-white px-4 py-2 rounded-full"
                    href="https://github.com/phuoc-ng/this-vs-that"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{
                        backgroundColor: '#6C5CE7',
                    }}
                >
                    GitHub
                </a>
            </div>

            <div className='ml-auto mr-auto max-w-4xl'>
                <div className='flex flex-wrap -ml-1 -mr-1'>
                {
                    PostList.map((post) => {
                        return (
                            <div
                                key={post.slug}
                                className='w-1/2 sm:w-1/3 px-1 mb-6 text-center'
                            >
                                <Link
                                    to={`/${post.slug}`}
                                    className='text-2xl relative flex'
                                >
                                    <div
                                        className='absolute h-full left-0 top-0 w-full'
                                        style={{
                                            boxShadow: 'rgba(38, 50, 56, 0.08) 0px 1rem 2rem, rgba(38, 50, 56, 0.1) 0px 0.5rem 1.5rem',
                                            transform: 'skewY(-4deg)',
                                        }}
                                    />
                                    <div className='p-3'>
                                        {post.title}
                                    </div>
                                </Link>
                            </div>
                        );
                    })
                }
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;
