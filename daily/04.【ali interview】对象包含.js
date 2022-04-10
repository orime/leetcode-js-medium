function checkIsChildObject(a, b) {
  let flag = true;
  for (const key in a) {
    const aValue = a[key];
    if (key in b) {
      if (
        typeof aValue === "object" &&
        a !== null &&
        typeof b[key] === "object" &&
        b[key] !== null
      ) {
        flag = checkIsChildObject(aValue, b[key]);
      } else {
        flag = aValue === b[key];
      }
    } else {
      flag = false;
      break;
    }
  }

  if (flag === false) {
    for (const key in b) {
      if (typeof b[key] === "object" && b[key] !== null) {
        flag = checkIsChildObject(a, b[key]);
      }
    }
  }

  return flag;
}
const obj = {
  a: 0,
  c: "",
  d: true,
  e: {
    f: 1,
    e: {
      e: 0,
      f: 2,
    },
  },
};

console.log(checkIsChildObject({ a: 0 }, obj)); // true
console.log(checkIsChildObject({ e: 0 }, obj)); // true
console.log(checkIsChildObject({ a: 0, c: "" }, obj)); // true
console.log(checkIsChildObject({ a: 0, e: 0 }, obj)); // false
console.log(checkIsChildObject({ e: { f: 1 } }, obj)); // true
console.log(checkIsChildObject({ e: { f: 2 } }, obj)); // true
console.log(checkIsChildObject({ e: { e: 0, f: 2 } }, obj)); // true
console.log(checkIsChildObject({ e: { f: 2, e: 0 } }, obj)); // true
