export interface FormInputProps {
  label: string;
  name: string;        
  type?: string;        
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  placeholder?: string;
  options?: string[];
}