import Link from 'next/link'

const Header = () => {
  return (
    <span className="tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">Back</a>
      </Link>
    </span>
  )
}

export default Header
