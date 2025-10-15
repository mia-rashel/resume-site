export default function Logo({ className }) {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ width: "56px", height: "56px" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
        className="w-full h-full"
      >
        {/* Transparent background */}
        <rect width="300" height="300" fill="none" />

        {/* Circle border */}
        <circle
          cx="150"
          cy="150"
          r="130"
          stroke="#1C3B4D"
          strokeWidth="6"
          fill="none"
        />

        {/* Center R */}
        <text
          x="150"
          y="150"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#1C3B4D"
          fontFamily="'Poppins','Inter',sans-serif"
          fontWeight="800"
          fontSize="80"
        >
          R
        </text>

        {/* Top M – moved down slightly */}
        <text
          x="150"
          y="85"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#1C3B4D"
          fontFamily="'Poppins','Inter',sans-serif"
          fontWeight="800"
          fontSize="80"
        >
          M
        </text>

        {/* Bottom M – moved up slightly */}
        <text
          x="150"
          y="215"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#1C3B4D"
          fontFamily="'Poppins','Inter',sans-serif"
          fontWeight="800"
          fontSize="80"
        >
          M
        </text>

        {/* Left M – moved right slightly */}
        <text
          x="90"
          y="150"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#1C3B4D"
          fontFamily="'Poppins','Inter',sans-serif"
          fontWeight="800"
          fontSize="80"
        >
          M
        </text>

        {/* Right M – moved left slightly */}
        <text
          x="210"
          y="150"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#1C3B4D"
          fontFamily="'Poppins','Inter',sans-serif"
          fontWeight="800"
          fontSize="80"
        >
          M
        </text>
      </svg>
    </div>
  );
}
