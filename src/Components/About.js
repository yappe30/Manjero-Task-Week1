import React from 'react';
import Hoc from './Hoc';
import UseStateHook from './UseStateHook';

const about = () => {
    return (
        <div>
            <UseStateHook />
        </div>
    );
};

export default Hoc(about);