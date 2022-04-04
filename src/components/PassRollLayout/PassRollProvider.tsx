import React, { useCallback, useState } from 'react'
import { createContext, useContextSelector } from 'use-context-selector'

export interface ISliderDimensions {
  width?: number
  height?: number
}

export interface ISliders {
  ref: HTMLDivElement
  name: string
  dimensions: ISliderDimensions
  vertical?: boolean
  indexSelected?: number
  onChange?: (index: number) => void
}

export interface IPassRollContext {
  readonly sliders: ISliders[]
  setSliders: React.Dispatch<React.SetStateAction<ISliders[]>>
  registerSlider: (data: ISliders) => void
  unregisterSlider: (name: string) => void
  setSelected: (name: string, index: number) => void
}

export const PassRollContext = createContext({} as IPassRollContext)

export const PassRollProvider: React.FC = ({ children }) => {
  const [sliders, setSliders] = useState<ISliders[]>([])

  const updateSlider = useCallback((name: string, data: Partial<ISliders>) => {
    setSliders(old => {
      return old.map(f => (f.name === name ? { ...f, ...data } : f))
    })
  }, [])

  const registerSlider = useCallback((data: ISliders) => {
    setSliders(old => {
      const found = old.find(f => f.name === data.name)
      if (found) {
        console.error('PassRollProvider: duplicated ', data.name)
        return old.map(f => (f.name === data.name ? { ...f, ...data } : f))
      }
      return [...old, data]
    })
  }, [])

  const unregisterSlider = useCallback((name: string) => {
    setSliders(old => old.filter(f => f.name !== name))
  }, [])

  const emitChange = useCallback(
    (name: string, index: number) => {
      const found = sliders.find(f => f.name === name)
      if (found && found.onChange) found.onChange(index)
    },
    [sliders]
  )

  const setSelected = useCallback(
    (name: string, index: number) => {
      updateSlider(name, { indexSelected: index })
      emitChange(name, index)
    },
    [updateSlider, emitChange]
  )

  return (
    <PassRollContext.Provider value={{ sliders, setSliders, registerSlider, unregisterSlider, setSelected }}>
      {children}
    </PassRollContext.Provider>
  )
}

export function usePassRollRegister(): [IPassRollContext['registerSlider'], IPassRollContext['unregisterSlider']] {
  const registerSlider = useContextSelector(PassRollContext, ctx => ctx.registerSlider)
  const unregisterSlider = useContextSelector(PassRollContext, ctx => ctx.unregisterSlider)
  return [registerSlider, unregisterSlider]
}

export function usePassRoll(name: string) {
  const slider = useContextSelector(PassRollContext, ctx => {
    return ctx.sliders.find(f => f.name === name)
  })
  const setSelected = useContextSelector(PassRollContext, ctx => ctx.setSelected)

  const goTo = useCallback(
    (index: number) => {
      setSelected(name, index)
    },
    [setSelected, name]
  )
  return { slider, goTo }
}
