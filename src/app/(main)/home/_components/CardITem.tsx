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
import { Download, ListStart, MessageSquareText, Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function CardITem({name, href}:{name?:String, href?:String}) {

  const router = useRouter()

  function handlebasic() {
    router.push(`/${href}`)
  }

  return (
    <div>
      <Card className='border-2 border-zinc-700 cursor-pointer' onClick={() => handlebasic()}>
        <CardHeader>
          <CardTitle>{name ? name : "Estudo Estrelar"}</CardTitle>
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

            <div className='flex items-center'>
              <Trash2 className='text-zinc-700 hover:text-red-500' />
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}
