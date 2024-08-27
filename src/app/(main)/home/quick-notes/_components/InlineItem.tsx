import { ArrowRightFromLine } from 'lucide-react'
import React from 'react'

export function InlineItem() {
  return (
      <div className='max-sm:max-w-full border p-2 rounded-lg hover:bg-zinc-100 cursor-pointer  text-ellipsis overflow-hidden'>
        <p className="text-lg  font-semibold truncate ">
          A modal dialog that interrupts 10 gold coins and 20 gold coins
        </p>
      </div>
  )
}
