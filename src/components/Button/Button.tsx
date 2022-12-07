import { ButtonHTMLAttributes } from "react"
import './Button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}

export const Button = ({
  children,
  icon,
}: ButtonProps) => {
  return (
    <button className={`button ${icon && 'icon'}`}>
      {icon && (
        <div className="button__icon-wrapper">
          {icon || <></>}
        </div>
      )}
      {children}
    </button>
  )
}