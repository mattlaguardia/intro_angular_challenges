console.log('challenge #3 -- app.js loaded!');

var app = angular.module("appThree", []);
app.controller("infoController", infoController)

function infoController(){
  this.name = "Jon Doe";
  this.height = 5.6;
}

app.controller("numContoller", numContoller);

function numContoller(){
  this.num1 = 0;
  this.num2 = 0;
}

app.controller("loanController", loanController);

function loanController() {
  this.amount = 1000;
  this.apr = .08;
  this.month = function(){
    var yearly_interest = (this.amount * (this.apr / 100));
    var monthly_interest = (yearly_interest / 12);
    var accrued_interest = n * monthly_interest || 0;
    return {
        accrued_interest: accrued_interest,
        total_balance: this.amount + accrued_interest;
    }
  }
}
