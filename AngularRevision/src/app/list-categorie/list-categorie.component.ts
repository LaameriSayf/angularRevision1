  import { Component } from '@angular/core';
import * as e from 'express';
  import { Categorie } from '../Models/Categorie';

  @Component({
    selector: 'app-list-categorie',
    templateUrl: './list-categorie.component.html',
    styleUrls: ['./list-categorie.component.css']
  })
  export class ListCategorieComponent {
    attribut!:String;
    searchTitle: string="";
    categories:Categorie[]=[{"id":1,"title":"Grand électroménager",
    "image":"assets/images/1.jpg", "description":"Sed tamen haec cum ita tutius observentur, quidam vigore artuum inminuto rogati ad nuptias ubi aurum dextris manibus cavatis offertur, inpigre vel usque Spoletium pergunt. haec nobilium sunt instituta.",
    "available":true},
    {"id":2,"title":"Petit électroménager",
    "image":"assets/images/2.jpg", "description":"Sed tamen haec cum ita tutius observentur, quidam vigore artuum inminuto rogati ad nuptias ubi aurum dextris manibus cavatis offertur, inpigre vel usque Spoletium pergunt. haec nobilium sunt instituta.",
    "available":true},
    {"id":3,"title":"Produits informatiques",
    "image":"assets/images/3.jpg", "description":"Sed tamen haec cum ita tutius observentur, quidam vigore artuum inminuto rogati ad nuptias ubi aurum dextris manibus cavatis offertur, inpigre vel usque Spoletium pergunt. haec nobilium sunt instituta.",
    "available":true},
    {"id":4,"title":"Smart Phones", "image":"assets/images/4.jpg",
    "description":"Sed tamen haec cum ita tutius observentur, quidam vigore artuum inminuto rogati ad nuptias ubi aurum dextris manibus cavatis offertur, inpigre vel usque Spoletium pergunt. haec nobilium sunt instituta.", "available":true},
    {"id":5,"title":"TV, images et son",
    "image":"assets/images/5.jpg", "description":"Sed tamen haec cum ita tutius observentur, quidam vigore artuum inminuto rogati ad nuptias ubi aurum dextris manibus cavatis offertur, inpigre vel usque Spoletium pergunt. haec nobilium sunt instituta.",
    "available":true},
    {"id":6,"title":"Produits voiture", "image":"assets/images/6.jpg",
    "description":"Sed saif tamen haec cum ita tutius observentur, quidam vigore artuum inminuto rogati ad nuptias ubi aurum dextris manibus cavatis offertur, inpigre vel usque Spoletium pergunt. haec nobilium sunt instituta.","available":false}]
filtredlist: any;
title!:String;
    
    constructor(){
      this.filteredCategories;
    }
     filteredCategories(): Categorie[] {
      if (this.searchTitle==this.title) {
        return this.categories;
      }
      return this.categories.filter((categorie) =>
        categorie.title.toLowerCase().includes(this.searchTitle.toLowerCase())
      );
    }
  
    
    AfficherDescription(description:String) {
      alert(description);
    }
    change() {
     
        this.attribut="red";
        
    }
    reset(){
      this.attribut="black"
    }
  }