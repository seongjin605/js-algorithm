function bonAppetit(bill, k, b) {
  const eatenBills = bill.filter((item, i) => i !== k);
  const totalBillAmount = eatenBills.reduce((prev, current) => {
    return prev + current;
  }, 0);
  const halfOfTotalAmount = totalBillAmount / 2;
  if (b === halfOfTotalAmount) return 'Bon Appetit';
  return b - halfOfTotalAmount;
}
