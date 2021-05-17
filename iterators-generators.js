// iterator logic

function myIterator(start, finish) {
    let index = start;
    let count = 0;

    return {
        next() {
            let result;
            if (index < finish) {
                result = {value: index, done: false};
                index++;
                count++;
                return result;
            }
            return {value: count, done: true}
        }
    }
}

const it = myIterator(0, 10);
let res = it.next();
while(!res.done) {
    console.log(res.value);
    res = it.next(); 
}

// generators 

function *timestampGenerator() {

    let ts = Date.now();
    console.log(`Original time: ${ts}`);

    yield ts; // send ts values as it.next()

    console.log('second block');

    let additionalTime = yield; // we take a value of next(parameter)
    console.log(`Additional time: ${additionalTime}`);

    if (additionalTime) {
        ts = ts + additionalTime;
    };
    console.log(`Updated time: ${ts}`);

    
}

const it = timestampGenerator();
console.log('pause');
const originalTimestamp = it.next();
console.log(originalTimestamp);
it.next();
console.log('pause');
it.next(6000);
console.log('pause');

// constantly running generator

function* randomNum() {
    while(true){
        yield Math.floor(Math.random() * 100);
    }
}

const it = randomNum();
function getRandomNum() {
    return it.next().value;
}

console.log(getRandomNum());

// yield delegation

function* gen1() {
    yield 1;
    yield 2;
    return 4;
}

function* gen2() {
    const val = yield* gen1();
    yield 3;
    yield val;
}

const it = gen2();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
// output 1, 2, 3, 4 (all objects)


function gen1() {
    return ['one', 'two', 'three'];
}

function* gen2() {
    const val = yield* gen1();

}

const it = gen2();
console.log(it.next());
console.log(it.next());
console.log(it.next());
// output one two three in seperate objects

