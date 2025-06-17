import { Component, inject, OnInit } from '@angular/core';
import { BrandService } from '../../../services/brand.service';

import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Route, Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brands-create.component',
  imports: [ReactiveFormsModule, CommonModule, RouterModule, RouterLink],
  templateUrl: './brands-create.component.html',
  styleUrl: './brands-create.component.css',
})
export class BrandsCreateComponent implements OnInit {
  private readonly brandService = inject(BrandService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly router = inject(Router);

  brandForm!: FormGroup;
  selectedFile!: File;

  ngOnInit(): void {
    this.brandForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      logo: [null, [Validators.required]],
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.brandForm.patchValue({
      logo: this.selectedFile,
    }); //Actualiza el valor del control log
    this.brandForm.get('file')?.updateValueAndValidity(); //Revalida el control log
  }

  enviarFormulario() {
    // Marcar todos los campos como tocados para mostrar los mensajes de error
    this.brandForm.markAllAsTouched();

    if (this.brandForm.invalid) {
      return; // No enviar el formulario si es invalido
    }

    // Obtener los datos del formulario para enviarlos
    const formData = new FormData();
    formData.append('name', this.brandForm.get('name')!.value);
    formData.append('file', this.selectedFile, this.selectedFile.name); // 'file' debe coincidir con el nombre esperado para tu API

    //Llamar al servicio para enviar los datos del producto
    this.brandService.postBrand(formData).subscribe({
      next: (response) => {
        this.router.navigate(['/brands']); //Redirigir a la lista de marcas
      },
      error: (err) => {
        console.log('Error al agregar la marca', err);
      },
    });
  }
}
