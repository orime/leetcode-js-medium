const arranges = (wordsGroup) => {
  // * 构建树
  const root = {};
  for (let i = 0; i < wordsGroup.length; i++) {
    const curGroup = wordsGroup[i];
    root[i] = gen(curGroup);
  }
  function gen (list) {
    const obj = {};
    for (let i = 0; i < list.length; i++) {
      obj[i] = {text: list[i]};
    }
    return obj;
  }
  console.log(root, 'root')
}

const wordsGroup = [
  ['三方中心计算', '己方计算'],
  ['成长值模式', '消费模式'],
  ['未获得等级', '已获得等级未满级', '满级'],
]
const res = arranges(wordsGroup)
console.log(res)
