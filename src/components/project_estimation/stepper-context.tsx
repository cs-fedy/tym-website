"use client"

import Step from "@/models/step"
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react"

type StepperStore = {
  currentStep?: Step
  steps: Record<string, Step>
  handleNextStep: (selectedOptions: Array<string>) => void
}

const StepperContext = createContext({} as StepperStore)

export function useStepper() {
  return useContext(StepperContext)
}

type StepperProviderProps = { steps: Record<string, Step> }

export default function StepperProvider({
  steps,
  children,
}: PropsWithChildren<StepperProviderProps>) {
  const [currentSteps, setCurrentSteps] = useState<Array<string>>(["services"])

  const handleNextStep = useCallback(
    (selectedOptions: Array<string>) => {
      if (currentSteps.length === 0) return

      const currentStep = steps[currentSteps[0]]
      if (!currentStep) return

      setCurrentSteps((prev) => {
        const currentStepOptions = currentStep.options

        if (Array.isArray(currentStepOptions)) return prev.slice(1)

        const nextSteps = selectedOptions.reduce((prev, curr) => {
          const nextSteps = currentStepOptions[curr]
          if (Array.isArray(nextSteps)) return [...prev, ...nextSteps]
          return [...prev, nextSteps]
        }, [] as Array<string>)

        return [...prev.slice(1), ...nextSteps]
      })
    },
    [currentSteps, steps],
  )

  const store = useMemo(() => {
    return { currentStep: steps[currentSteps[0]], steps, handleNextStep }
  }, [steps, currentSteps, handleNextStep])

  return (
    <StepperContext.Provider value={store}>{children}</StepperContext.Provider>
  )
}
