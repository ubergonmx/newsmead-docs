import React from 'react'
import style from './style.module.css'

export const IFrame = ({ src }) => {
  return (
    <iframe
      className={'nx-mt-6 nx-rounded-xl nx-border dark:nx-border-zinc-800 ' + style.iframe}
      src={src}
      height="443"
    />
  )
}
