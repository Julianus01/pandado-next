import React from "react"

function HomePage() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 dark:text-slate-400 md:px-8 xl:flex">
      <div className="space-y-4 max-w-2xl mx-auto text-center">
        <h1 className="text-8xl text-gray-800 dark:text-white font-extrabold mx-auto">
          <span className="bg-gradient-to-r from-gray-800 dark:from-slate-200 dark:via-slate-400 dark:to-slate-500 via-red-400 to-rose-400 bg-clip-text text-transparent">
            Panda Top 3
          </span>
        </h1>

        <div className="space-y-10">
          <p className="max-w-md mx-auto text-xl italic">
            Someone that does compared to somebody that doesn&apos;t, does more
            - me
          </p>

          <button
            onClick={() => null}
            className="flex items-center justify-center gap-x-2 py-2 px-4 text-slate-300 font-medium bg-gray-800 hover:bg-gray-700 rounded-lg md:inline-flex"
          >
            Start focusing work
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
