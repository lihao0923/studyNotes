/*
* 函数的功能是让tokens数组变为dom字符串
* */
import lookup from "./lookup";
import parseArray from "./parseArray";

export default function renderTemplate(tokens, data) {
  // 结果字符串
  var resultStr = '';
  // 遍历tokens
  for(var i = 0; i < tokens.length; i++) {
    var token = tokens[i];
    // 看类型
    if(token[0] === 'text') {
      resultStr += token[1];
    } else if (token[0] === 'name') {
      // 如果是name类型，就直接使用他的值，当然要使用lookup，因为防止这里是a.b.c形式的对象数据
      resultStr += lookup(data, token[1]);
    } else if (token[0] === '#') {
      resultStr += parseArray(token, data)
    }
  }
  console.log(resultStr);
  return resultStr
}


