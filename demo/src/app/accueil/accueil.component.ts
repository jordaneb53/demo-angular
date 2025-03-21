import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



type categorie = { titre: string, images: string[] }
@Component({
  selector: 'app-accueil',
  imports: [FormsModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})

export class AccueilComponent {

  urlImageSaisie = "";

  ngOnInit() {

    const enregistrements = localStorage.getItem("categories");
    const categoriesParDefaut: categorie[] = [
      {
        titre: "A",
        images: [],
      },
      {
        titre: "B",
        images: [],
      },
      {
        titre: "C",
        images: [],
      },
      {
        titre: "D",
        images: [],
      },
      {
        titre: "E",
        images: [],
      }
    ];
    if (enregistrements == null) {
      localStorage.setItem("categories", JSON.stringify(categoriesParDefaut));
    }
    this.categories = JSON.parse(localStorage.getItem("categories")!);
  }

  categories: categorie[] = [];


  onClickAjouterImage() {
    this.categories[0].images.push(this.urlImageSaisie);
    this.urlImageSaisie = "";
  }


}
