# retoolCRM
Customer Relation Managmenet (CRM) app using retool, google sheets, and stripes API. View here: https://gregorymorris.retool.com/. Guilded project from freecodecamp.org, led by Ania Kubow.

These are the custom changes I created beyond the project:

Add Sales Order section
1. Charge ID changed from hardcode to input field with valid default chargeid
2. Shipper field in Add Sales order changed to drop down as asscociated data has limited shipper selection
3. Frieght changed to currancy and updated associated query
5. Form fields made manditory
6. Employee ID field changed to selection and mapped to employee table, updated associated query
7. Customer ID field changed to selection and mapped to customer table, updated associated query
8. Order ID fields changed from text to number input, updated associated query

Refund section
1. Form fields made manditory
2. Email script updated to show customer name, reformated messge to show order and refund together
3. Charge ID changed from hardcode to pull from table 1 chargeid
4. Refund amount default pulls from table 1 freight
5. frieght changed to currancy
6. Associated queries updated for fom field changes

Stripe API
1. Stripe API call updated script to convert floats to integer

Tables
1. Updated freight to number
2. ID fields updated to number and removed thousand separator
3. Order detail table added

Bug Report for tracking issues
