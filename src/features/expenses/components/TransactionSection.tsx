import { useState } from 'react';
import Card from '../../../components/Card';
import TransactionHeader from './TransactionHeader';
import type { FormInputProps } from '../types/FormInputProps';
import Modal from '../../../components/Modal';
import type { Expense, ExpenseForm } from '../types/Expense';
import CATEGORY_STYLES from '../IconConfig';
import { useExpenseForm } from '../hooks/useExpenseForm';

const FormInput = ({ label, name, type = "text", value, onChange, placeholder, options }: FormInputProps) => (
  <div className="mb-4 text-left">
    <label className="block text-sm font-bold text-gray-600 mb-1 uppercase text-[11px]">
      {label}
    </label>
    {type === "select" ? (
      <select
        name={name}
        value={value}
        onChange={onChange}
        required 
        className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="" disabled>
          Select category
        </option>
        {options?.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    ) : (
      <input
        required
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
      />
    )}
  </div>
);

  const INITIAL_STATE: ExpenseForm= {
    title: '',
    amount: '',
    category: '',
    date: new Date().toLocaleDateString('en-CA')
};

export default function TransactionSection()
{

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { formData, handleChange, reset } =useExpenseForm(INITIAL_STATE);  
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newExpense: Expense = {id: crypto.randomUUID(),...formData
      };
      console.log("Form Submitted:", newExpense);
      setExpenses(prev => [...prev, newExpense]);
      reset();
      setIsModalOpen(false);
    };

    return (
    <div className="relative">
      <Card className="p-0! overflow-hidden">
        <TransactionHeader onAddClick={() => setIsModalOpen(true)}/>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
              <thead className="bg-gray-50 ">
                  <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Title</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Category</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Amount</th>
                      <th className="relative px-6 py-3" scope="col">
                      <span className="sr-only">Actions</span>
                      </th>
                  </tr>
              </thead>
              <tbody className="bg-white  divide-y divide-gray-200">
                  { expenses.map(expense =>{
                  const style = CATEGORY_STYLES[expense.category] || CATEGORY_STYLES["default"];
                  return(
                  <tr key={expense.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{expense.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                          <div  className={`h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center ${style.colors}`}>
                              <span className="material-symbols-outlined">{style.icon}</span>
                          </div>
                          <div className="ml-4">
                              <div className="text-sm font-medium text-slate-900 dark:text-white">{expense.title}</div>
                                  <div className="text-xs text-gray-500">
                                {expense.category}
                                  </div>
                              </div>
                          </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${style.colors}`}>
                              {expense.category}
                          </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-semibold text-gray-900 dark:text-white">
                        Rs. {expense.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="relative flex items-center justify-center group">
                              <span className="absolute bottom-full mb-2 hidden group-hover:flex items-center 
                              bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                              Click for options
                              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                              </span>
                              <button className="text-gray-400 hover:text-blue-600 hover:bg-blue-50  rounded-full transition-colors">
                                  <span className="material-symbols-outlined text-xl block cursor-pointer">more_vert</span>
                              </button>
                          </div>
                      </td>
                  </tr>
                  );
                })}
              </tbody>
          </table>
        </div>
      </Card>
      <Modal 
          isOpen={isModalOpen} 
          onClose={() => { reset(); setIsModalOpen(false); }} 
          title="Add New Expense"
        >
          <form onSubmit={handleSubmit}>
            <FormInput 
              label="Title" 
              name="title" 
              value={formData.title} 
              onChange={handleChange} 
              placeholder="e.g. Monthly Rent" 
            />

            <div className="grid grid-cols-2 gap-4">
              <FormInput 
                label="Amount" 
                name="amount" 
                type="number" 
                value={formData.amount} 
                onChange={handleChange} 
                placeholder="0.00" 
              />
              <FormInput 
                label="Category" 
                name="category" 
                type="select" 
                value={formData.category} 
                onChange={handleChange} 
                options={["Food & Dining", "Housing", "Transport", "Shopping","others"]} 
              />
            </div>

            <FormInput 
              label="Date" 
              name="date" 
              type="date" 
              value={formData.date} 
              onChange={handleChange} 
            />

            <div className="flex gap-3 mt-6">
              <button 
                type="button" 
                onClick={() => { reset(); setIsModalOpen(false); }} 
                className="flex-1 py-2.5 border border-gray-300 rounded-lg font-bold hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold shadow-lg shadow-blue-500/30 active:scale-95 transition-all"
              >
                Save Expense
              </button>
            </div>
          </form>
        </Modal>
        </div>
    );
};