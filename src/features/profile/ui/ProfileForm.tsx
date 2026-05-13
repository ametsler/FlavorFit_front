'use client'

import { TProfileForm } from '../types/profile-update.types'
import { BodyMeasurementsForm } from './BodyMeasurementsForm'
import { GeneralInformationForm } from './GeneralInformationForm'
import {
  GetProfileQuery,
  Role,
  UpdateProfileDocument
} from '@/__generated__/graphql'
import { useMutation } from '@apollo/client/react'
import { User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { HeadingWithIcon } from '@/shared/components/custom-ui/heading-with-icon/HeadingWithIcon'
import { Button } from '@/shared/components/ui/button'

export function ProfileForm({ data }: { data: GetProfileQuery }) {
  const form = useForm<TProfileForm>({
    mode: 'onChange',
    defaultValues: {
      email: data?.me?.email ?? '',
      isEmailVerified: data?.me?.isEmailVerified ?? false,
      profile: data?.me?.profile ?? {},
      bodyMeasurement: data?.me?.bodyMeasurement ?? {}
    }
  })

  const [updateProfile, { loading }] = useMutation(UpdateProfileDocument, {
    onCompleted() {
      toast.success('Профиль обновлен')
    }
  })

  const submit = form.handleSubmit(data => {
    const cleanedData = {
      ...data,
      role: Role.User,
      profile: data.profile
        ? Object.fromEntries(
            Object.entries(data.profile).filter(([key]) => key !== '__typename')
          )
        : {},
      bodyMeasurement: data.bodyMeasurement
        ? Object.fromEntries(
            Object.entries(data.bodyMeasurement).filter(
              ([key]) => key !== '__typename'
            )
          )
        : {}
    }

    updateProfile({
      variables: {
        data: cleanedData
      }
    })
  })

  return (
    <div className="rounded-xl bg-white p-6">
      <form
        onSubmit={submit}
        className="space-y-6"
      >
        <div className="flex items-center justify-between">
          <HeadingWithIcon Icon={User}>Личная информация</HeadingWithIcon>
          <div className="flex justify-end gap-3">
            <Button
              variant="outline"
              type="button"
              onClick={() => form.reset()}
            >
              Отменить
            </Button>

            <Button
              variant="accent"
              disabled={loading}
            >
              Сохранить
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <GeneralInformationForm form={form} />
          <BodyMeasurementsForm form={form} />
        </div>
      </form>
    </div>
  )
}
