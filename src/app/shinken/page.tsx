"use client"


import { useSearchParams } from 'next/navigation'
import React, { Suspense } from 'react'
import DefaultLayout from '@/components/DefaultLayout'

const Shinken = () => {

  const param = useSearchParams()

  return (
    <Suspense fallback={<div>Loading</div>}>
      <DefaultLayout>
        {param.get('name')}
      </DefaultLayout>
    </Suspense>
  )
}

export default Shinken