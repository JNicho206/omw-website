import { languagetype } from "src/app/bios/models/biographyprofile";

export interface Book {
    id: number; 
    languagetype: languagetype; 
    maintitle: string; 
    title: string;
    description: string;
    coverimg: string;
    bookimagesfoldername: string;
    pagesimages: [string];
    pagestexts: [string];
}