import { useState } from 'react'

export default function FAQItem({ question, answer, isOpen: initialOpen = false }) {
  const [isOpen, setIsOpen] = useState(initialOpen)

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden fade-in">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-base md:text-lg font-medium text-deep-blue pr-4">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-china-red flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-5 pb-5 text-gray-600 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  )
}
