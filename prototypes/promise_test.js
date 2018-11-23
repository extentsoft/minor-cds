function readFile(index){
  return new Promise(function(resolve){
    setTimeout(function(){
      console.log('Read file with index',index);
      resolve();
    },500);
  })
}

Promise.resolve(3)
  .then(function loop(i){
    if( i < 5 ){
      return readFile(i)
        .then(function(){
          return i+1;
        })
        .then(loop);
    }
  })
  .then(function(){
    console.log('done');
  })
  .catch(function(e){
    console.log('error',e);
  });