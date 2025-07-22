import image_c2d2f0de520cdd65d8f29c81173da8ff71abd2ca from 'figma:asset/c2d2f0de520cdd65d8f29c81173da8ff71abd2ca.png';
import { ImageWithFallback } from './figma/ImageWithFallback'

export function K2Logo() {
  return (
    <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[160px] lg:h-[160px]">
      <ImageWithFallback
        src={image_c2d2f0de520cdd65d8f29c81173da8ff71abd2ca}
        alt="K2 Business Logo"
        className="w-full h-full object-contain mx-[4px] my-[0px]"
      />
    </div>
  )
}