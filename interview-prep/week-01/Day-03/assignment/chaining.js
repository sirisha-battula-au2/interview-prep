        class Chaining {
        firstMethod() {
          console.log('This is First call');
          return this;
        }
        
        secondMethod() {
          console.log('This is  Second call');
          return this;
        }
        
        thirdMethod() {
          console.log('This is  Third call');
          return this;
        }
      }
      
      const chainingInst = new Chaining();
      chainingInst
        .firstMethod()
        .secondMethod()
        .thirdMethod();