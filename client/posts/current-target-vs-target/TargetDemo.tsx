import React, { useRef } from 'react';

const TargetDemo: React.FC<{}> = () => {
    const currentTargetRef = useRef<HTMLDivElement | null>(null);
    const targetRef = useRef<HTMLDivElement | null>(null);

    const handleClick = (e: React.MouseEvent) => {
        const currentTargetEle = currentTargetRef.current;
        const targetEle = targetRef.current;

        if (!currentTargetEle || !targetEle) {
            return;
        }
        currentTargetEle.innerHTML = e.currentTarget.getAttribute('data-id');
        targetEle.innerHTML = (e.target as HTMLElement).getAttribute('data-id');
    };

    return (
        <div className='my-8'>
            <div className='italic'>
                currentTarget: <span ref={currentTargetRef}></span>
            </div>
            <div className='mb-4 italic'>
                target: <span ref={targetRef}></span>
            </div>
            <div data-id='outer' onClick={handleClick} className='border border-gray-400 cursor-pointer p-8 w-64 text-center'>
                Outer
                <div data-id='inner' className='border border-gray-400 mt-8 w-full h-48 bg-gray-100 flex items-center justify-center'>
                    Inner
                </div>
            </div>
        </div>
    );
};

export default TargetDemo;
