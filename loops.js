function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 0) {
      array.unshift("I am ${i} strange loop")
    } else{
    array.push("I am ${i} strange loops")
    }
  }
  return array
}

function whileLoop(x) {
  while (x > 0){
    console.log(--x)
  }
  return "done"
}

function maybeTrue() {
return Math.random() >= 0.5
}

function doWhileLoop(array){
  do {
    array.pop();
    return array;
  } while (array.length > 0 && maybeTrue())
}
