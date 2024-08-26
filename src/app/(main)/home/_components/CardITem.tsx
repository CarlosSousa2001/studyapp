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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Download, Grip, ListStart, MessageSquareText, Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import type { DragControls } from 'framer-motion'

interface Props {
  name?: String;
  href?: String
}

export function CardITem({ name, href}:Props) {

  const router = useRouter()

  function handlebasic() {
    router.push(`/${href}`)
  }

  return (
    <div >
      <Card className='border-2 border-zinc-700 cursor-pointer'>
        <CardHeader>
          <CardTitle onClick={() => handlebasic()} className='active:text-blue-500 hover:text-blue-600'>{name ? name : "Estudo Estrelar"}</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur. Varius viverra sit fringilla proin tristique in.

            <Grip />
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

            <div className='flex items-center'>
              <Trash2 className='text-zinc-700 hover:text-red-500' />
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}
