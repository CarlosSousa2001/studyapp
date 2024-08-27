import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useRouter } from 'next/navigation'

interface MidsetProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title?: String;
  route?: string;
}

export function CardMidset({ Icon, title, route }: MidsetProps) {

  const router = useRouter(); // Usa o useRouter do App Router

  const handleClick = () => {
    if (route) {
      router.push(route); // Redireciona para a rota especificada
    }
  };


  return (
    <Card
      onClick={handleClick}
      className='max-h-[100px] cursor-pointer hover:text-zinc-800 hover:bg-zinc-100 duration-500'>
      <CardContent className='text-center flex flex-col gap-2 mt-4'>
        <div className='w-full flex justify-center'>
          <Icon width={32} height={32} />
        </div>
        <p className="leading-7 font-bold">{title ? title : "Card"}</p>
      </CardContent>
    </Card>
  )
}
