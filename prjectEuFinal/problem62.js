
const LENGTH = 10000;

const sort = (num) => num.toString().split('').sort().join('');

const sequence = () => [...Array(LENGTH).keys()];
const cubes = () => sequence().map(n => (n * n * n));
const CUBE_ARRAY = cubes();
const CUBE_STRINGS = cubes().map(n => sort(n));

const calc = () => {
    let found = 0;
    for(let i = 0; i < CUBE_STRINGS.length && found === 0; i++) {
        if(CUBE_STRINGS.reduce((count, next) => count += next === CUBE_STRINGS[i] ? 1 : 0, 0) >= 5) {
            found = CUBE_ARRAY[i];
        }
    }
    console.log(found)
};

calc();
