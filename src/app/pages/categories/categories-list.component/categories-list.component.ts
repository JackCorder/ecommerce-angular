import { Component, inject } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../interfaces/Category.model';

@Component({
  selector: 'app-categories-list.component',
  imports: [],
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.css',
})
export class CategoriesListComponent {
  categories: Category[] = [];
  //Opcion 1 (Tradicional)
  //constructor(private categoryService: CategoryService) {}

  //Opcion 2 (Moderno)
  categoryService = inject(CategoryService);

  //Funcion al iniciar la aplicacion
  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
      //console.log(this.categories);
    });
  }
}
