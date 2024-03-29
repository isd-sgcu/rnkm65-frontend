import { useSwitch } from 'common/hooks/useSwitch'
import NextImage, { ImageProps } from 'next/image'

import { LoadingImage } from './styled'

const Image = (props: ImageProps) => {
  const { className, ...remain } = props
  const {
    state: loading,
    handleOpen: startLoading,
    handleClose: finishLoading,
  } = useSwitch(true)

  return (
    <NextImage
      {...remain}
      onLoadStart={startLoading}
      onLoadingComplete={finishLoading}
      onError={finishLoading}
      className={`${LoadingImage({ loading })} ${className}`}
    />
  )
}

export default Image
