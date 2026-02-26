// Interface with Union Type

export interface Payment {
  amount: number;
  method: "card" | "upi" | "cash";
}

export function processPayment(payment: Payment): void {
  console.log(`Payment of ${payment.amount} via ${payment.method}`);
}
