/*
* 功能是可以在dataObj对象中，寻找用连续点符号的keyName属性，比如dataObj是 {a: {b: {c: 100}}
* 那么lookup(dataObj, 'a.b.c')结果就是100
*/
export default function lookup(dataObj, keyName) {
  // 看看keyName中有没有点符号，但是不能是.本身
  if(keyName.indexOf('.') !== -1 && keyName !== '.') {
    var keys = keyName.split('.');
    // 设置临时变量，用于周转，一层一层找下去
    var temp = dataObj;

    for(var i = 0; i < keys.length; i++) {
      temp = temp[keys[i]];
    }

    return temp;
  }
  return dataObj[keyName];
}
