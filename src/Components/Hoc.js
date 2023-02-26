import React from 'react';

const Hoc = (Prospect) => {
    //console.log(Prospect);
    const color = ['yello', 'blue', 'red', 'black', 'yellow'];
    const randomColor = color[Math.floor(Math.random() * color.length)];
    console.log(randomColor);
    return (props) => {
        return (
            <div style={{color: randomColor}}>
                <Prospect />
            </div>
        );
    }

};

export default Hoc;