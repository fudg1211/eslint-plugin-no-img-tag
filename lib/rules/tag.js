/*
 * @Author: huajian
 * @LastEditors: huajian
 */
'use strict'

module.exports = {
  meta:{
    type:"problem",
    fixable: 'code'
  },
  create: function (context) {
    return {
      JSXIdentifier(node) {
        if (
          node.name==="img"
        ) {
          context.report({
            node,
            message:'禁止使用img标签，请用Img组件标签替换',
            fix(fixer){
              if(node.type==='JSXIdentifier'){
                return fixer.replaceText(node,'Img');
              }
            }
          })
        } else {
          return
        }
      },
    }
  },
}
