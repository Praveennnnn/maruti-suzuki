import { useCountUp } from '../hooks/useCountUp'
import { useInViewOnce } from '../hooks/useInViewOnce'

export default function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  className = '',
}) {
  const [ref, inView] = useInViewOnce()
  const count = useCountUp(value, inView)

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}
