"use client"
import React from 'react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from 'next/link'

import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { CardITem } from '../home/_components/CardITem'


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

import { Reorder } from "framer-motion"
import { useState } from "react"
import { Item } from '../home/_components/Item'

export default function StudyPage() {

  const [items, setItems] = useState([0, 1, 2, 3])

  return (

    <div className='flex flex-col gap-4 px-4'>

      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/home">
                Subject
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Theme</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

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
                <DialogTitle>Create a new title</DialogTitle>
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


      <div className=''>
        <Reorder.Group axis="y" values={items} onReorder={setItems} className='grid gap-4'>
          {items.map((item) => (
            <Item key={item} item={item} name={"Gestão"} href={"theme/topic"}/>
          ))}
        </Reorder.Group>
      </div>

    </div>
  )
}
