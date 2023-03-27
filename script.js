const { createApp } = Vue;

createApp({
  data() {
    return {
      input: 0,
      temperatureType: 'fahrenheit',
      celsius: 0,
      fahrenheit: 0,
      kelvin: 0,
    };
  },
  methods: {
    calculate() {
      if (this.input<=0){
        this.input=0
      }
      this.input=parseInt(this.input)
      if (this.temperatureType === 'fahrenheit') {
        this.fahrenheit=''
        this.celsius = (this.input -32) *5/9;
        this.kelvin = (this.input - 32) * 5/9 + 273.15;
      }
      else if (this.temperatureType === 'celsius') {
        this.celsius=''
        this.fahrenheit = (this.input * 9/5) + 32;
        this.kelvin = (this.input + 273.15);
      }
      else {
        this.kelvin=''
        this.celsius =  this.input -273.15 ;
        this.fahrenheit = (this.input - 273.15) * 9/5 + 32;
      }
    }
  },
  mounted() {
    this.calculate();
  }
}).mount("#app");
