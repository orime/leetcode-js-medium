function parse_url(_url) {
  //定义函数
  var parames = {}; //定义数组
  url.replace(/(\w+)=(\w+)/gi, function (a, b, c) {
    console.log(b, c, "b&c", a);
    parames[b] = c;
  });
  return parames; //返回这个数组.
}

var url = "http://www.baidu.com?name=elephant&age=25&sex=male";
var params = parse_url(url); // ["name=elephant", "age=25", "sex=male"]

console.log(params);
