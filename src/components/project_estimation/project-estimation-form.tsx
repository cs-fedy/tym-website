"use client"

import { useMemo } from "react"
import { useServices } from "./services-context"
import StepForm from "./step-form"
import { useStepper } from "./stepper-context"

export default function ProjectEstimationForm() {
  const { currentStep } = useStepper()
  const { services } = useServices()

  const currentStepServices = useMemo(() => {
    let options: Array<string> = []
    if (Array.isArray(currentStep.options))
      options = [...options, ...currentStep.options]
    options = [...options, ...Object.keys(currentStep.options)]
    return services.filter((service) => options.includes(service.id))
  }, [currentStep.options, services])

  return (
    <StepForm
      key={currentStep.id}
      step={currentStep}
      services={currentStepServices}
    />
  )
}
