import { SkeletonLoader } from '@/shared/components/custom-ui/SkeletonLoader'

export function RecipesSidebarLoader() {
  return (
    <div className="space-y-4">
      <SkeletonLoader
        count={1}
        className="h-8 w-3xs"
      />
    </div>
  )
}
