"use client"

import PriceProgress from "./price-progress"
import ServicesForm from "./services-form"
import { useStepper } from "./stepper-context"
import UserForm from "./user-form"

export default function ProjectEstimationForm() {
  const { currentStep } = useStepper()

  if (!currentStep) return <UserForm />

  return (
    <section className="px-36 pb-16 w-full flex flex-col items-center space-y-8">
      <PriceProgress />
      <ServicesForm step={currentStep} key={currentStep.id} />
    </section>
  )
}
