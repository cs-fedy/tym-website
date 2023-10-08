"use client"

import Service from "@/models/service"
import Step from "@/models/step"
import { useCallback, useMemo } from "react"
import ServiceButton from "./service-button"
import { useServices } from "./services-context"
import { useStepper } from "./stepper-context"

type CurrentStepProps = {
  step: Step
  services: Array<Service>
}

export default function StepForm({ step, services }: CurrentStepProps) {
  const stepper = useStepper()
  const {
    stepsSelectedServices,
    handleSelectedService,
    selectedDetailsChangeHandler,
  } = useServices()

  const selected = useMemo(
    () => stepsSelectedServices[step.id] ?? [],
    [step, stepsSelectedServices],
  )

  const handleNextStep = useCallback(
    () =>
      stepper.handleNextStep(selected.map((selected) => selected.serviceId)),
    [selected, stepper],
  )

  return (
    <div className="w-full flex flex-col items-center space-y-16">
      <h2 className="font-bold capitalize text-4xl leading-tight text-center text-junior-black w-full max-w-xl">
        {step.name}
      </h2>

      <div className="flex items-center space-x-8">
        {services.map((service) => (
          <ServiceButton
            key={service.id}
            service={service}
            handleSelectedDetailsChange={selectedDetailsChangeHandler}
            handleClick={handleSelectedService}
            selectedDetails={selected.find(
              (item) => item.serviceId === service.id,
            )}
          />
        ))}
      </div>

      <button
        onClick={handleNextStep}
        className="px-8 py-4 bg-junior-black font-bold text-junior-white capitalize rounded-md text-center"
      >
        next step
      </button>
    </div>
  )
}
