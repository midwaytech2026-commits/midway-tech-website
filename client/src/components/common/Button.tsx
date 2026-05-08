interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'outline'
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

export default function Button({ children, onClick, variant = 'primary', type = 'button', className = '' }: ButtonProps) {
  return (
    <button
      type={type}
      className={`${variant === 'primary' ? 'btn-primary' : 'btn-outline'} ${className}`.trim()}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
