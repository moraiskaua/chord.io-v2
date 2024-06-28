import { cn } from '@/utils/cn';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ variant, disabled, ...props }) => {
  return (
    <button
      className={cn(
        'bg-primary text-secondary p-6 rounded-2xl uppercase',
        disabled && 'opacity-50 pointer-events-none',
        variant === 'secondary' &&
          'bg-secondary text-white border-2 border-primary rounded-2xl p-6 text-xs md:text-lg font-bold flex flex-col justify-center items-center gap-2',
      )}
      {...props}
    />
  );
};

export default Button;
