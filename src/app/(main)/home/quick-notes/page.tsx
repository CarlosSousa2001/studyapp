import React from 'react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { InlineItem } from './_components/InlineItem'

export default function QuickNotespage() {
  return (
    <div className=' h-screen flex flex-col gap-4 px-4'>

      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/home">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>quick-notes</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className='grid gap-4 '>
        {Array.from({length:6}).map((_, i) => (
          <InlineItem key={i}/>
        ))}
      </div>

    </div>
  )
}
