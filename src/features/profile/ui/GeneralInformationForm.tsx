import { TProfileForm } from '../types/profile-update.types'
import { AvatarUpload } from './AvatarUpload'
import { Gender } from '@/__generated__/graphql'
import { CardSim, CircleSmall, Mail, UserCircle } from 'lucide-react'
import { Controller, UseFormReturn } from 'react-hook-form'

import { InputLabel } from '@/shared/components/custom-ui/with-label/InputLabel'
import { SelectLabel } from '@/shared/components/custom-ui/with-label/SelectLabel'

export function GeneralInformationForm({
  form
}: {
  form: UseFormReturn<TProfileForm, unknown, TProfileForm>
}) {
  const { register } = form

  return (
    <div className="rounded-xl border p-6">
      <h2 className="mb-6 text-lg font-semibold">Основная информация</h2>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <AvatarUpload
            onChange={url => {
              form.setValue('profile.photo', url)
            }}
            value={form.watch('profile.photo') || undefined}
          />

          <InputLabel
            Icon={CardSim}
            label="Полное имя"
            placeholder="Полное имя"
            parentClassName={'w-full'}
            {...register('profile.fullName')}
          />
        </div>

        <InputLabel
          Icon={Mail}
          label={`Электронная почта${form.watch('isEmailVerified') == true ? ' (подтверждена)' : ''}`}
          placeholder="Электронная почта"
          {...register('email')}
        />

        <div className="grid grid-cols-2 gap-2">
          <Controller
            control={form.control}
            name="profile.gender"
            render={({ field }) => (
              <SelectLabel
                value={field.value}
                onChange={field.onChange}
                Icon={CircleSmall}
                label="Gender"
                options={[
                  {
                    label: 'Мужской',
                    value: Gender.Male
                  },
                  {
                    label: 'Женский',
                    value: Gender.Female
                  }
                ]}
              />
            )}
          />
          <InputLabel
            Icon={UserCircle}
            label="Возраст"
            placeholder="Возраст"
            type="number"
            {...register('profile.age', {
              setValueAs: value => (value === '' ? undefined : Number(value))
            })}
          />
        </div>

        <label className="relative block">
          <span className="mb-1.5 block text-sm opacity-50">Биография</span>
          <textarea
            className="w-full resize-none rounded-md border bg-[#f0efef] p-3 font-mono"
            placeholder="Биография"
            {...register('profile.bio')}
          />
        </label>
      </div>
    </div>
  )
}
