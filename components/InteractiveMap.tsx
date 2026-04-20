'use client'

export function InteractiveMap() {
  return (
    <div className="aspect-video relative">
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1uXbH8Px2s2mENx8_GsRNcRPKPTiYkXw&ehbc=2E312F&noprof=1"
        className="absolute inset-0 w-full h-full"
        style={{
          border: 0,
          marginTop: '-80px',
          height: 'calc(100% + 80px)',
          pointerEvents: 'none'
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="AirFresh Marketing Nationwide Locations"
      />
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={(e) => {
          const iframe = e.currentTarget.previousElementSibling as HTMLIFrameElement;
          if (iframe) {
            iframe.style.pointerEvents = 'auto';
            e.currentTarget.style.display = 'none';
          }
        }}
        style={{ background: 'transparent' }}
      />
    </div>
  )
}
