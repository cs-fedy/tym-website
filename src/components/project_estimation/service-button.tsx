import Service from "@/models/service"

type ServiceButtonProps = {
  service: Service
  handleClick: (service: Service) => void
}

export default function ServiceButton({
  service,
  handleClick,
}: ServiceButtonProps) {
  return (
    <button
      type="button"
      onClick={() => handleClick(service)}
      className="px-8 py-4 bg-junior-red mt-8 font-bold text-junior-white capitalize rounded-md flex-col flex items-center space-y-4 text-center"
    >
      <i className={service.icon}></i>
      <span>{service.name}</span>
    </button>
  )
}
