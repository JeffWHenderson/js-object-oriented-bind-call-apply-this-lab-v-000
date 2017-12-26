function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg)
}

function setThisWithApply(fn, thisValue, args){
  console.log(args)//fn.apply(thisValue, [args, fn.length]))
}
 //bob = {name: 'bob'}
// age = 18
