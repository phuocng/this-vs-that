import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Post from '../constants/Post';
import PostList from '../constants/PostList';
import Layout from './Layout';

import './home-page.css';

type Group = { [category: string]: Post[] };

const HomePage = () => {
    const groupByCategory = PostList.reduce((h, obj) => Object.assign(h, { [obj.category]: (h[obj.category] || []).concat(obj) }), {} as Group);

    return (
        <Layout>
            <Helmet>
                <title>this vs that - What is the difference between ___ and ___ in the front-end development?</title>
                <meta name='description' content='What is the difference between ___ and ___ in the front-end development?' />
            </Helmet>

            <h2 className='font-semibold mt-32 text-center text-2xl sm:text-4xl px-1'>
                What is the <span className='sm:text-6xl' style={{ color: '#6C5CE7' }}>difference</span> between
            </h2>
            <h2 className='text-2xl sm:text-4xl mb-40 font-bold mb-12 text-center'>
                <span className='sm:text-6xl' style={{ color: '#6C5CE7' }}>this</span> & <span className='sm:text-6xl' style={{ color: '#6C5CE7' }}>that?</span>
            </h2>

            <div className='ml-auto mr-auto'>
            {
                Object.keys(groupByCategory).sort().map(category => {
                    return (
                        <div key={category} className='mb-16'>
                            <div className='mb-8 text-center'>
                                <div className='inline px-4 relative text-5xl font-bold'>
                                    <div
                                        className='absolute bottom-0 h-6 left-0 w-full'
                                        style={{
                                            backgroundColor: '#FFEAA7',
                                            borderRadius: '48% 16% 64% 16%',
                                            transform: 'rotate(-4deg)',
                                            zIndex: -1,
                                        }}
                                    />
                                    {category}
                                </div>
                            </div>
                            <div className='flex flex-wrap -ml-1 -mr-1'>
                            {
                                groupByCategory[category].map(post => {
                                    return (
                                        <div
                                            key={post.slug}
                                            className='group w-1/2 sm:w-1/3 px-3 mb-6 h-20 text-center'
                                        >
                                            <Link
                                                to={`/${post.slug}`}
                                                className='post-link h-full relative flex flex-col justify-center items-center p-3'
                                            >
                                                <div
                                                    className='absolute bg-white h-full left-0 top-0 w-full border-2 shadow-xl duration-100 ease-in group-hover:border-yellow-400 group-hover:shadow-2xl'
                                                    style={{
                                                        transform: 'skewY(-4deg)',
                                                        zIndex: -1,
                                                    }}
                                                />
                                                <h2>{post.title}</h2>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </Layout>
    );
};

export default HomePage;
