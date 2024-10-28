/*
* 处理数组，结合renderTemplate实现递归
* 注意：这个函数接收的参数是token,而不是tokens
* token是什么，就是一个简单的['#', 'students', []]
*
* 这个函数要递归调用renderTemplate函数，调用多少次？调用次数由data决定
* 比如data的形式是这样的：
* {
      students: [
        {name: '小明', age: 19, gender: '男', hobbies: ['游泳', '健身']},
        {name: '小红', age: 18, gender: '女', hobbies: ['看书', '看电影']},
        {name: '小强', age: 18, gender: '男', hobbies: ['吃饭']},
      ]
    }
* 那么parseArray函数就要递归调用renderTemplate函数3次，因为数组长度是3
*/

import lookup from "./lookup";
import renderTemplate from "./renderTemplate";

export default function parseArray(token, data) {
  // 得到真题数据data中这个数组要使用的部分
  var v = lookup(data, token[1]);

  // 结果字符串
  var resultStr = '';

  // 遍历v，v一定是数组
  // 注意下面这个循环可能是整个包中最难思考的一个循环
  // 他是遍历数据，而不是遍历tokens,数组中的数据有几条，就要遍历几次
  for(var i = 0; i < v.length; i++) {
    resultStr += renderTemplate(token[2], {
      ...v[i],
      '.': v[i]
    });
  }

  return resultStr;
}






