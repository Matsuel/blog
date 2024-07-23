"use client"


import { useSearchParams } from 'next/navigation'
import React from 'react'
import DefaultLayout from '@/components/DefaultLayout'

const Shinken = () => {

  const param = useSearchParams()

  return (
    <DefaultLayout>
      {param.get('name')}
    </DefaultLayout>
  )
}

export default Shinken