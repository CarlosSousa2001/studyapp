"use client"
import React from 'react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Download, Grip, ListStart, MessageSquareText, Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import type { DragControls } from 'framer-motion'

interface Props {
  name?: String;
  href?: String
  dragControls: DragControls;
}

export function CardITem({ name, href, dragControls }: Props) {

  const router = useRouter()

  function handlebasic() {
    router.push(`/${href}`)
  }

  return (
    <div >
      <Card className='border-2 border-zinc-700 cursor-pointer'>
        <CardHeader>
          <CardTitle onClick={() => handlebasic()} className='active:text-blue-500 hover:text-blue-600'>{name ? name : "Estudo Bíblico"}</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur. Varius viverra sit fringilla proin tristique in.

          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <MessageSquareText className='text-zinc-700 ' />
              <span className='text-zinc-700 font-bold text-xl'>10</span>
            </div>

            <div className='flex items-center gap-2'>
              <ListStart className='text-zinc-700 ' />
              <span className='text-zinc-700 font-bold text-xl'>8</span>
            </div>

            <div className='flex items-center'>
              <Download className='text-zinc-700 ' />

            </div>

            <div className='flex items-center cursor-grab select-none' onMouseDown={(e: any) => dragControls.start(e)}>
              <Grip/>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}
