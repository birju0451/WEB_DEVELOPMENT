// 1. for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 2. while loop
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

// 3. do-while loop
let j = 1;

do {
  console.log(j);
  j++;
} while (j <= 5);

// 4. for...of loop
let arr = [10, 20, 30];

for (let value of arr) {
  console.log(value);
}

// 5. for...in loop
let student = {
  name: "Birju",
  age: 21,
};

for (let key in student) {
  console.log(key, student[key]);
}

// 6. break
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

// 7. continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

// 8. Nested loop
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(i, j);
  }
}
