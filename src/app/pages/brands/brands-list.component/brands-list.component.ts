import { Component, inject } from '@angular/core';
import { BrandService } from '../../../services/brand.service';
import { brand } from '../../../interfaces/brand.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brands-list.component',
  imports: [RouterLink],
  templateUrl: './brands-list.component.html',
  styleUrl: './brands-list.component.css',
})
export class BrandsListComponent {
  brands: brand[] = [];
  brandService = inject(BrandService);
  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.brandService.getBrands().subscribe((data) => {
      this.brands = data;
    });
  }
}
