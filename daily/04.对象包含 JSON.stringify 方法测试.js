function replacer(key, value) {
  if (typeof value === "string") {
    return "this is a string " + value;
  }
  return value;
}

var foo = {
  foundation: "Mozilla",
  model: "box",
  week: 45,
  transport: "car",
  month: 7,
};
var jsonString = JSON.stringify(foo, replacer, 2);

console.log("jsonString: ", jsonString);
