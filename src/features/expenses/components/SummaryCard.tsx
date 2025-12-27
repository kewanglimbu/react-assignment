import { FaArrowTrendUp } from "react-icons/fa6";
import type { SummaryCardProps } from "../types/SummaryCardProps";
import Card from "../../../components/Card";

export default function SummaryCard({title,subtitle,amount,increasePercent, icon,}: SummaryCardProps) {
  return (
    <Card className="flex flex-col justify-between h-44 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
      <div className="flex justify-between items-center">
        <h2 className="text-sm font-medium text-slate-500">{title}</h2>
        {increasePercent ? (
          <span
            className={`inline-flex  gap-1 text-xs font-bold px-2 py-1 rounded-full bg-rose-50 text-rose-600
            }`}
          >
            <span className="flex items-center"><FaArrowTrendUp size={12} /></span>
            <span className="leading-none">+{increasePercent}%</span>
          </span>
        ) : (
          icon && (
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
              {icon}
            </div>
          )
        )}
      </div>

      <div className="mt-4">
        <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
          {amount}
        </div>
        <p className="text-sm text-slate-400 mt-1 font-medium">{subtitle}</p>
      </div>
    </Card>
  );
}