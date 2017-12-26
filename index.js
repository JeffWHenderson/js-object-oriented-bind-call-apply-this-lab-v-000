function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn) {
  return (fn())
}

// bob = {name: 'bob'}
// age = 18
