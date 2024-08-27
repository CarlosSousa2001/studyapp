import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

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


import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import Link from 'next/link'

export default function SubPage() {
  return (
    <div className=' h-screen flex flex-col gap-4 px-4'>

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
              <BreadcrumbLink href="/study/basic">
                Topic
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>succession</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>


      <div className='grid gap-4'>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Title</Label>
          <Input type="text" id="title" placeholder="organization" className='border-2 border-zinc-700' />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="reference">Reference</Label>
          <Input type="text" id="reference" className='border-2 border-zinc-700' />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="other">Other information</Label>
          <Input type="text" id="other" className='border-2 border-zinc-700' />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="description">Description</Label>
          <Input type="text" id="description" className='border-2 border-zinc-700' />
        </div>

        <div className="grid w-full gap-1.5">
          <Label htmlFor="message">Study</Label>
          <Textarea placeholder="Type your message here." id="message" className='max-h-[calc(100vh-40vh)]' />
        </div>


        <div className="grid w-full gap-1.5">
          <Label htmlFor="message">Resume</Label>
          <Textarea placeholder="Type your message here." id="message" className='max-h-40' />
        </div>

      </div>

      {/* <div className='w-full  mt-4'>
        <div className=' flex items-center justify-between'>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Sub study</h3>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" className='hover:text-blue-500'>New topic</Button>
            </DialogTrigger>
            <DialogContent className="max-sm:w-[calc(100%-1.6vw)] sm:max-w-[425px] rounded-lg">
              <DialogHeader>
                <DialogTitle>Create a new sub</DialogTitle>
              </DialogHeader>
              <div className='grid gap-4'>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="email">Title</Label>
                  <Input type="text" id="title" placeholder="EX: sub: context argument" className='border-2 border-zinc-700' />
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

      </div> */}
{/* 
      <div className='w-full'>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>sub: context argument</AccordionTrigger>
            <AccordionContent className='flex flex-col gap-4 '>
              <div className='cursor-pointer'>
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="message">resume</Label>
                  <Textarea placeholder="Type your message here." id="message" className='max-h-44' />
                </div>
              </div>

              <div className='w-full flex justify-end'>
                <Button variant={'outline'}>Save</Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div> */}



      <div className='w-full flex items-end justify-end py-9'>
        <Button className='w-full'>Save</Button>
      </div>
    </div>
  )
}
