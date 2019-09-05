


//spec 1
import { Inputs } from './../src/sudoku.js';
describe('Inputs', function(){

  it('returns false if any of the inputs is not a positive int between 1-9', function(){
    var userInput = [6,4,7,8,3]
    var newInputs = new Inputs(userInput);
    console.log(newInputs)
    console.log(newInputs.checktype())
    expect(newInputs.checktype()).toEqual(true);
  });
});
