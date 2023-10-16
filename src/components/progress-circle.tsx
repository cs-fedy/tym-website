import { useMemo } from "react"

type ProgressCircleProps = { progress: number }

export default function ProgressCircle({ progress }: ProgressCircleProps) {
  const arc = useMemo(() => {
    const angle = (progress / 100) * 360

    const startAngle = 0
    const endAngle = angle

    const x1 = Math.cos((startAngle - 90) * (Math.PI / 180)) * 56 + 56
    const y1 = Math.sin((startAngle - 90) * (Math.PI / 180)) * 56 + 56
    const x2 = Math.cos((endAngle - 90) * (Math.PI / 180)) * 56 + 56
    const y2 = Math.sin((endAngle - 90) * (Math.PI / 180)) * 56 + 56

    return `M 56 56 L ${x1} ${y1} A 56 56 0 ${
      angle > 180 ? 1 : 0
    } 1 ${x2} ${y2} Z`
  }, [progress])

  return (
    <div className="relative h-24 w-24 overflow-hidden rounded-full bg-junior-gray">
      <svg className="absolute z-0 h-full w-full rounded-full">
        <path d={arc} className="fill-junior-red" />
      </svg>
      <div className="z-5 absolute inset-4 flex items-center justify-center rounded-full bg-junior-white">
        <span className="text-lg font-bold leading-9 tracking-[0.3px] text-junior-red">
          {progress}%
        </span>
      </div>
    </div>
  )
}
