import React, { useState } from 'react';

enum Operator {
    Equality,
    Identity,
}

const EqualityTable: React.FC<{}> = () => {
    const [op, setOp] = useState(Operator.Equality);
    type MapType = { [name: string]: any };

    const cells: MapType = {
        'true': true,
        'false': false,
        '1': 1,
        '0': 0,
        '"true"': 'true',
        '"false"': 'false',
        '"1"': '1',
        '"0"': '0',
        '""' : "",
        'null': null,
        'undefined': undefined,
        'Infinity': Infinity,
        '-Infinity': -Infinity,
        '[]': [],
        '{}': {},
        '[1]': [1],
        '[0]': [0],
    };
    const keys = Object.keys(cells);
    const values = Object.values(cells);

    const isEqual = (a: any, b: any) => op === Operator.Equality ? a == b : a === b;

    return (
        <div>
            <div className='mb-4 flex items-center justify-center'>
                <button
                    className={`p-2 rounded mr-2 ${op === Operator.Equality ? 'bg-blue-600 text-white' : 'border border-gray-400'}`}
                    onClick={() => setOp(Operator.Equality)}
                >
                    Use ==
                </button>
                <button
                    className={`p-2 rounded mr-2 ${op === Operator.Identity ? 'bg-blue-600 text-white' : 'border border-gray-400'}`}
                    onClick={() => setOp(Operator.Identity)}
                >
                    Use ===
                </button>
            </div>

            <div className='flex items-center mb-2'>
                <div className='w-8 h-8 border border-gray-400 mr-1 bg-gray-400' />
                The result is true
            </div>
            <div className='flex items-center'>
                <div className='w-8 h-8 border border-gray-400 mr-1' />
                The result is false
            </div>

            <div className='flex'>
                <div className='text-right w-20 mr-2' />
                {
                    keys.map((key, i) => {
                        return (
                            <div key={i} className='w-8 mr-1 mb-1 flex items-center justify-end' style={{ writingMode: 'vertical-lr' }}>
                                <div>{key}</div>
                            </div>
                        );
                    })
                }
            </div>
            {
                keys.map((key, i) => {
                    return (
                        <div key={i} className='flex items-center mb-1'>
                            <div className='flex items-center justify-end w-20 mr-2'>{key}</div>
                            {
                                values.map((v2, j) => {
                                    const result = isEqual(cells[key], v2);
                                    return (
                                        <div
                                            key={j}
                                            className={`w-8 h-8 border border-gray-400 mr-1  ${result ? 'bg-gray-400' : ''}`}
                                        />
                                    );
                                })
                            }
                        </div>
                    );
                })
            }
        </div>
    );
};

export default EqualityTable;
