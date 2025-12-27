import { FaHome, FaMoneyCheckAlt } from "react-icons/fa";
import SummaryCard from "../features/expenses/components/SummaryCard";
import type { SummaryCardProps } from "../features/expenses/types/SummaryCardProps";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

const summaryCards: SummaryCardProps[]= [
  { 
    title: "Highest Single Expense", 
    subtitle: "Apartment Rent", 
    amount: "Rs 12,450.00", 
   icon: <FaMoneyCheckAlt  size={18}/> 
  },
  { 
    title: "Total Spent", 
    subtitle: "This month's expenses", 
    amount: "Rs 30,450.00", 
    increasePercent: "", 
    icon: <FaMoneyBillTrendUp  size={18} />
  },
  { 
    title: "Top Category", 
    subtitle: "45% of total spending", 
    amount: "Housing", 
    icon: <FaHome size={18} />
  }
];

const ExpensePage = () => {
  return (
    <div className="p-6 lg:p-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-2xl font-bold text-slate-900">My Expense Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {summaryCards.map((card, index) => (
            <SummaryCard key={index} {...card} />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white h-80 rounded-2xl border border-dashed border-slate-300 flex items-center justify-center text-slate-400">
            Spending Trends Chart
          </div>
          <div className="bg-white h-80 rounded-2xl border border-dashed border-slate-300 flex items-center justify-center text-slate-400">
            Expenses Breakdown
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensePage;