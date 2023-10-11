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
    <div className="flex w-full flex-col items-start space-y-6">
      <div className="w-full overflow-hidden">
        <Image
          src={picture}
          alt={label}
          width={300}
          height={300}
          className="aspect-square rounded-xl object-cover"
        />
      </div>
      <div className="flex w-full flex-col items-start space-y-1">
        <h3 className="w-full max-w-md text-lg font-bold capitalize leading-tight text-junior-black">
          {fullName}
        </h3>
        <span className="mt-5 w-full max-w-sm text-lg font-medium capitalize leading-7 text-junior-gray">
          {role}
        </span>
      </div>
    </div>
  )
}
