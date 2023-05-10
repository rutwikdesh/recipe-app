import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients;
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  addIngredientsToShoppingList(ingredientsAdded: Ingredient[]) {
    this.ingredients.push(...ingredientsAdded);
  }
}
