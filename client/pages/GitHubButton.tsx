import React, { useEffect, useState } from 'react';

const GitHubButton = () => {
    const [totalStars, setTotalStars] = useState(0);

    useEffect(() => {
        fetch('https://api.github.com/repos/phuoc-ng/this-vs-that')
            .then(res => res.json())
            .then(data => setTotalStars(data.stargazers_count))
            .catch(console.log);
    });

    return (
        <a
            className="text-2xl text-white px-4 rounded-full"
            href="https://github.com/phuoc-ng/this-vs-that"
            rel="noopener noreferrer"
            target="_blank"
            style={{
                backgroundColor: '#6C5CE7',
            }}
        >
            GitHub ★ {totalStars}
        </a>
    );
};

export default GitHubButton;
