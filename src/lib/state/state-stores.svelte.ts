type Categories = 'sound' | 'code' | 'none';
type Visibility = 'visible' | 'hidden';

// Module-level reactive state using Svelte 5 runes
// Using a class to allow mutations from imported modules
class CategoryState {
  category = $state<Categories>('none');
  soundVis = $state<Visibility>('hidden');
  codeVis = $state<Visibility>('hidden');
}

export const categoryState = new CategoryState();
