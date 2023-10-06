"use client"

import Service from "@/models/service"
import Step from "@/models/step"
import { useState } from "react"
import ServiceButton from "./service-button"
import { useStepper } from "./stepper-context"

type CurrentStepProps = {
  step: Step
  services: Array<Service>
}

type SelectedServiceDetails = {
  serviceId: string
  count: number
}

export default function StepForm({ step, services }: CurrentStepProps) {
  const stepper = useStepper()
  const [selected, setSelected] = useState<Array<SelectedServiceDetails>>([])

  const handleServiceSelected = (service: Service) =>
    setSelected((prev) => [...prev, { serviceId: service.id, count: 1 }])

  const handleNextStep = () => {
    stepper.handleNextStep(selected.map((selected) => selected.serviceId))
  }

  return (
    <section className="px-36 pb-16 w-full">
      <div className="w-full flex flex-col items-center space-y-16">
        <h2 className="font-bold capitalize text-4xl leading-tight text-center text-junior-black w-full max-w-xl">
          {step.name}
        </h2>

        <div className="flex items-center space-x-8">
          {services.map((service) => (
            <ServiceButton
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
    </section>
  )
}
