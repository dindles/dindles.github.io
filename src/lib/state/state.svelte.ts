type Categories = 'sound' | 'code' | 'none'
type Visibility = 'visible' | 'hidden'

class CategoryState {
  category = $state<Categories>('none')
  soundVis = $state<Visibility>('hidden')
  codeVis = $state<Visibility>('hidden')
}

export const categoryState = new CategoryState()
