import React, { useEffect, useRef, useState } from 'react'

function LazyImage({ src, alt, className, height = 200, radius = 12 }) {
  const imgRef = useRef(null)
  const [loaded, setLoaded] = useState(false)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = imgRef.current
    if (!node) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      })
    })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={imgRef} style={{ width: '100%' }}>
      {!loaded && <div className="image-skeleton" style={{ height, borderRadius: radius }} />}
      {inView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          style={{
            width: '100%',
            height,
            objectFit: 'cover',
            display: loaded ? 'block' : 'none',
            borderRadius: radius
          }}
          className={className}
        />
      )}
    </div>
  )
}

export default LazyImage


