//   document.write("kvadratroden af -4 er " +  math.sqrt(-4)); // 2i
// Test: 1+2*3+7^2

function parseIt() {
   try {
      var expr = document.getElementById("expression");
      var value = math.eval(expr.value);
      var node = math.parse(expr.value);
      var expression = getExpression(node, '');
      document.getElementById('resultat'). innerHTML = expression + " = " + value;
      document.getElementById('parsetree').innerHTML = JSON.stringify(node, null, 4);
   } catch(err) {
       document.getElementById('parsetree').innerHTML = "Hov, der er sket en fejl:\n" + err;
   }
}

function getExpression(node, indent) {
    var res;

    if (node.args[0].hasOwnProperty('value')) {
        res = node.args[0].value;
    } else {
        res = getExpression(node.args[0], indent+'x');
    }
    
    res += ' ' + node.op + ' ';

    if (node.args[1].hasOwnProperty('value')) {
        res += node.args[1].value;
    } else {
        res += getExpression(node.args[1], indent+'x');
    }
    
    console.log(res + ' = ' + math.eval(res));

    return '(' + res + ')';
}
