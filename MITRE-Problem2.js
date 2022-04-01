input = [0.0, 1.5, 4.0, 6.7, 2.8];

// Row 1
let row1 = [];
for (let i = 0; i < input.length; i++){
  if (i != 0) {
    row1.push(input[i])
  }
}
console.log(row1)

// Row 2
let row2 = [];
for (let i = 0; i < input.length; i++){
  if (i == 1) {
    continue
  } else {
    row2.push(input[i])
  }
}
console.log(row2)

// Row 3
let row3 = [];
for (let i = 0; i < input.length; i++){
  if (i == 2) {
     continue
  } else {
    row3.push(input[i])
  }
}
console.log(row3)

// Row 4
let row4 = [];
for (let i = 0; i < input.length; i++){
  if (i == 3) {
    continue
  } else {
    row4.push(input[i])
  }
}
console.log(row4)

// Row 5
let row5 = [];
for (let i = 0; i < input.length; i++){
  if (i != 0) {
    row5.push(input[i-1])
  }
}
console.log(row5)

/* Output = [[1.5 4.0 6.7 2.8] -0
            [0.0 4.0 6.7 2.8] -1
            [0.0 1.5 6.7 2.8] -2
            [0.0 1.5 4.0 2.8] -3
            [0.0 1.5 4.0 6.7]] -4 */