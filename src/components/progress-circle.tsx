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
    <div className="relative w-28 h-28 rounded-full overflow-hidden bg-junior-gray">
      <svg className="z-0 w-full h-full absolute rounded-full">
        <path d={arc} className="fill-junior-red" />
      </svg>
      <div className="z-5 absolute inset-4 bg-junior-white rounded-full flex items-center justify-center">
        <span className="font-bold text-lg text-junior-red tracking-[0.3px] leading-9">
          {progress}%
        </span>
      </div>
    </div>
  )
}
