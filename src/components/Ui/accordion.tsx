"use client"

import * as React from "react"

export interface AccordionItemProps {
  title: string
  children: React.ReactNode
}

export function AccordionItem({ title, children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="border-b border-slate-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-3 font-medium text-slate-900 hover:text-slate-700 flex justify-between items-center"
      >
        {title}
        <span className="text-slate-500">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="py-2 text-slate-600 text-sm leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

export function Accordion({ children }: { children: React.ReactNode }) {
  return <div className="w-full">{children}</div>
}
