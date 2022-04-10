const str = '{"e":{"f":1}}';

str.replace(/^(\{+)(.*?)(\}+)$/g, function (matcher, $1, $2) {
  console.log($2);
  return $2;
});

// * 横向模糊测试
const str1 = "aabbbss aab aaaab abbbb";
console.log(str1.match(/a{1,5}b/));
/**
[
  'aab',
  index: 0,
  input: 'aabbbss aab aaaab abbbb',
  groups: undefined
] */

console.log(str1.match(/a{1,6}b/g)); // * [ 'aab', 'aab', 'aaaab', 'ab' ] 加了 g 之后表示匹配全部，没有第一项的具体信息

// * 纵向匹配测试
const str2 = "a0b a1b a2b a3b";
console.log(str2.match(/a[0-3]b/g)); // * [ 'a0b', 'a1b', 'a2b', 'a3b' ]

// * 分组提取
const str3 = "2022-02-17";
// console.log(str3.match(/(\d{4})-(\d{2})-(\d{2})/)); // * [完整匹配结果，第一组，第二组，第三组，..., 开始匹配 index，input，groups]
const regx = /(\d{4})-(\d{2})-(\d{2})/;
regx.exec(str3);

console.log(RegExp.$1); // * 2022
console.log(RegExp.$2); // * 02
console.log(RegExp.$3); // * 17
console.log(RegExp.$4); // * undefined
console.log(RegExp.$2); // * 02

// * 直接取用 $ 值
const str4 = str3.replace(/(\d{4})-(\d{2})-(\d{2})/, "$2/$3/$1"); // * 02/17/2022
console.log("str4: ", str4);

// * 取消括号分组 ?: 在括号中标识失去分组功能
const str5 = "ababa1 ab abab aaabb";
const reg5 = /(?:ab)+/g;

console.log(str5.match(reg5));
console.log(RegExp.$1, RegExp.$2);

// * 分组引用匹配成对标签
const str6 = "<script>const a = 12; function c(){ a = 20; }</script>";
const reg6 = /<([^>]+)>[\d\D]*<\/\1>/;

console.log(reg6.test(str6));

// * 贪婪量词
const str7 = "12345";
const reg7 = /\d{1,3}/;

console.log(str7.match(reg7));
