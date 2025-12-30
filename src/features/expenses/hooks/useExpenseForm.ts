import { useState, useCallback } from "react";
import type {ExpenseForm} from "../types/Expense";

export function useExpenseForm(initialState: ExpenseForm) {
  
    const [formData, setFormData] = useState(initialState);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        },
        []
    );

    const reset = useCallback(() => {
        setFormData(initialState);
    }, [initialState]);

    return {
        formData,
        handleChange,
        reset,
        setFormData,
    };
}
