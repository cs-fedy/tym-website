"use client"

import Service from "@/models/service"
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react"
import { useStepper } from "./stepper-context"

export type SelectedServiceDetails = {
  serviceId: string
  count: number
}

type ServicesStore = {
  totalPrice: number
  services: Array<Service>
  stepsSelectedServices: Record<string, Array<SelectedServiceDetails>>
  selectedDetailsChangeHandler: (details: SelectedServiceDetails) => void
  handleSelectedService: (service: Service) => void
}

const ServicesContext = createContext({} as ServicesStore)

export function useServices() {
  return useContext(ServicesContext)
}

type ServicesProviderProps = { services: Array<Service> }

export default function ServicesProvider({
  services,
  children,
}: PropsWithChildren<ServicesProviderProps>) {
  const { currentStep } = useStepper()
  const [stepsSelectedServices, setStepsSelectedServices] = useState<
    Record<string, Array<SelectedServiceDetails>>
  >({})

  const handleSelectedService = useCallback(
    (service: Service) => {
      if (!currentStep) return
      const currentStepId = currentStep.id

      setStepsSelectedServices((prev) => {
        const stepServices = prev[currentStepId] ?? []

        const isAlreadySelected = !!stepServices.find(
          (item) => item.serviceId === service.id,
        )

        if (isAlreadySelected)
          return {
            ...prev,
            currentStepId: stepServices.filter(
              (item) => item.serviceId !== service.id,
            ),
          }

        const newService = { serviceId: service.id, count: 1 }

        return {
          ...prev,
          [currentStepId]:
            stepServices.length == 1 && !currentStep.canHaveMultipleSelect
              ? [newService]
              : [...stepServices, newService],
        }
      })
    },
    [currentStep],
  )

  const selectedDetailsChangeHandler = useCallback(
    (details: SelectedServiceDetails) => {
      if (!currentStep) return
      const currentStepId = currentStep.id

      setStepsSelectedServices((prev) => {
        const currentStepServices = prev[currentStepId]
        return {
          ...prev,
          [currentStepId]: currentStepServices.map((item) =>
            item.serviceId === details.serviceId
              ? { ...item, count: Math.max(0, item.count + details.count) }
              : item,
          ),
        }
      })
    },
    [currentStep],
  )

  const totalPrice = useMemo(
    () =>
      Object.values(stepsSelectedServices)
        .flat()
        .reduce((prev, curr) => {
          const service = services.find((item) => item.id === curr.serviceId)
          if (!service) return prev

          const serviceCount = service.onlyOnce ? 1 : curr.count
          return prev + serviceCount * service.price
        }, 0),
    [services, stepsSelectedServices],
  )

  const store = useMemo(() => {
    return {
      services,
      handleSelectedService,
      stepsSelectedServices,
      selectedDetailsChangeHandler,
      totalPrice,
    }
  }, [
    services,
    handleSelectedService,
    selectedDetailsChangeHandler,
    stepsSelectedServices,
    totalPrice,
  ])

  return (
    <ServicesContext.Provider value={store}>
      {children}
    </ServicesContext.Provider>
  )
}
