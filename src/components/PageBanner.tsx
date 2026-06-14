import heroImage from '../assets/background/furka-summer.jpg'

type Props = { title: string }

export const PageBanner = ({ title }: Props) => (
  <div className="relative w-full" style={{ height: '38vh', minHeight: '260px' }}>
    <img
      src={heroImage}
      alt=""
      className="w-full h-full object-cover object-top"
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
