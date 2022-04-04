// Percent shipped

{{GetSalesOrderData.data.filter(order => order.shippedDate !== '').length / GetSalesOrderData.data.length * 100}}

