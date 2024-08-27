import React from 'react'


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CreditCard, MicVocal } from 'lucide-react'

interface MidsetProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export function CardMidset({Icon}:MidsetProps) {
  return (
    <Card className='max-h-[100px] cursor-pointer hover:text-zinc-800 hover:bg-zinc-300 duration-500'>
      <CardContent className='text-center flex flex-col gap-2 mt-4'>
        <div className='w-full flex justify-center'>
        <Icon width={32} height={32}/>
        </div>
        <p className="leading-7 font-bold">Card</p>
      </CardContent>
    </Card>
  )
}
