'use client'
import { useRouter } from 'next/navigation'

const BackButton = ({
  route = '/',
  classCustom,
}: {
  route?: string
  classCustom?: string
}) => {
  const router = useRouter()

  return (
    <button
      className={`btn ${classCustom}`}
      type="button"
      onClick={() => router.back()}
    >
      Volver atrás
    </button>
  )
}

export default BackButton
