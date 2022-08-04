import { LinkElement } from './styled'
import NextLink from 'next/link'
import type * as Stitches from '@stitches/react'

interface ILinkProps {
  children: React.ReactNode
  href: string
  css?: Stitches.CSS
}

const Link = ({ children, href, ...props }: ILinkProps) => {
  return (
    <NextLink href={href} passHref>
      <LinkElement {...props}>{children}</LinkElement>
    </NextLink>
  )
}

export default Link
