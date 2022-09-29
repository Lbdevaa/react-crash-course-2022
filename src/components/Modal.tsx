import React from 'react'

interface ModalProps {
  children: React.ReactNode
  title: string
  onClose: () => void
}

export default function Modal({ children, title, onClose }: ModalProps) {
  return (
    // фрагмент - тег, который не создает тег в jsx служит для группировки
    <>
      <div className='fixed bg-black/50 top-0 right-0 left-0 bottom-0' onClick={onClose} />
      <div className="w-[500px] p-5 rounded bg-white fixed top-10 left-1/2 -translate-x-1/2">
        <p className='text-2xl text-center mb-2'>{title}</p>
        {children}
      </div>
    </>
  )
}
