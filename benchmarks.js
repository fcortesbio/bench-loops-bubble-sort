// original implementation of bubbleSort using a for loop
/**
 * 
 */
function bubbleSortVanilla(arr) {
    let output = arr;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1] = arr[j + 1], arr[j]]
            }
        }
    }
    return output;
}


function bubbleSortRWhile(arr) {
    let output = arr
    let n = output.length;
    let i = n;
    while (i--) {
        let j = 0;
        while (j < i) {
            if (arr[j] > arr[j + 1]) {
                arr[j], arr[j + 1] = arr[j + 1], arr[j];
            }
            j++;
        }
    }

    return output
}

function benchmark(name, fn, iterations = 10) {
  const samples = [];
  const baseArray = Array.from({ length: 1000 }, (_, i) => 1000 - i); // descending from 1000 to 1

  for (let i = 0; i < iterations; i++) {
    const arr = [...baseArray]; // worst-case input
    const start = performance.now();
    fn(arr); // run the sort function
    const end = performance.now();
    samples.push(end - start);
  }

  const avg = samples.reduce((a, b) => a + b, 0) / iterations;
  console.log(`${name} average time: ${avg.toFixed(3)} ms`);
}

benchmark("Bubble Sort (for loop)", bubbleSortFor);
benchmark("Bubble Sort (reverse while loop)", bubbleSortReverseWhile);
