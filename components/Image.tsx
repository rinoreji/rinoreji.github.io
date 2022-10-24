import NextImage, { ImageProps } from 'next/image'

// eslint-disable-next-line @next/next/no-img-element
const Image = ({ ...rest }: ImageProps) => <img {...rest} />

export default Image
