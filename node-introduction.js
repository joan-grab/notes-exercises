// include libraries 

const http = require('http');

// in ECMAcript .mjs or import just a function we use: createServer

import http from 'http';

// create server (request, response) - listner function 

const server = http.createServer((req, res) => {
  res.end('Hello World...\n');
});


//activate server (OS port used for the server(localhost:4242), function executed if server is running) -> this app will be constantly running, it will not exit itself (in other cases, where command is executed once node will exit app imidietly after executing)

server.listen(4242, () => {
  console.log('Server is running...');
});

// setTimeOut
// delay function (func, delay in miliseconds)

setTimeout(
  () => {
    console.log('Hello after 4 seconds');
  },
  4 * 1000
);

// the same func in func

const func = () => {
  console.log('Hello after 4 seconds');
};

setTimeout(func, 4 * 1000);


// For: func(arg1, arg2, arg3, ...)
// We can use: setTimeout(func, delay, arg1, arg2, arg3, ...)

const rocks = who => {
  console.log(who + ' rocks');
};

setTimeout(rocks, 2 * 1000, 'Pluralsight');

// setInterval
// interval function - will continue execute forever until you kill it

setInterval(
  () => console.log('Hello every 3 seconds'),
  3000
);

// clear
// setTimeout returns time id which could be canceled with clearTimeout

const timerId = setTimeout(
  () => console.log('You will not see this one!'),
  0
);

clearTimeout(timerId);
//clearInterval
//clearImmediate -> for setImmediate

// consol command:
// VAL1=10 VAL2=20 node 1-custom-env-variables.js 

// or consol command:
// export VAL1=10
// export VAL2=20
// node file.js

// or 
// process.argv: [...]
// array that contains all arguments

// process - comunicate with system 

console.log('Current user is', process.env.USER);

console.log('\nScript executed with:');

console.log('VAL1 equal to:', process.env.VAL1);
console.log('VAL2 equal to:', process.env.VAL2);

// output:
// Current user is asia

// Script executed with:
// VAL1 equal to: 10
// VAL2 equal to: 20

process.stderr
process.stdin
process.stdout

process.stdout.write('hello\n'); === console.log('hello');


// input echoes output

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(chunk);
  }
});

// or
// === process.stdin.pipe(process.stdout);


setTimeout(() => process.exit(), 2000);

process.on('exit', () => {
  console.log('Process will exit now. See you later!');
});

console.log('Hello!');

