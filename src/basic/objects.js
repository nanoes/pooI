var objectCar = {
  mark: "Peugeot",
  model: "208",
  year: 2020,

  detailsOfCar: function(){
    console.log(`Car ${this.mark} ${this.year}`);
}
};


objectCar.detailsOfCar();