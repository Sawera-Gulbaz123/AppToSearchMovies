import React from 'react'

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className="w-10 h-10"
          // 👈 controls the size (change to w-6 h-6 if you want smaller)
      >
        <circle
          fill="#8577adff"
          stroke="#8577adff"
          strokeWidth="15"
          r="15"
          cx="40"
          cy="100"
        >
          <animate
            attributeName="opacity"
            calcMode="spline"
            dur="2"
            values="1;0;1;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.4"
          />
        </circle>
        <circle
          fill="#8577adff"
          stroke="#8577adff"
          strokeWidth="15"
          r="15"
          cx="100"
          cy="100"
        >
          <animate
            attributeName="opacity"
            calcMode="spline"
            dur="2"
            values="1;0;1;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.2"
          />
        </circle>
        <circle
          fill="#8577adff"
          stroke="#8577adff"
          strokeWidth="15"
          r="15"
          cx="160"
          cy="100"
        >
          <animate
            attributeName="opacity"
            calcMode="spline"
            dur="2"
            values="1;0;1;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="0"
          />
        </circle>
      </svg>
    </div>
  )
}
export default Spinner
