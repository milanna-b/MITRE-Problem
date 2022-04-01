input = [0.0, 1.5, 4.0, 6.7, 2.8];

let row1 = [];
for (let i = 0; i < input.length; i++) {
  if (i == 1) {
    break
  }
  for (let j = 0; j < input.length; j++) {
    input.splice(j, 1)
    console.log(input)
    input = [0.0, 1.5, 4.0, 6.7, 2.8];
    }
  }