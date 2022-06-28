// BigO: 0(n)
function logItems(n) {
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
}
logItems(10);

// BigO: drop constants O(2n) = n + n = 2n = O(n)
function logItems(n) {
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
    for (let j = 0; j < n; j++) {
        console.log(j)
    }
}
logItems(3);


// BigO O(n^2) = n * n = n^2 
function logItems(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}
logItems(10);


// BigO O(n^2 + n) = n * n + n simplified = O(n^2)

function logItems(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
    for (let k = 0; k < n; k++) {
        console.log(k);
    }
}
logItems(10);


// BigO: O(1)

function addItems(n) {
    return n + n;
}

