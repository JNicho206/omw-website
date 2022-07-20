export interface Book {
    id: number; 
    maintitle: string; 
    title: string;
    description: string;
    coverimg: string;
    bookimagesfoldername: string;
    pagesimages: [string];
    pagestexts: [string];
}