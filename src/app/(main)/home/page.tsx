"use client"
import React, { useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Brain, Lightbulb, MicVocal, RefreshCw, Search, X, Zap } from 'lucide-react'


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

import { Reorder, useMotionValue } from "framer-motion"
import { useState } from "react"
import { CardMidset } from './_components/CardMidset'
import { Item } from './_components/Item'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

//https://www.framer.com/motion/reorder/
export default function page() {


  const [items, setItems] = useState<number[]>([0, 1, 2, 3]); // Valor padrão


  useEffect(() => {
    // Verifica se o código está sendo executado no lado do cliente
    if (typeof window !== "undefined") {
      const savedItems = localStorage.getItem("reorderedItems");
      if (savedItems) {
        setItems(JSON.parse(savedItems));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("reorderedItems", JSON.stringify(items));
    }
  }, [items]);

  return (

    <div className='flex flex-col gap-4 px-4'>

      <div className='flex items-center justify-between w-full gap-4'>

        <div className='flex items-center w-full'>
          <Input className='border border-zinc-700 mr-6' placeholder='Pesquisar' />
          <Search className='-ml-14' />
        </div>

        <div>


          <Dialog>
            <DialogTrigger asChild>
              <Button>Novo</Button>
            </DialogTrigger>
            <DialogContent className="max-sm:w-[calc(100%-1.6vw)] sm:max-w-[425px] rounded-lg">
              <DialogHeader>
                <DialogTitle>Create a new topic</DialogTitle>
              </DialogHeader>
              <div className='grid gap-4'>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="email">Title</Label>
                  <Input type="text" id="title" placeholder="organization" className='border-2 border-zinc-700' />
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="description">Description</Label>
                  <Input type="text" id="description" className='border-2 border-zinc-700' />
                </div>

              </div>
              <DialogFooter>
                <Button type="submit">Save</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

        </div>
      </div>

      <div className='grid grid-cols-2 gap-4'>
        <CardMidset Icon={MicVocal} />
        <CardMidset Icon={Lightbulb}/>
        <CardMidset Icon={Zap } title={"quick-notes"} route='/home/quick-notes'/>
        <CardMidset Icon={Brain} />
      </div>

      <div className=''>
        <Reorder.Group axis="y" values={items} onReorder={setItems} className='grid gap-4'>
          {items.map((item) => (
            <Item key={item} item={item} href={"theme"}/>
          ))}
        </Reorder.Group>
      </div>

    </div>
  )
}
