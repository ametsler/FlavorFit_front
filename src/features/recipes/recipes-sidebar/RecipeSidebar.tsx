import { TRecipeFilters } from './recipe-sidebar-menu.types'
import { GetDishTypesDocument } from '@/__generated__/graphql'
import { useQuery } from '@apollo/client/react'
import { CookingPot, Search } from 'lucide-react'

import { RecipesSidebarLoader } from '@/features/recipes/recipes-sidebar/RecipesSidebarLoader'

import { SidebarMenuAccordion } from '@/shared/components/custom-ui/sidebar-menu-accordion/SidebarMenuAccordion'
import { ISidebarMenuAccordionItem } from '@/shared/components/custom-ui/sidebar-menu-accordion/sidebar-menu-accordion.types'
import { InputLabel } from '@/shared/components/custom-ui/with-label/InputLabel'

interface Props {
  filters: TRecipeFilters
  searchTerm: string
  setSearchTerm: (term: string) => void
  setFilters: (filters: Partial<TRecipeFilters>) => void
}

export function RecipeSidebar({
  filters,
  searchTerm,
  setSearchTerm,
  setFilters
}: Props) {
  const setActiveFilter = (key: keyof TRecipeFilters, value: string) => {
    setFilters({
      [key]:
        value === '' ||
        (filters.hasOwnProperty(key) && value === filters.category)
          ? null
          : value
    } as unknown as Partial<TRecipeFilters>)
  }

  const { data, loading } = useQuery(GetDishTypesDocument)

  const recipeSidebarMenuData = [
    {
      isInitialOpen: true,
      icon: CookingPot,
      name: 'Национальность',
      key: 'category',
      items: Object.values(data?.dishTypes || [])
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
        .map(d => ({
          label: d.title,
          value: d.title,
          badgeValue: ''
        }))
    }
  ] as ISidebarMenuAccordionItem<keyof TRecipeFilters>[]

  return (
    <aside className="w-full max-w-64 space-y-6 rounded-2xl bg-white px-3 py-4">
      <InputLabel
        Icon={Search}
        placeholder="Искать по названию"
        className="bg-gray-100"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      {!data || loading ? (
        <RecipesSidebarLoader />
      ) : (
        <SidebarMenuAccordion
          data={recipeSidebarMenuData}
          values={filters}
          onValueChange={setActiveFilter}
        />
      )}
    </aside>
  )
}
