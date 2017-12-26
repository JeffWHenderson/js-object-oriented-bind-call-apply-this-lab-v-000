function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg)
}

function setThisWithApply(fn, thisValue, args){
  console.log(fn.apply(thisValue, [...args]))
}
 //bob = {name: 'bob'}
// age = 18
