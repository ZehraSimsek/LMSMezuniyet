import React from 'react';

export default function LoadingSVG() {
  return (
    <div className="loading-container">
      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      
        @keyframes spin2 {
          0% {
            stroke-dasharray: 1, 800;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 400, 400;
            stroke-dashoffset: -200px;
          }
          100% {
            stroke-dasharray: 800, 1;
            stroke-dashoffset: -800px;
          }
        }
      
        .spin2 {
          transform-origin: center;
          animation: spin2 0.9s ease-in-out infinite,
            spin 0.8s linear infinite;
          animation-direction: alternate;
        }

        /* Yeni stil ekledik */
        .loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
      `}</style>
  
      <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" width="50" height="50">
        <circle className="spin2" cx="400" cy="400" fill="none"
          r="70" strokeWidth="8" stroke="#879eff" /* Çubuğu incelttik */
          stroke-dasharray="175 1400"
          strokeLinecap="round" />
      </svg>
    </div>
  );
}
