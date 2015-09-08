'use strict';

var isBetween = function(num, min, max){
  for(var i=min; i<=max; i++){
    if(i === num){
      return true
    }
  }
  return false
};
