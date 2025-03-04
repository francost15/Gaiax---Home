import Image from "next/image"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image src="/logo.svg" alt="logo" width={150} height={150} />
    </Link>
  )
}

