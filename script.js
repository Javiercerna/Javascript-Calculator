// Model
var calculator = {
  expression : '',
  entry: '',
  showDisplay: function() {
    console.log("Expression: " + this.expression);
    console.log("Entry: " + this.entry);
  },
  clearEntry: function() {
    this.entry = '';
    this.showDisplay();
  },
  clearDisplay: function() {
    this.expression = '';
    this.entry = '';
    this.showDisplay();
  },
  addEntry: function(new_entry) {
    if (new_entry != '=')
    {
      this.entry = new_entry + ' ';
      this.expression += new_entry + ' ';
    }
    else
    {
      var result = this.calculateExpression();
      this.entry = result;
      this.expression += new_entry + ' ' + result;
    }
    this.showDisplay();
  },
  calculateExpression: function() {
    var expression_entries = this.expression.trim().split(' ');

    const applyOperation = {
      '+' : function(x,y) { return x + y },
      '-' : function(x,y) { return x - y },
      '*' : function(x,y) { return x * y },
      '/' : function(x,y) { return x / y }
    }

    var result = parseInt(expression_entries.splice(0,1)[0]);
    while (expression_entries.length != 0)
    {
      var operator = expression_entries.splice(0,1)[0];
      var second_number = parseInt(expression_entries.splice(0,1)[0]);
      result = applyOperation[operator](result,second_number);
    }

    return result;
  }
};

calculator.addEntry('3');
calculator.addEntry('*');
calculator.addEntry('5');
calculator.addEntry('+');
calculator.addEntry('12');
calculator.addEntry('=');

calculator.clearDisplay();
calculator.addEntry('9');
calculator.addEntry('=');

calculator.clearDisplay();
calculator.addEntry('12');
calculator.addEntry('-');
calculator.addEntry('20');
calculator.addEntry('/');
calculator.addEntry('3');
calculator.addEntry('=');
