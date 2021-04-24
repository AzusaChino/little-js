/*Chains asynchronous functions.

Loop through an array of functions containing asynchronous events, calling next when each asynchronous event has completed.*/

const chainAsync = fns => {
    let cursive = 0
    const last = fns[fns.length - 1]
    const next = () => {
        const fn = fns[cursive++]
        fn === last ? fn() : fn(next)
    }
    next()
}

chainAsync([
    next => {
        console.log('0 seconds');
        setTimeout(next, 1000);
    },
    next => {
        console.log('1 second');
        setTimeout(next, 1000);
    },
    () => {
        console.log('2 second');
    }
]);
