"use client"


import { useSearchParams } from 'next/navigation'
import React from 'react'
import DefaultLayout from '@/components/DefaultLayout'

const page = () => {

  const param = useSearchParams()

  return (
    <DefaultLayout>
      {param.get('name')}
    </DefaultLayout>
  )
}

export default page