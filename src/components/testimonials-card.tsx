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
    <div className="w-full rounded-lg px-6 py-12 border border-junior-gray/10 flex flex-col space-y-10">
      <p className="w-full max-w-xl text-junior-gray mt-5 text-lg leading-10 font-medium">
        {description}
      </p>
      <div className="flex w-full items-center space-x-4">
        <div className="w-20 h-20 rounded-full overflow-hidden shadow-sm">
          <Image src={picture} alt={label} width={400} height={400} />
        </div>
        <div className="flex flex-col items-start space-y-1">
          <h4 className="font-bold capitalize leading-tight text-junior-black">
            {fullName}
          </h4>
          <span className="w-full capitalize text-junior-gray mt-5 text-lg leading-7">
            {role}
          </span>
        </div>
      </div>
    </div>
  )
}
