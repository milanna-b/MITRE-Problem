input = [0.0, 1.5, 4.0, 6.7, 2.8];

console.log("=== ROW 1 ===")
// Row 1
for (let i = 0; i < input.length; i++){
  if (i != 0) {
    console.log(input[i]);
  }
}
console.log("=== ROW 2 ===")

// Row 2
for (let i = 0; i < input.length; i++){
  if (i == 1) {
    continue
  } else {
    console.log(input[i]);
  }
}
console.log("=== ROW 3 ===")

// Row 3
for (let i = 0; i < input.length; i++){
  if (i == 2) {
     continue
  } else {
    console.log(input[i]);
  }
}
console.log("=== ROW 4 ===")

// Row 4
for (let i = 0; i < input.length; i++){
  if (i == 3) {
    continue
  } else {
    console.log(input[i]);
  }
}
console.log("=== ROW 5 ===")

// Row 5
for (let i = 0; i < input.length; i++){
  if (i != 0) {
    console.log(input[i-1]);
  }
}

/* Output = [[1.5 4.0 6.7 2.8] -0
            [0.0 4.0 6.7 2.8] -1
            [0.0 1.5 6.7 2.8] -2
            [0.0 1.5 4.0 2.8] -3
            [0.0 1.5 4.0 6.7]] -4 */