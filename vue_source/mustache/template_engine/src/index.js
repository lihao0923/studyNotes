//
import parseTemplateToTokens from "./parseTemplateToTokens";
import renderTemplate from "./renderTemplate";

// 全局提供TemplateEngine对象
window.TemplateEngine = {
  render(templateStr, data) {
    // 调用parseTemplateToTokens函数，让模版字符串能够变为tokens数组
    var tokens = parseTemplateToTokens(templateStr);

    // 调用renderTemplate函数，让tokens数组变为dom字符串
    var domStr = renderTemplate(tokens, data);
    return domStr;
  }
}

