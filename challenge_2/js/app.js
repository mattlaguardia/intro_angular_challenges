console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);

function WelcomeController(){
  this.full_name = "Matthew Laguardia";
  this.age = 26;
  this.city = "Sacramento";
  this.state = "California";
  this.full_name.length
}

app.controller("ClassController", ClassController);

function ClassController(){
  this.class_name = "Gaia",
  this.enrolled_students = 16;
  this.start_date = "4/3/2016";
  this.end_date = "7/12/2016";
  this.daysRemaining = function(){
    var todaysDate = "7/4/2016";
    var daysLeft = Date.parse(this.end_date) - Date.now();
    var remainder = Math.floor(daysLeft/1000/24/60/60);
    return remainder;
  }
}
