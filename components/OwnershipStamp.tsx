export default function OwnershipStamp() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(-35deg)',
        zIndex: 9999,
        pointerEvents: 'none',
        userSelect: 'none',
        opacity: 0.12,
      }}
    >
      {/* Outer ring */}
      <div
        style={{
          position: 'relative',
          padding: '22px 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0px',
        }}
      >
        {/* Dotted outer border */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            border: '3px dotted #000',
            borderRadius: '12px',
          }}
        />
        {/* Inner border */}
        <div
          style={{
            position: 'absolute',
            inset: '7px',
            border: '1.5px dotted #000',
            borderRadius: '7px',
          }}
        />

        {/* Content */}
        <span
          style={{
            fontSize: '9px',
            fontWeight: 800,
            letterSpacing: '0.35em',
            color: '#000',
            textTransform: 'uppercase',
            marginBottom: '6px',
          }}
        >
          Made by
        </span>

        <span
          style={{
            fontSize: '28px',
            fontWeight: 900,
            letterSpacing: '0.06em',
            color: '#000',
            textTransform: 'uppercase',
            lineHeight: 1,
            whiteSpace: 'nowrap',
          }}
        >
          Wycliffe
        </span>

        <span
          style={{
            fontSize: '28px',
            fontWeight: 900,
            letterSpacing: '0.06em',
            color: '#000',
            textTransform: 'uppercase',
            lineHeight: 1.15,
            whiteSpace: 'nowrap',
          }}
        >
          Cheruiyot
        </span>

        <div
          style={{
            width: '100%',
            height: '1.5px',
            background: 'repeating-linear-gradient(90deg, #000 0px, #000 4px, transparent 4px, transparent 8px)',
            margin: '8px 0',
          }}
        />

        <span
          style={{
            fontSize: '8px',
            fontWeight: 700,
            letterSpacing: '0.28em',
            color: '#000',
            textTransform: 'uppercase',
          }}
        >
          © Owner · All Rights Reserved
        </span>
      </div>
    </div>
  )
}
