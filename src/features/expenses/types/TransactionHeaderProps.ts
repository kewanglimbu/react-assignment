export interface TransactionHeaderProps {
  onAddClick: () => void;
  searchExpense:string;
  selectedCategory: string;
  selectedDate:string; 
  onCategoryChange: (value: string) => void;
  onDateChange:(value: string) => void;
  onSearchExpense:(value: string) => void;
}