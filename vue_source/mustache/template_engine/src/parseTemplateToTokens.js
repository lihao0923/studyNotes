/*
* 将模版字符串变为tokens数组
* */

import Scanner from "./Scanner";
import nestTokens from "./nestTokens";

export default function parseTemplateToTokens (templateStr) {
  var tokens = []
  // 实例化一个扫描器，构造时候提供一个参数，这个参数就是模版字符串
  // 也就是说这个扫描器就是针对这个模版字符串工作的
  var scanner = new Scanner(templateStr);
  var words;
  // scanner没有到头
  while (!scanner.eos()) {
    // 收集开始标记出现之前的文字
    words = scanner.scanUntil('{{');
    tokens.push(['text', words]);
    // 过'{{'
    scanner.scan('{{');

    // 收集开始标记出现之前的文字
    words = scanner.scanUntil('}}');
    if(words !== '') {
      // 这个words就是{{}}中间的内容，判断一下找到的
      if(words[0] === '#') {
        // 存起来，从下标为1的想开始存，因为下标为0的项是#
        tokens.push(['#', words.substring(1)]);
      } else if(words[0] === '/') {
        // 存起来，从下标为1的想开始存，因为下标为0的项是/
        tokens.push(['/', words.substring(1)]);
      } else {
        tokens.push(['name', words]);
      }
    }
    // 过'}}'
    scanner.scan('}}');
  }

  // 返回折叠后的tokens
  return nestTokens(tokens);
}


