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

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import { Label } from '@/components/ui/label'

export default function BasicPage() {
  return (
    <div className='flex flex-col gap-4 px-4'>

      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                Subject
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/study">
                Theme
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Topic</BreadcrumbPage>
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

      <div>
        <h1 className="mt-2 scroll-m-20 text-xl font-bold tracking-tight">
          Estudo Bíblico/Gestão
        </h1>
      </div>

      <div className='w-full'>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>succession</AccordionTrigger>
            <AccordionContent className='flex flex-col gap-4 '>
              <div className='cursor-pointer'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <span>1° Estudo</span>
                    <p className="leading-7 hover:text-blue-500">Herança x sucessão</p>
                  </div>
                  <span>22/12/2024</span>
                </div>
                <p className="leading-7 text-zinc-500">animated by default, but you can disable it if you</p>
              </div>

              <div className='cursor-pointer'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <span>2° Estudo</span>
                    <p className="leading-7">Rebeldia</p>
                  </div>
                  <span>22/12/2024</span>
                </div>
                <p className="leading-7 text-zinc-500">animated by default, but you can disable it if you</p>
              </div>

              <div className='w-full flex justify-end'>
                <Link href={"/study/basic/sub"}>
                  <Button variant={'outline'}>Novo</Button>
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Leadership</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Discipline</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

    </div>
  )
}
