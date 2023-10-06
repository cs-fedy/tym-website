"use client"

import ServicesForm from "./services-form"
import { useStepper } from "./stepper-context"
import UserForm from "./user-form"

export default function ProjectEstimationForm() {
  const { currentStep } = useStepper()

  if (!currentStep) return <UserForm />
  return <ServicesForm step={currentStep} key={currentStep.id} />
}
