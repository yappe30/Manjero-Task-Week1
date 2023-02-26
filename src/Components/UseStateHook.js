import React, { useState } from 'react';

const useStateHook = () => {
    
    const [firstName, setFirtName] = useState('elena');
    const [age, setAge] = useState(20);
    const [person, setPerson] = useState({
        name: 'alex',
        designation: 'IT'
    });

    // const [arr, setArr] = useState([90,90,90,90]);

    const [empData, setEmpData] = useState([{
        id: 1,
        name: 'alex',
        designation: 'IT'
    },{
        id: 2,
        name: 'ben',
        designation: 'developer'
    },{
        id: 3,
        name: 'anna',
        designation: 'manager'
    }]);

    const handleClick = () => {
        let empCopy = [...empData];
        empCopy[1].designation = 'manager';
        setEmpData(empCopy)
    }

    return (
        <div>
            <div>{empData.map((item) =>{
                return <p key={item.id}>{item.name} {item.designation}</p>
            })}</div>
            
            <p>{firstName}</p>
            <p>{age}</p>
            <p>{person.name}</p>
            <p>{person.designation}</p>
            <p>
                Update Age
            <button onClick={() =>{setAge(30)}}>Update</button>
            </p>
            {/* update single value hook */}
            <p>
                update single value
                <button onClick={() =>{ setFirtName('ben')}}>Update</button>
            </p>
            
            {/* update 2 property in an object */}
            <p>
                update 2 property in an single array of object
            
            <button onClick={() => {
                setPerson({
                    name: 'ben',
                    designation: 'developer'
            })
            }}>Update</button>
            </p>
            <p>
                update property in multiple array of object
            </p>
            <button onClick={handleClick}>update</button>

        </div>
    );
};

export default useStateHook;