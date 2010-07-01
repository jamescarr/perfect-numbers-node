
describe 'PerfectNumberFinder'
  describe 'isPerfect'
    it 'should identify 5 is not perfect'
      var value = perfectNumber.isPerfect(5)
      
      value.should.eql false      
    end
    it 'should identify 6 as perfect number'
      perfectNumber.isPerfect(6).should.be true
    end
    
    it 'should identify 28 as a perfect number'
      perfectNumber.isPerfect(28).should.be true
    end
    
    it 'should identify all numbers between 1 and 30 except 6,28 as not perfect'
      for(var i = 1; i < 30; i++){
        if(i != 6 && i != 28){
          perfectNumber.isPerfect(i).should.be false  
        }
      }
    end
    
    it 'should identify 8128 as a perfect number'
      perfectNumber.isPerfect(8128).should.be true
    end
  end
  
  describe 'perfectNumbersForRange'
    it 'should return an empty array if no perfect numbers exist in range'
      var perfectNumbers = perfectNumber.findInRange(30,100)
      
      perfectNumbers.should.eql []
    end
    
    it 'should return [6,28] for range 1,30'
      var perfectNumbers = perfectNumber.findInRange(1,30)
      
      perfectNumbers.should.eql [6,28]
    end
    
    it 'should return [6,28] for range 6,28'
      var perfectNumbers = perfectNumber.findInRange(6,28)
      
      perfectNumbers.should.eql [6,28]
    end
  end
  
end 


