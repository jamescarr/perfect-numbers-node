

function isPerfect(n){
  var sumOfDivisors = 0
  for(var i = 1; i < n; i++){
    if(n % i == 0) sumOfDivisors += i
  }
  return n == sumOfDivisors
}

exports.findInRange = function(min,max){
  var result = []
  for(var i = min; i <=max; i++){
    if(isPerfect(i)){
      result.push(i)
    }
  }
  return result
}

exports.isPerfect = isPerfect;
