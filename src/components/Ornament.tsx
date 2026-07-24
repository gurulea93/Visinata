export function Ornament({ className = '' }: { className?: string }) {
  return (
    <div className={`ornament ${className}`.trim()} aria-hidden="true">
      <svg viewBox="0 0 12 12" fill="none">
        <path d="M6 0.5 10 6 6 11.5 2 6Z" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  )
}
