var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

var telusBC = companySalesData[0];
var telusSK = companySalesData[2];
var bombardierAB = companySalesData[1];

var telusBCsales = telusBC.sales;
var telusSKsales = telusSK.sales;
var bombardierABsales = bombardierAB.sales;

var taxBC = salesTaxRates.BC;
var taxAB = salesTaxRates.AB;
var taxSK = salesTaxRates.SK;

var telusBCsum = telusBCsales.reduce(add, 0);
var telusSKsum = telusSKsales.reduce(add, 0);
var bombardierABsum = bombardierABsales.reduce(add, 0);

function add(a, b) {
    return a + b;
}

var telusSum = (telusBCsum + telusSKsum);
var telusTaxes = ((telusBCsum * taxBC)+(telusSKsum * taxSK));
var bombardierTaxes = (taxAB * bombardierABsum);

console.log("Telus sales: " + telusSum + " Telus taxes: " + telusTaxes);
console.log("Bombardier sales: " + bombardierABsum + " Bombardier taxes: " + bombardierTaxes);
/*function calculateSalesTax(salesData, taxRates) {
  var output = {};




  return output;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/