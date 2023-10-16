import Image from "next/image"

export type PartnerProps = {
  label: string
  src: string
}

export default function Partner({ label, src }: PartnerProps) {
  return (
    <div className="w-full">
      <Image
        className="object-fit aspect-square"
        src={src}
        alt={label}
        width={200}
        height={200}
      />
    </div>
  )
}
