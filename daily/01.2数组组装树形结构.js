const { lookup } = require("dns");
const fs = require("fs");
const path = require("path");

const list = [
  {
    id: 1001,
    parentId: 0,
    name: "AA",
  },
  {
    id: 1002,
    parentId: 1001,
    name: "BB",
  },
  {
    id: 1003,
    parentId: 1001,
    name: "CC",
  },
  {
    id: 1004,
    parentId: 1003,
    name: "DD",
  },
  {
    id: 1005,
    parentId: 1003,
    name: "EE",
  },
  {
    id: 1006,
    parentId: 1002,
    name: "FF",
  },
  {
    id: 1007,
    parentId: 1002,
    name: "GG",
  },
  {
    id: 1008,
    parentId: 1004,
    name: "HH",
  },
  {
    id: 1009,
    parentId: 1005,
    name: "II",
  },
];

function listToTreeSimple(data) {
  const res = [];
  data.forEach((item) => {
    const parent = data.find((node) => node.id === item.parentId);
    if (parent) {
      parent.children = parent.children || [];
      parent.children.push(item);
    } else {
      // * 根节点
      res.push(item);
    }
  });
  return res;
}

/**
 *
 * @param {Array} data
 */
function listToTree(data) {
  // * 先生成parent建立父子关系
  const obj = {};
  data.forEach((item) => {
    obj[item.id] = item;
  });
  // * obj -> {1001: {id: 1001, parentId: 0, name: 'AA'}, 1002: {...}}
  // console.log(obj, "obj")
  const parentList = [];
  data.forEach((item) => {
    const parent = obj[item.parentId];
    if (parent) {
      // * 当前项有父节点
      parent.children = parent.children || [];
      parent.children.push(item);
    } else {
      // * 当前项没有父节点 -> 顶层
      parentList.push(item);
    }
  });
  return parentList;
}

function recursiveToTree(data) {
  function loop(key) {
    const arr = [];
    data.forEach((item) => {
      if (item.parentId === key) {
        item.children = loop(item.id);
        arr.push(item);
      }
    });
    return res;
  }
  return loop(1);
}

console.time("原始方法");
const resSimple = listToTreeSimple(JSON.parse(JSON.stringify(list)));
console.timeEnd("原始方法");

console.time("优化方法");
const res = listToTree(JSON.parse(JSON.stringify(list)));
console.timeEnd("优化方法");

console.time("递归方法");
const recursiveRes = recursiveToTree(JSON.parse(JSON.stringify(list)));
console.timeEnd("递归方法");

fs.writeFile(
  path.resolve(__dirname, "01.树结构.json"),
  JSON.stringify(res),
  (err) => {
    console.log(err);
  }
);

fs.writeFile(
  path.resolve(__dirname, "01.树结构Simple.json"),
  JSON.stringify(resSimple),
  (err) => {
    console.log(err);
  }
);

fs.writeFile(
  path.resolve(__dirname, "01.树结构递归.json"),
  JSON.stringify(recursiveRes),
  (err) => {
    console.log(err);
  }
);
