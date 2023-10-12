import Image from "next/image"

type ServiceCardProps = {
  icon: string
  label: string
  title: string
  description: string
}

export default function ServiceCard({
  icon,
  label,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-junior-red/50">
        <div className="h-8 w-8">
          <Image src={icon} alt={label} width={100} height={100} />
        </div>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <h3 className="text-md w-full max-w-md text-center font-bold leading-tight text-junior-black md:text-lg">
          {title}
        </h3>

        <span className="mt-5 w-full max-w-xs text-center text-sm font-medium leading-6 text-junior-gray md:text-base md:leading-7">
          {description}
        </span>
      </div>
    </div>
  )
}
