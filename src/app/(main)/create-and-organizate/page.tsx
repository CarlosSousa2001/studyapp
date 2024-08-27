import React from 'react'

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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import Link from 'next/link'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function CreateAndOrganizatePage() {
  return (
    <div className=' h-screen flex flex-col gap-4 px-4'>


      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/home/quick-notes">
                quick-notes
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage> New</BreadcrumbPage>
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

        <div className='w-full'>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Select a theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Theme</SelectLabel>
                <SelectItem value="apple">Estudo Bíblico</SelectItem>
                <SelectItem value="banana">Estudo Estrelar</SelectItem>
                <SelectItem value="blueberry">Estudo Exemplo</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className='w-full'>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Select a topic" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
              <SelectLabel>Topic</SelectLabel>
                <SelectItem value="apple">Herança</SelectItem>
                <SelectItem value="banana">Disciplina</SelectItem>
                <SelectItem value="blueberry">persistência</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
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


      <div className='w-full flex items-end justify-end py-9'>
        <Button className='w-full'>Save</Button>
      </div>

    </div>
  )
}
