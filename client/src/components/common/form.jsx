import { Label } from '@radix-ui/react-label'
import React from 'react'

const commonform = ({formControls}) => {
  return (
    <form>
      <div className='flex flex-col gap-3'>
      {
          formControls.map(controlItem=><div className='grid w-full gap-1.5' key={controlItem.name}>
            <Label></Label>
          </div>)
      }
    </div>
    </form>
    
  )
}

export default commonform
