//Creat Refund script to generate email Text

let orderId = {{table1.selectedRow.data.orderid}}
let refundAmount = {{numberInput1.value}}
let cName = {{table2.data[parseInt(table1.selectedRow.data.empid) -1].companyname}}

let openingBlurb = ''
  switch({{select1.value}}) {
		case 'toolate':
		openingBlurb = "I'm sorry about your order being late. I have refunded $" + refundAmount + " to your card."
    break
    case 'didntlike':
    openingBlurb = "I'm sorry you were unsatified with our product. I have refunded $" + refundAmount + " to your card."
    break
    case 'cancel':
    openingBlurb = "I have canceled your order and refunded $" + refundAmount + " to your card."
    break
  }

return cName + ',\n\n' + 'Regarding order ' + orderId + '. ' + openingBlurb + '\n\n Thank you for shopping with us.'
