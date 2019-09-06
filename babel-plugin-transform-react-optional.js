'use strict';

/*
  One shortcoming of the Optional component is that it always constructs
  its subcomponents before performing the test whether to display them.

  Clearly when the test returns false, Optional has wasted its time 
  constructing components that won't in fact be displayed. This babel 
  plugin therefore reverses this order: perform the test first - and 
  only when it evaluates to true - go ahead and construct the 
  subcomponents.

  To summarize, this plugin transforms:

    <Optional test={test}>
        <Child>
          ...
        </Child>
    </Optional>

  to: 
  
    {Boolean(test) && <Child>...</Child> }
*/

module.exports = function(babel) {
  const t = babel.types;
  return {
    inherits: require("babel-plugin-syntax-jsx"),
    visitor: {
      JSXElement: function(path) {
        if (path.node.openingElement.name.name == 'Optional') {
          let child = null;

          path.node.children.forEach(item => {
            if (item.type == 'JSXExpressionContainer') {
              child = item.expression;
            }
            if (item.type == 'JSXElement') {
              child = item;
            }
          });

          let test = null;

          path.node.openingElement.attributes.forEach(item => {
            if (item.name.name == 'test') {
              test = item.value.expression;
            }
          });

          test = t.callExpression(t.identifier('Boolean'), [test]);

          path.replaceWith(
            t.blockStatement(
              [t.expressionStatement(
                t.logicalExpression('&&', test, child))], [])
          );
        }     
      }
    }
  };
};
