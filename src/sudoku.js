export var Inputs = function(allInputs)               {
  this.allInputs = allInputs;
};

Inputs.prototype.checktype = function(){
  function checkInteger(integer){
    return integer > 1;
  }
  this.allInputs.every(checkInteger);
};
