import { Helmet } from 'react-helmet';
import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import PostList from '../constants/PostList';
import Layout from './Layout';

interface PostLayoutProps {
    slug: string;
}

const PostLayout: React.FC<PostLayoutProps> = ({ children, slug }) => {
    const history = useHistory();

    const numTasks = PostList.length;
    const post = PostList.find(post => post.slug === slug);
    const index = PostList.indexOf(post);
    const title = post.title;

    const previousPage = PostList[index - 1];
    const nextPage     = PostList[index + 1];
    const isPreviousPageExist = index > 0;
    const isNextPageExist     = index < numTasks - 1;

    useEffect(() => {
        function onKeyDown(e: KeyboardEvent) {
            if (e.key === 'ArrowLeft') {
                isPreviousPageExist && history.push(`/${previousPage.slug}`);
            } else if (e.key === 'ArrowRight') {
                isNextPageExist && history.push(`/${nextPage.slug}`);
            }
        }

        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [slug]);

    return (
        <Layout>
            <Helmet>
                <title>this vs that - {title}</title>
                <meta name='description' content={title} />
            </Helmet>

            <h1 className='font-semibold mt-24 mb-4 text-center text-3xl lg:text-5xl px-1'>{title}</h1>

            <div className="mb-32 text-center">
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

            <div className='mb-16 px-4 py-12 relative'>
                <div
                    className='absolute bg-white h-full left-0 top-0 w-full shadow-2xl'
                    style={{
                        transform: 'skewY(-4deg)',
                        zIndex: -1,
                    }}
                />
                {children}
            </div>

            {isPreviousPageExist && (
                <div className='mt-10 mb-4'>
                    <Link
                        className='text-xl sm:text-2xl text-white rounded-full px-4 py-2'
                        to={`/${previousPage.slug}`}
                        title={previousPage.title}
                        style={{
                            backgroundColor: '#6C5CE7',
                        }}
                    >
                        ← {previousPage.title}
                    </Link>
                </div>
            )}

            {isNextPageExist && (
                <div className='mb-4 text-right'>
                    <Link
                        className='text-xl sm:text-2xl text-white rounded-full px-4 py-2'
                        to={`/${nextPage.slug}`}
                        title={nextPage.title}
                        style={{
                            backgroundColor: '#6C5CE7',
                        }}
                    >
                        {nextPage.title} →
                    </Link>
                </div>
            )}
        </Layout>
    );
};

export default PostLayout;
