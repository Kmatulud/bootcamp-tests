function mostProfitableDepartment(data){
  var salesMap = {};
  for (var i = 0; i < data.length; i++){
    var sales_data = data[i];
    salesMap[sales_data.department] = 0;
  }
  
  for (var i = 0; i < data.length; i++){
  var sales_data = data[i];
  var salesTotal = salesMap[sales_data.department];
  salesTotal += sales_data.sales;
  salesMap[sales_data.department] = salesTotal;
  }
  
  var currentMaxSales = 0;
  var currentDepartment = "";
  for (const departments in salesMap){
    const currentDataSales = salesMap[departments];
    if (currentDataSales > currentMaxSales){
      currentMaxSales = currentDataSales;
      currentDepartment = departments;
    }
  }
  return (currentDepartment);
}


function mostProfitableDay(data){
   var salesMap = {};
  for (var i = 0; i < data.length; i++){
    var sales_data = data[i];
    salesMap[sales_data.day] = 0;
  }
  
  for (var i = 0; i < data.length; i++){
  var sales_data = data[i];
  var salesTotal = salesMap[sales_data.day];
  salesTotal += sales_data.sales;
  salesMap[sales_data.day] = salesTotal;
  }
  var currentDay = "";
  var currentMaxSales = 0;
  var currentDepartment = "";
  for (const departments in salesMap){
    const currentDataSales = salesMap[departments];
    if (currentDataSales > currentMaxSales){
      currentMaxSales = currentDataSales;
      currentDepartment = departments;
      currentDay = departments;
    }
  }
  return (currentDay);
}