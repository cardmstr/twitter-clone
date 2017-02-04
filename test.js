
var ourArray = [];

function testConds(condition1, condition2, condition3){
  if(condition1 && ourArray.indexOf('Savings')==-1)
    ourArray.push('Savings');
  if(condition2 && ourArray.indexOf('Debts')==-1)
    ourArray.push('Debts');
  if(condition3 && ourArray.indexOf('Retirement')==-1)
    ourArray.push('Retirement');
}

testConds(NaN, true, false);

console.log(ourArray);
