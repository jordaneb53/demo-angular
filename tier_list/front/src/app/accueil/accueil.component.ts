import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
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
  categories: categorie[] = [];
  categorieSelectionne = 0;
  nomCategorieSaisie = "";
  http = inject(HttpClient);
  ngOnInit() {

    this.http
      .get<categorie[]>("http://localhost:5000/categories")
      .subscribe(categories => this.categories = categories);

    // const enregistrements = localStorage.getItem("categories");
    // const categoriesParDefaut: categorie[] = [
    //   {
    //     titre: "A",
    //     images: [],
    //   },
    //   {
    //     titre: "B",
    //     images: [],
    //   },
    //   {
    //     titre: "C",
    //     images: [],
    //   },
    //   {
    //     titre: "D",
    //     images: [],
    //   },
    //   {
    //     titre: "E",
    //     images: [],
    //   }
    // ];
    // if (enregistrements == null) {
    //   localStorage.setItem("categories", JSON.stringify(categoriesParDefaut));
    // }

    // this.categories = JSON.parse(localStorage.getItem("categories")!);
  }




  onClickAjouterImage() {
    this.categories[this.categorieSelectionne].images.push(this.urlImageSaisie);
    this.urlImageSaisie = "";
    this.sauvegarde();
  }

  deplacerImage(indexCategorie: number, indexImage: number, descendre: boolean = true) {
    this.categories[indexCategorie + (descendre ? 1 : -1)].images.push(this.categories[indexCategorie].images[indexImage]);
    this.categories[indexCategorie].images.splice(indexImage, 1);
    this.sauvegarde();
  }

  supprimerImage(indexCategorie: number, indexImage: number) {
    this.categories[indexCategorie].images.splice(indexImage, 1);
    this.sauvegarde();

  }
  supprimerCategorie(indexCategorie: number) {
    this.categories.splice(indexCategorie, 1);
    this.sauvegarde();
  }
  sauvegarde() {
    localStorage.setItem("categories", JSON.stringify(this.categories));
  }

  onClickAjouterCategorie() {
    this.categories.push({ titre: this.nomCategorieSaisie, images: [] });
    this.nomCategorieSaisie = "";
    this.sauvegarde();
  }
}
