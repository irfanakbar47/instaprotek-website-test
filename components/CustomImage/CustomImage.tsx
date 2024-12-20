import { ICustomImageProps } from '@/types/global';
import Image from 'next/image'
import React from 'react'

const CustomImage = (props: ICustomImageProps) => {
	const {
    src,
    alt,
    width,
    height,
    sizes,
    style,
    className,
    priority,
    loading,
    onError,
		onLoad,
  } = props;

	return (
		<Image 
			src={src}
			alt={alt}
			width={width}
			height={height}
			sizes={sizes}
			style={style}
			className={className}
			priority={priority}
			loading={loading}
			onLoad={onLoad}
			onError={onError}
		/>
	)
}

export default CustomImage