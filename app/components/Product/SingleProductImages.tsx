import React from 'react'
type ImageProps = {
    image: string;
}

export const SingleProductImages = ({image}: ImageProps) => {
  return (
    <div className='w-full'>
        <h1>{image[1]}</h1>
    </div>
  )
}
