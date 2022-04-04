// Percent full price

{{GetOrderData.data.filter(order => order.discount == '0').length / GetOrderData.data.length * 100}}
