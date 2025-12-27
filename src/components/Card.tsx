interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
        <div className={` bg-white  dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 
             dark:border-gray-700 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.1)]  ${className}`}> {children}
        </div>
  );
}