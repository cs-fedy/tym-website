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
    <div className="flex flex-col space-y-6 items-center">
      <div className="w-20 h-20 rounded-full bg-junior-red/50 flex items-center justify-center">
        <div className="w-10 h-10">
          <Image src={icon} alt={label} width={100} height={100} />
        </div>
      </div>
      <div className="flex flex-col space-y-2 items-center">
        <h3 className="font-bold text-xl leading-tight text-center text-junior-black w-full max-w-md">
          {title}
        </h3>
        <span className="w-full max-w-3xl text-junior-gray mt-5 text-lg text-center leading-7 font-medium">
          {description}
        </span>
      </div>
    </div>
  )
}
