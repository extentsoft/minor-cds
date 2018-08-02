
c = new Promise( function(resolve, reject){
  console.log('c');
  resolve({a: 'a', b: 'b', c: {c1: 1, c2: 2}});
});
d = new Promise( function(resolve, reject){
  console.log('d');
  resolve();
}); 
/*
c
  .then(d)
  .then(function(){
    console.log('END');
  });
*/