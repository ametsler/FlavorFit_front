import Image from 'next/image'

interface Props {
  avatarUrl: string | undefined
  name: string
  email: string
  isEmailVerified: boolean
}
export function UserInfo({ avatarUrl, name, email, isEmailVerified }: Props) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={avatarUrl || '/images/avatar-placeholder.png'}
        width={36}
        height={36}
        alt={name}
        className="rounded-full"
      />
      <div>
        <p className={'font-medium'}>{name}</p>
        {!isEmailVerified && (
          <p className="text-xs opacity-60">Не подтвержден</p>
        )}
        <p className="text-xs opacity-60">{email}</p>
      </div>
    </div>
  )
}
