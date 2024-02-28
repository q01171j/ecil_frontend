import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'
import { LinkItemProps } from '@interfaces'



function LinkItem({ children, className, href }: LinkItemProps) {
  return (
    <Link
        to={href}
        className={twMerge(clsx(
            "my-3 text-sm transition-all hover:text-[#2F6B85] hover:fill-[#2F6B85]",
            className
        ))}
    >
        {children}
    </Link>
  )
}

export default LinkItem