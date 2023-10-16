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
    <div className="flex h-full w-full max-w-xs flex-col space-y-10 rounded-lg border border-junior-gray/10 px-6 py-3">
      <p className="break-words text-justify text-sm font-medium leading-7 text-junior-gray">
        {description}
      </p>

      <div className="flex w-full items-center space-x-4">
        <div className="w-16 overflow-hidden rounded-full shadow-sm">
          <Image
            className="aspect-square w-full"
            src={picture}
            alt={label}
            width={400}
            height={400}
          />
        </div>

        <div className="flex flex-col items-start space-y-1">
          <h4 className="text-sm font-bold capitalize leading-tight text-junior-black">
            {fullName}
          </h4>
          <span className="w-full text-sm capitalize leading-5 text-junior-gray">
            {role}
          </span>
        </div>
      </div>
    </div>
  )
}
