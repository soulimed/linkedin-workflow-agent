export function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="atmosphere-grid absolute inset-0 opacity-60" />
      <div className="grain absolute inset-0" />

      {/* Full-bleed craft plane: drafting desk + workflow path */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="deskWash" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d7e5ec" stopOpacity="0.9" />
            <stop offset="55%" stopColor="#eef3f6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#cfe0d9" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="pathStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0f3d3a" stopOpacity="0.15" />
            <stop offset="40%" stopColor="#117a6e" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0f3d3a" stopOpacity="0.35" />
          </linearGradient>
          <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="18" />
          </filter>
        </defs>

        <rect width="1440" height="900" fill="url(#deskWash)" />

        {/* Paper plane — writing surface as visual anchor */}
        <g opacity="0.9">
          <rect
            x="620"
            y="180"
            width="620"
            height="520"
            rx="4"
            fill="#f7fafb"
            stroke="#b7c8d3"
            strokeWidth="1.5"
            transform="rotate(-6 930 440)"
          />
          <rect
            x="660"
            y="230"
            width="520"
            height="14"
            rx="2"
            fill="#c5d3dc"
            opacity="0.55"
            transform="rotate(-6 920 237)"
          />
          <rect
            x="670"
            y="270"
            width="460"
            height="10"
            rx="2"
            fill="#d5e2ea"
            opacity="0.7"
            transform="rotate(-6 900 275)"
          />
          <rect
            x="675"
            y="300"
            width="420"
            height="10"
            rx="2"
            fill="#d5e2ea"
            opacity="0.55"
            transform="rotate(-6 885 305)"
          />
          <rect
            x="680"
            y="330"
            width="380"
            height="10"
            rx="2"
            fill="#d5e2ea"
            opacity="0.4"
            transform="rotate(-6 870 335)"
          />
          {/* Pen accent */}
          <g transform="translate(1080 560) rotate(28)">
            <rect x="0" y="0" width="140" height="10" rx="5" fill="#0f3d3a" />
            <rect x="110" y="1" width="28" height="8" rx="2" fill="#117a6e" />
            <polygon points="140,0 155,5 140,10" fill="#243846" />
          </g>
        </g>

        {/* Ambient blot for depth — not glow soup */}
        <ellipse
          cx="980"
          cy="420"
          rx="280"
          ry="180"
          fill="#117a6e"
          opacity="0.06"
          filter="url(#softBlur)"
        />

        {/* Workflow path — the product metaphor */}
        <path
          className="animate-path"
          d="M180 620 C320 520, 420 700, 560 560 S820 380, 980 420 S1220 520, 1320 300"
          stroke="url(#pathStroke)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {[
          [180, 620],
          [420, 640],
          [560, 560],
          [760, 460],
          [980, 420],
          [1160, 380],
          [1320, 300],
        ].map(([x, y], i) => (
          <g key={`${x}-${y}`}>
            <circle
              cx={x}
              cy={y}
              r="7"
              fill="#f7fafb"
              stroke="#117a6e"
              strokeWidth="2"
              className={i === 3 ? "animate-dot" : undefined}
              style={i === 3 ? { transformOrigin: `${x}px ${y}px` } : undefined}
            />
            <circle cx={x} cy={y} r="2.5" fill="#0f3d3a" />
          </g>
        ))}
      </svg>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--mist)] to-transparent" />
    </div>
  );
}
