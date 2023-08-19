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
    <div className="w-full flex flex-col items-start space-y-6">
      <div className="w-full overflow-hidden">
        <Image
          src={picture}
          alt={label}
          width={300}
          height={300}
          className="aspect-square rounded-xl object-cover"
        />
      </div>
      <div className="w-full flex flex-col items-start space-y-1">
        <h3 className="font-bold text-lg capitalize leading-tight text-junior-black w-full max-w-md">
          {fullName}
        </h3>
        <span className="w-full max-w-sm capitalize text-junior-gray mt-5 text-lg leading-7 font-medium">
          {role}
        </span>
      </div>
    </div>
  )
}
