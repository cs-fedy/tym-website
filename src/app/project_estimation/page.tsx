import ProjectEstimationForm from "@/components/project_estimation/project-estimation-form"
import ServicesProvider from "@/components/project_estimation/services-context"
import StepperProvider from "@/components/project_estimation/stepper-context"
import Head from "next/head"
import { services, steps } from "./services"

export default function ProjectEstimationPage() {
  return (
    <>
      <Head>
        <link rel="canonical" href="/project_estimation" />
      </Head>

      <StepperProvider steps={steps}>
        <ServicesProvider services={services}>
          <ProjectEstimationForm />
        </ServicesProvider>
      </StepperProvider>
    </>
  )
}
