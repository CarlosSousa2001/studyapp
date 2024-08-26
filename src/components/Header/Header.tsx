import React from 'react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustify } from 'lucide-react'
import Link from 'next/link'

export function Header() {


  function handleReturnHome() {

  }

  return (
    <div className='w-full flex items-center justify-between h-[90px] px-3 border-b-2 border-black mb-4'>
      <Link href={"/home"} className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-5xl">
        STUDENT
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost">
            <AlignJustify />
          </Button>
        </SheetTrigger>
        <SheetContent className=''>
          <SheetHeader>
            <SheetTitle className='flex mb-8'>Opções</SheetTitle>
          </SheetHeader>
            <div>
              <ul className='flex flex-col gap-4 font-semibold'>
                <li className='hover:underline cursor-pointer'>Informações</li>
                <li className='hover:underline cursor-pointer'>Configurações</li>
                <li className='hover:underline cursor-pointer'>Contatos</li>
                <li className='hover:underline cursor-pointer'>Temas</li>
              </ul>
            </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
