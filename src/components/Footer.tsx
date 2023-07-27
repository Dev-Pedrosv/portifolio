import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className="fixed right-10 bottom-10 w-full cursor-pointer flex items-center justify-end">
      <Link href="#hero">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-600 hover:bg-primary/80 transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
            />
          </svg>
        </div>
      </Link>
    </footer>
  )
}