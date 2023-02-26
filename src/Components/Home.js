import React from 'react';
import _ from 'lodash';
const arrOne = [{
    id: 20,
    name: 'alex'
 
}, {
    id: 30,
    name: 'alina'
}]
 
const arrTwo = [{
    id: 40,
    name: 'hello'
}, {
    id: 30,
    name: 'world'
}]
console.log(_.xorBy(arrOne, arrTwo, 'id' ));
const arrOneRev = _.filter(arrOne, _.matches({id:30}));
const arrTwoRev = _.filter(arrTwo, _.matches({id:30}));
console.log(_.concat(arrOneRev, arrTwoRev));

const str = ['u', 'ec']
const arr = [{
    storageVal: 'u',
     table: ['E', 'F']
},{
    storageVal: 'data',
     table: ['E', 'F']
}, {
    storageVal: 'ec',
    table: ['E']
}]
const uValue = _.get(_.filter(arr, {storageVal: str[0]}), ['0','table'], '');
const ecValue = _.get(_.filter(arr, {storageVal: str[1]}), ['0','table'], '');
// get first table value that storageVal is equal to u
console.log(_.split(uValue, ','));
// get first table value that storageVal is equal to u
console.log(ecValue)

const a = [['E'], ['F']];
console.log(_.flatten(a));


const t = ['E', 'F'];
const y = [['F'], ['G']];
const flattenY = _.flatten(y);


console.log(_.split(_.get(t, '[0]', '') +' '+ _.get(flattenY, '[0]', '')+' '+ _.get(flattenY, '[1]', ''), ' '));

var data = [
    {
      "name": "Sam",
      "destination": "Manager"
    },
    {
      "name": "Jhon",
      "destination": "Admin Manager"
    },
    {
      "name": "Ketty",
      "destination": "Project Manager"
    },
    {
      "name": "Admin",
      "destination": "Project Manager"
    }
  ];
  
  
  
  function searchByTextInput(data, text, exclude) {
    return _.filter(data, _.flow(
      _.partial(_.omit, _, exclude),
      _.partial(
        _.some, _,
        _.flow(_.toLower, _.partial(_.includes, _, _.toLower(text), 0))
      )
    ));
  }
  
  console.log(searchByTextInput(data, 'manager'));
  console.log(searchByTextInput(data, 'Admin', ['destination']));

const Home = () => {
    
    return (
       <>
           <h3>Lodash</h3>
           <p>All Result is on console log thank you</p>
       </>
    );
};

export default Home;