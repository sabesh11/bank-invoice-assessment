export function createData(no, CompanyName, GST, OrderID, Invoice, date,amount,Depart) {
  return {
    no,
    CompanyName,
    GST,
    OrderID,
    Invoice,
    date,
    amount,
    Depart,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

export const rows = [
  createData(1,'geodic', "2AAAA092852548shaty", "SD10000BA", 1224, 5-6-2025, 12345678,"Accounts"),
  createData(2,'Ice cream ', "2AAAA092852548shaty", "SD10000BA", 374, 5-6-2025, 12345678,"Admin"),
  createData(3,'Eclair', "2AAAA092852548shaty", "SD10000BA", 246, 5-6-2025, 12345678,"Finance"),
  createData(4,'Cupcake', "2AAAA092852548shaty", "SD10000BA", 667, 5-6-2025, 12345678,"Accounts"),
  createData(5,'Gingerbread', "2AAAA092852548shaty", "SD10000BA", 4933, 5-6-2025, 12345678,"Admin"),
];