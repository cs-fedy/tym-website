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
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-junior-red/50">
        <div className="h-10 w-10">
          <Image src={icon} alt={label} width={100} height={100} />
        </div>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <h3 className="w-full max-w-md text-center text-xl font-bold leading-tight text-junior-black">
          {title}
        </h3>
        <span className="mt-5 w-full max-w-3xl text-center text-lg font-medium leading-7 text-junior-gray">
          {description}
        </span>
      </div>
    </div>
  )
}
