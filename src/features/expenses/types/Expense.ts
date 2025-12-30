export interface Expense {
  id: string;
  title: string;
  amount: string;
  category: string;
  date: string;
}
export type ExpenseForm = Omit<Expense, "id">;
