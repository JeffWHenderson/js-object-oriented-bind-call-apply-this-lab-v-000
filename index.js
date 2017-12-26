function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, thisValue, arg) {
  return fn().call(bob, "hello")
}

// bob = {name: 'bob'}
// age = 18
