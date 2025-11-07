import * as React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'solid' | 'outline'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'solid', ...props }, ref) => {
    const base = 'inline-flex items-center justify-center px-3 py-2 rounded-xl font-medium transition focus:outline-none'
    const styles =
      variant === 'outline'
        ? 'border border-zinc-200 text-zinc-800 bg-white hover:bg-zinc-50'
        : 'text-white bg-[#00A3D3] hover:opacity-90'
    return <button ref={ref} className={`${base} ${styles} ${className}`} {...props} />
  }
)
Button.displayName = 'Button'