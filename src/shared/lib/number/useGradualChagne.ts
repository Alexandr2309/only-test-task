
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState } from 'react'

export const useGradualChange = (value: number, precision: number = 3) => {
  const [animatedValue, setAnimatedValue] = useState(value)
  const gsapObj = useRef({ value })

  useGSAP(() => {
    gsap.to(gsapObj.current, {
      value,
      duration: 0.3,
      ease: 'power2.in',
      onUpdate: () => {
        const roundedValue = Number(gsapObj.current.value.toFixed(precision))
        setAnimatedValue(roundedValue)
      },
    })
  }, [value, precision])

  return animatedValue
}
