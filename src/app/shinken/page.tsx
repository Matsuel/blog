"use client"

import React from 'react'
import DefaultLayout from '@/components/DefaultLayout'
import { useSearchParams } from 'next/navigation'

const Shinken = () => {

  const params = useSearchParams()

  return (
    <DefaultLayout>
      {params.get('name')}
    </DefaultLayout>
  )
}

export default Shinken