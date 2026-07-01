import { useEffect, useRef } from 'react'
import heroImage from '../assets/misc/mountain_banner.webp'

type Props = { title: string }

export const PageBanner = ({ title }: Props) => {
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) { return }
      if (!imgRef.current) { return }
      requestAnimationFrame(() => {
        if (imgRef.current) {
          imgRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative w-full overflow-hidden" style={{ height: '38vh', minHeight: '260px' }}>
      <img
        ref={imgRef}
        src={heroImage}
        alt=""
        className="absolute inset-0 w-full object-cover object-center"
        style={{ height: '130%', top: '-15%', willChange: 'transform' }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(0,30,60,0.78) 0%, rgba(0,30,60,0.15) 55%, transparent 100%)' }}
      />
      <div
        className="absolute inset-x-0 bottom-0 px-lg pb-lg"
        style={{ maxWidth: 'var(--container-standard)', margin: '0 auto' }}
      >
        <h1 className="font-heading text-5xl font-bold text-white leading-tight">
          {title}
        </h1>
      </div>
    </div>
  )
}
