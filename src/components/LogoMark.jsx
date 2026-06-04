import templeOfHeavenLogo from '../../pic/logo/temple-of-heaven.png'

export default function LogoMark({ className = 'h-9 w-9' }) {
  return (
    <span
      className={`inline-flex shrink-0 overflow-hidden rounded-full bg-white p-0.5 shadow-sm ring-1 ring-gold/50 ${className}`}
      aria-hidden="true"
    >
      <img
        src={templeOfHeavenLogo}
        alt=""
        className="h-full w-full rounded-full object-cover object-top"
      />
    </span>
  )
}
