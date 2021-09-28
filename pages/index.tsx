import { Heading, Spacer } from '@1milligram/design';
import * as React from 'react';
import Link from 'next/link';

import { loadPosts } from '../models/loadPosts';
import type { Post } from '../models/Post';
import { Layout } from '../layouts/Layout';

const groupByCategory = (posts: Post[]) =>
    posts.reduce((acc, item) => ((acc[item.category] = [...(acc[item.category] || []), item]), acc), {});

const formatTitle = (title: string) => {
    const vsItems = title.split(' vs ');
    return vsItems.map((item, index) => (
        <React.Fragment key={index}>
            <span className="block-home__subject">{item}</span>
            {index < vsItems.length - 1 && <span className="block-home__vs">vs</span>}
        </React.Fragment>
    ));
};

const HomePage: React.FC<{
    posts: Post[];
}> = ({ posts }) => {
    const categories = groupByCategory(posts);

    return (
        <Layout title="What is the difference between ___ and ___ in the front-end development?">
            <div className="block-container">
                <div className="block-home__hero">
                    <Spacer size="extraLarge" />
                    <Heading level={1}>What is the difference</Heading>
                    <Heading level={4}>between ___ and ___ in the front-end development?</Heading>
                    <Spacer size="large" />
                </div>
                {Object.keys(categories).map((category) => (
                    <div key={category}>
                        <div className="block-home__category">
                            <Heading level={3}>{category}</Heading>
                        </div>
                        {categories[category].map((post: Post) => (
                            <Link href={`/${post.slug}`} key={post.slug}>
                                <a className="block-home__post">
                                    <h3 className="block-home__title">{formatTitle(post.title)}</h3>
                                </a>
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
            <Spacer size="large" />
        </Layout>
    );
};

export const getStaticProps = async () => {
    const posts = loadPosts();
    return {
        props: {
            posts,
        },
    };
};

export default HomePage;
