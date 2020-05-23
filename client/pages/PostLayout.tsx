import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import PostList from '../constants/PostList';
import { slugify, unslugify } from '../helpers/slugify';
import Layout from './Layout';

interface PostLayoutProps {
    slug: string;
}

const PostLayout: React.FC<PostLayoutProps> = ({ children, slug }) => {
    const numTasks = PostList.length;
    const index = PostList.findIndex((post) => post.slug === slug);
    const title = unslugify(slug);

    return (
        <Layout>
            <Helmet>
                <title>this vs that - {title}</title>
                <meta name='description' content={title} />
            </Helmet>

            <h1 className='font-semibold mt-24 mb-4 text-center text-3xl lg:text-5xl px-1'>{title}</h1>

            <div className="mb-16 text-center">
                <a
                    className="text-2xl bg-gray-400 px-4 py-2 text-white rounded-full"
                    href={`https://github.com/phuoc-ng/this-vs-that/blob/master/client/posts/${slug}/index.tsx`}
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{
                        backgroundColor: '#6C5CE7',
                    }}
                >
                    Edit this page
                </a>
            </div>

            <div className='mb-4'>
                {children}
            </div>
            {index > 0 && (
                <div className='mb-2'>
                    <Link
                        className='text-xl sm:text-2xl'
                        to={`/${slugify(PostList[index - 1].slug)}`}
                        title={unslugify(PostList[index - 1].slug)}
                    >
                        ← {unslugify(PostList[index - 1].slug)}
                    </Link>
                </div>
            )}
            {index < numTasks - 1 && (
                <div className='mb-2 text-right'>
                    <Link
                        className='text-xl sm:text-2xl'
                        to={`/${slugify(PostList[index + 1].slug)}`}
                        title={unslugify(PostList[index + 1].slug)}
                    >
                        {unslugify(PostList[index + 1].slug)} →
                    </Link>
                </div>
            )}
        </Layout>
    );
};

export default PostLayout;
