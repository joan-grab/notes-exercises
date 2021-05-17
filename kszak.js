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
