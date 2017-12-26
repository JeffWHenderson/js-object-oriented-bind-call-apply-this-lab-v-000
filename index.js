function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg)
}

 //bob = {name: 'bob'}
// age = 18
