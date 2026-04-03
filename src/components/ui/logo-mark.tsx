export function LogoMark({ className = 'size-10' }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="18" fill="#102033" />
        <path
          d="M18 21C18 18.7909 19.7909 17 22 17H42C44.2091 17 46 18.7909 46 21V25C46 27.2091 44.2091 29 42 29H22C19.7909 29 18 27.2091 18 25V21Z"
          fill="#D97A4A"
        />
        <path
          d="M18 39C18 36.7909 19.7909 35 22 35H35C37.2091 35 39 36.7909 39 39V43C39 45.2091 37.2091 47 35 47H22C19.7909 47 18 45.2091 18 43V39Z"
          fill="#1F8F84"
        />
        <path
          d="M42 35H46V47H42C39.7909 47 38 45.2091 38 43V39C38 36.7909 39.7909 35 42 35Z"
          fill="#F1E6D7"
        />
      </svg>
    </div>
  );
}
