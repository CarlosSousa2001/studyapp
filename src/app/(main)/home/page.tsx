import React from 'react'
import { CardITem } from './_components/CardITem'
import { Input } from '@/components/ui/input'
import { Search, X } from 'lucide-react'


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


export default function page() {
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

      <div className='grid gap-4 '>
        {Array.from({ length: 10 }).map((_, i) => (
          <CardITem key={i} href={"study"} />
        ))}
      </div>

    </div>
  )
}
