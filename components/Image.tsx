import NextImage, { ImageProps } from 'next/image'

// eslint-disable-next-line @next/next/no-img-element, @typescript-eslint/no-explicit-any, jsx-a11y/alt-text
const Image = ({ ...rest }: any) => <img {...rest} />

export default Image
