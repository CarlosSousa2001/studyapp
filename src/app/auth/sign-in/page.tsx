import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'

export default function SignIn() {
  return (
    <div className='px-3 flex flex-col py-16 h-screen'>
      <div className='mb-11'>
        <h1 className="mt-8 scroll-m-20 text-2xl font-bold tracking-tight">
          Welcome back!
        </h1>
        <p className="leading-7">
          Please enter your login details below.
        </p>
      </div>

      <div className='flex flex-col gap-6'>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">username</Label>
          <Input type="email" id="email" placeholder="Email" className='border-2 border-zinc-700' />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">password</Label>
          <Input type="password" id="password" placeholder="password" className='border-2 border-zinc-700' />
        </div>
      </div>


      <div className='w-full flex justify-end mt-2'>
        <Link href="/" className='text-blue-700 text-sm font-bold hover:underline cursor-pointer'>Forgot password?</Link>
      </div>

      <div className='w-full h-full  flex flex-col items-center justify-end px-4'>
        <Link href={"/home"} className='w-full'>
          <Button className='w-full'>Submit</Button>
        </Link>
        <div className='mt-4 text-center'>
          <p className="leading-7 [&:not(:first-child)]:mt-6">Don’t have an account?</p>
          <Link href="/auth/sign-up" className='text-blue-500 text-sm font-bold hover:underline cursor-pointer'>Sign up for free.</Link>
        </div>
      </div>
    </div>
  )
}
