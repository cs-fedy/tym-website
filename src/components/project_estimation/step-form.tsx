"use client"

import Service from "@/models/service"
import Step from "@/models/step"
import { useCallback, useState } from "react"
import ServiceButton from "./service-button"
import { SelectedServiceDetails, useServices } from "./services-context"
import { useStepper } from "./stepper-context"

type CurrentStepProps = {
  step: Step
  services: Array<Service>
}

export default function StepForm({ step, services }: CurrentStepProps) {
  const stepper = useStepper()
  const { handleNewSelectedServices } = useServices()

  const [selected, setSelected] = useState<Array<SelectedServiceDetails>>([])

  const handleServiceSelected = (service: Service) =>
    setSelected((prev) => {
      const isAlreadySelected = !!prev.find(
        (item) => item.serviceId === service.id,
      )

      if (isAlreadySelected)
        return prev.filter((item) => item.serviceId !== service.id)

      const newService = { serviceId: service.id, count: 1 }
      return prev.length == 1 && !step.canHaveMultipleSelect
        ? [newService]
        : [...prev, newService]
    })

  const handleNextStep = () => {
    handleNewSelectedServices(selected)
    stepper.handleNextStep(selected.map((selected) => selected.serviceId))
  }

  const selectedDetailsChangeHandler = useCallback(
    (details: SelectedServiceDetails) => {
      setSelected((prev) =>
        prev.map((item) =>
          item.serviceId === details.serviceId
            ? { ...item, count: Math.max(0, item.count + details.count) }
            : item,
        ),
      )
    },
    [],
  )

  return (
    <div className="w-full flex flex-col items-center space-y-16">
      <h2 className="font-bold capitalize text-4xl leading-tight text-center text-junior-black w-full max-w-xl">
        {step.name}
      </h2>

      <div className="flex items-center space-x-8">
        {services.map((service) => (
          <ServiceButton
            selectedDetails={selected.find(
              (item) => item.serviceId === service.id,
            )}
            handleSelectedDetailsChange={selectedDetailsChangeHandler}
            handleClick={handleServiceSelected}
            service={service}
            key={service.id}
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
