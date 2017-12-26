function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, thisValue, arg) {
  return fn().call(bob, thisValue, arg)
}

 bob = {name: 'bob'}
// age = 18
