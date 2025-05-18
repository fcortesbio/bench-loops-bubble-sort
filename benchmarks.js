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

/**
 * Bubble sort implementation using for loops
 * - Outer loop runs n-1 times
 * - Inner loop runs up to n-i-1 times
 * - Uses proper array destructuring for swapping
 */
function bubbleSortFor(arr) {
    const output = [...arr]; // Create a copy to avoid modifying the input
    const n = output.length;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (output[j] > output[j + 1]) {
                // Proper destructuring assignment for swapping
                [output[j], output[j + 1]] = [output[j + 1], output[j]];
            }
        }
    }
    
    return output;
}

function bubbleSortRWhile(arr) {
    let output = [...arr]; // Create a copy to avoid modifying the input
    let n = output.length;
    let i = n;
    while (i--) {
        let j = 0;
        while (j < i) {
            if (output[j] > output[j + 1]) {
                // Proper destructuring assignment for swapping
                [output[j], output[j + 1]] = [output[j + 1], output[j]];
            }
            j++;
        }
    }

    return output;
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
benchmark("Bubble Sort (reverse while loop)", bubbleSortRWhile);
