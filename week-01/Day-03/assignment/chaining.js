var Car = function() {
    this.name = 'Audi';
    this.color = 'blue';
    this.speed = '180';
    };
    ​
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
      
      const chainableInstance = new Chaining();
      chainableInstance
        .firstMethod()
        .secondMethod()
        .thirdMethod();