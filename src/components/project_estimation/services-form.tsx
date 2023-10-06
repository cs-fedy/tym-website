import Step from "@/models/step"
import { useMemo } from "react"
import { useServices } from "./services-context"
import StepForm from "./step-form"

type ServicesFormProps = { step: Step }

export default function ServicesForm({ step }: ServicesFormProps) {
  const { services } = useServices()

  const currentStepServices = useMemo(() => {
    let options: Array<string> = []
    if (Array.isArray(step.options)) options = [...options, ...step.options]
    options = [...options, ...Object.keys(step.options)]
    return services.filter((service) => options.includes(service.id))
  }, [step.options, services])

  return <StepForm key={step.id} step={step} services={currentStepServices} />
}
