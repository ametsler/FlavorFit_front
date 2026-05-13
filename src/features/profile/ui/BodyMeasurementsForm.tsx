import { TProfileForm } from '../types/profile-update.types'
import { ActivityLevel, NutritionGoal } from '@/__generated__/graphql'
import { Activity, Goal, Ruler, Weight } from 'lucide-react'
import Image from 'next/image'
import { Controller, UseFormReturn } from 'react-hook-form'

import { InputLabel } from '@/shared/components/custom-ui/with-label/InputLabel'
import { SelectLabel } from '@/shared/components/custom-ui/with-label/SelectLabel'

export function BodyMeasurementsForm({
  form
}: {
  form: UseFormReturn<TProfileForm, unknown, TProfileForm>
}) {
  const { register } = form
  return (
    <div className="flex items-center gap-6 rounded-xl border p-6">
      <Image
        src={`/images/${form.watch('profile.gender') === 'MALE' ? 'male' : 'female'}.svg`}
        alt={form.watch('profile.gender') || 'gender'}
        width={200}
        height={1000}
      />
      <div>
        <h2 className="mb-6 text-lg font-semibold">Замеры тела</h2>

        <div className={'mb-4'}>
          <InputLabel
            Icon={Ruler}
            label="Рост см"
            placeholder="Рост см"
            {...register('bodyMeasurement.height', {
              setValueAs: value => (value === '' ? undefined : Number(value))
            })}
          />
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <InputLabel
            Icon={Weight}
            label="Вес кг"
            placeholder="Вес кг"
            {...register('bodyMeasurement.weight', {
              setValueAs: value => (value === '' ? undefined : Number(value))
            })}
          />

          <InputLabel
            Icon={Weight}
            label="Цель веса кг"
            placeholder="Цель веса кг"
            {...register('bodyMeasurement.goalWeight', {
              setValueAs: value => (value === '' ? undefined : Number(value))
            })}
          />

          <InputLabel
            Icon={Ruler}
            label="Обхват груди см"
            placeholder="Обхват груди см"
            {...register('bodyMeasurement.chest', {
              setValueAs: value => (value === '' ? undefined : Number(value))
            })}
          />

          <InputLabel
            Icon={Ruler}
            label="Обхват талии см"
            placeholder="Обхват талии см"
            {...register('bodyMeasurement.waist', {
              setValueAs: value => (value === '' ? undefined : Number(value))
            })}
          />

          <InputLabel
            Icon={Ruler}
            label="Обхват бедер см"
            placeholder="Обхват бедер см"
            {...register('bodyMeasurement.thigh', {
              setValueAs: value => (value === '' ? undefined : Number(value))
            })}
          />

          <InputLabel
            Icon={Ruler}
            label="Обхват руки см"
            placeholder="Обхват руки см"
            {...register('bodyMeasurement.arm', {
              setValueAs: value => (value === '' ? undefined : Number(value))
            })}
          />
        </div>
        <div className={'mb-4'}>
          <Controller
            control={form.control}
            name="bodyMeasurement.nutritionGoal"
            render={({ field }) => (
              <SelectLabel
                value={field.value}
                onChange={field.onChange}
                Icon={Goal}
                label="Установите свои цели в области питания"
                options={[
                  {
                    label: 'Снижение веса',
                    value: NutritionGoal.WeightLoss
                  },
                  {
                    label: 'Поддержание веса',
                    value: NutritionGoal.Maintenance
                  },
                  {
                    label: 'Нарастить мышечную массу',
                    value: NutritionGoal.MuscleGain
                  }
                ]}
              />
            )}
          />
        </div>
        <div className={'mb-4'}>
          <Controller
            control={form.control}
            name="bodyMeasurement.activityLevel"
            render={({ field }) => (
              <SelectLabel
                value={field.value}
                onChange={field.onChange}
                Icon={Activity}
                label="Определите свой уровень активности"
                options={[
                  {
                    label: 'Сидячий образ жизни',
                    value: ActivityLevel.Sedentary
                  },
                  {
                    label: 'Легкая активность',
                    value: ActivityLevel.Light
                  },
                  {
                    label: 'Умеренная активность',
                    value: ActivityLevel.Moderate
                  },
                  {
                    label: 'Активный уровень',
                    value: ActivityLevel.Activity
                  },
                  {
                    label: 'Очень активный',
                    value: ActivityLevel.VeryActivity
                  }
                ]}
              />
            )}
          />
        </div>
      </div>
    </div>
  )
}
