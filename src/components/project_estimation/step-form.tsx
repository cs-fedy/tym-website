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
    <div className="flex w-full flex-col items-center space-y-16">
      <h2 className="w-full max-w-xl text-center text-4xl font-bold capitalize leading-tight text-junior-black">
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
        className="rounded-md bg-junior-black px-8 py-4 text-center font-bold capitalize text-junior-white"
      >
        next step
      </button>
    </div>
  )
}
