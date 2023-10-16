import Image from "next/image"

type TestimonialsCardProps = {
  description: string
  picture: string
  label: string
  fullName: string
  role: string
}

export default function TestimonialsCard({
  description,
  picture,
  label,
  fullName,
  role,
}: TestimonialsCardProps) {
  return (
    <div className="flex h-full w-full flex-col space-y-5 rounded-lg border border-junior-gray/10 p-3">
      <p className="break-words text-center text-xs font-medium leading-6 text-junior-gray md:text-sm md:leading-7">
        {description}
      </p>

      <div className="flex w-full items-center space-x-4">
        <div className="w-12 overflow-hidden rounded-full shadow-sm">
          <Image
            className="aspect-square w-full"
            src={picture}
            alt={label}
            width={400}
            height={400}
          />
        </div>

        <div className="flex flex-col items-start space-y-1">
          <h4 className="text-xs font-bold capitalize leading-tight text-junior-black">
            {fullName}
          </h4>
          <span className="w-full text-xs capitalize leading-5 text-junior-gray">
            {role}
          </span>
        </div>
      </div>
    </div>
  )
}
