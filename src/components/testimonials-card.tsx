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
    <div className="flex w-full flex-col space-y-10 rounded-lg border border-junior-gray/10 px-6 py-12">
      <p className="mt-5 w-full max-w-xl text-lg font-medium leading-10 text-junior-gray">
        {description}
      </p>
      <div className="flex w-full items-center space-x-4">
        <div className="h-20 w-20 overflow-hidden rounded-full shadow-sm">
          <Image src={picture} alt={label} width={400} height={400} />
        </div>
        <div className="flex flex-col items-start space-y-1">
          <h4 className="font-bold capitalize leading-tight text-junior-black">
            {fullName}
          </h4>
          <span className="mt-5 w-full text-lg capitalize leading-7 text-junior-gray">
            {role}
          </span>
        </div>
      </div>
    </div>
  )
}
