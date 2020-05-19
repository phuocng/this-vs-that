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

            <h2 className='font-bold mt-32 text-center text-2xl sm:text-4xl px-1'>What is the difference between</h2>
            <h2 className='font-light mb-12 text-2xl sm:text-4xl text-center'>
                <span className='border-b-4 border-black pb-1 px-8'>this</span> <span>&</span> <span className='border-b-4 border-black pb-1 px-8'>that</span>
            </h2>

            <div className="mb-12 text-center">
                <a
                    className="text-2xl bg-gray-400 px-4 py-2"
                    href="https://github.com/phuoc-ng/this-vs-that"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    GitHub
                </a>
            </div>

            <div className='ml-auto mr-auto max-w-4xl'>
                <ul>
                {
                    PostList.map((post) => {
                        return (
                            <li key={post.slug}>
                                <Link
                                    to={`/${post.slug}`}
                                    className='flex items-baseline text-2xl'
                                >
                                    <div className='border-b border-dashed border-gray-400 flex-1' />
                                    <div>{unslugify(post.slug)}</div>
                                    <div className='border-b border-dashed border-gray-400 flex-1' />
                                </Link>
                            </li>
                        );
                    })
                }
                </ul>
            </div>
        </Layout>
    );
};

export default HomePage;
