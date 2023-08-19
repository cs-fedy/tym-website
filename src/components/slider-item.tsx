import Image from "next/image"

export type SliderItemProps = {
  label: string
  src: string
}

export default function SliderItem({ label, src }: SliderItemProps) {
  return (
    <div className="w-1/4">
      <Image
        className="object-fit"
        src={src}
        alt={label}
        width={200}
        height={200}
      />
    </div>
  )
}
