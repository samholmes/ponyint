import * as t from "@babel/types";

export function PonyIntPlugin() {
  return {
    BinaryExpression(path) {
      const {left, right, operator} = path.node
      const methodIdentier = operatorToMethodIdentier(operator)

      const node = t.callExpression(
        t.identifier('f'),
        [
          t.arrowFunctionExpression(
            [left, right],
            t.callExpression(
              t.memberExpression(left, methodIdentier),
              [right]
            )
          ),
          path.node
        ], 
        path.node
      )
      path.replaceWith(node)
      path.skip();
    },
  };
};


function operatorToMethodIdentier(operator) {
  const id = (() => {
    switch(operator) {
      case '*':
        return 'mul'
      case '+':
        return 'add'
      case '-':
        return 'sub'
      case '/':
        return 'div'
      case '**':
        return 'pow'
      default:
        throw new Error('Unknown operator')
    }
  })()
  return t.identifier(id)
}