import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import assets from './assets/grad.jpg'

function App() {
    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-slate-800 to-blue-900 px-4">
  <div className='mb-10 mt-10 w-full max-w-3xl px-2 sm:px-4 bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center'>
  <div className="flex items-center space-x-8 mb-6">
    <div className="w-50 h-50 bg-white/10 rounded-full flex items-center justify-center overflow-hidden shadow-lg border-4 border-white/20">
      <img
        src={assets}
        className="w-50 h-50 object-cover"
        alt="Profile"
      />
    </div>
    <span className="text-white text-4xl font-extrabold drop-shadow-lg">Wilmar Cabigas</span>
  </div>
  <p className="text-slate-200 mb-4 text-center max-w-xs sm:max-w-md text-lg">
        Dedicated Front-End Developer eager to craft visually appealing and highly functional web applications.
  </p>
</div>
</div>
  )
}

export default App