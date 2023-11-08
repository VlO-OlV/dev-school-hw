let Vector = function(components) {
  
    this.components = components;
    
    this.add = (vector) => {
      if(vector.components.length !== this.components.length) {
        throw new Error('Error!');
      }
      let result = [];
      for(let i = 0; i < this.components.length; i++) {
        result.push(this.components[i]+vector.components[i]);
      }
      return new Vector(result);
    };
    
    this.subtract = (vector) => {
      if(vector.components.length !== this.components.length) {
        throw new Error('Error!');
      }
      let result = [];
      for(let i = 0; i < this.components.length; i++) {
        result.push(this.components[i]-vector.components[i]);
      }
      return new Vector(result);
    };
    
    this.dot = (vector) => {
      if(vector.components.length !== this.components.length) {
        throw new Error('Error!');
      }
      let sum = 0;
      for(let i = 0; i < this.components.length; i++) {
        sum += this.components[i] * vector.components[i];
      }
      return sum;
    };
    
    this.norm = () => {
      return Math.sqrt(this.components.reduce((accum,current) => accum + Math.pow(current,2)));
    };
    
    this.toString = () => {
      return '(' + this.components.join(',') + ')';
    };
    
    this.equals = (vector) => {
      if(this.toString() === vector.toString()) {
        return true;
      } else {
        return false;
      }
    };
  };