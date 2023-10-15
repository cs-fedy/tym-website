import Image from "next/image"

type MemberCardProps = {
  label: string
  picture: string
  fullName: string
  role: string
}

export default function MemberCard({
  label,
  picture,
  fullName,
  role,
}: MemberCardProps) {
  return (
    <div className="flex w-full flex-col items-start space-y-3">
      <div className="w-full overflow-hidden">
        <Image
          src={picture}
          alt={label}
          width={300}
          height={300}
          className="aspect-square rounded-xl object-cover"
        />
      </div>
      <div className="flex w-full flex-col items-start space-y-0.5">
        <h3 className="w-full max-w-md text-sm font-bold capitalize leading-tight text-junior-black md:text-base lg:text-lg">
          {fullName}
        </h3>
        <span className="mt-5 w-full max-w-sm text-sm font-medium capitalize leading-7 text-junior-gray md:text-base lg:text-lg">
          {role}
        </span>
      </div>
    </div>
  )
}
