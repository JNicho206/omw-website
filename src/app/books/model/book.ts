export interface Book {
    id: number; 
    maintitle: string; 
    title: string;
    writtinby: string;
    illistratedby: string;
    coverimg: string;
    bookimagesfoldername: string;
    pagesimages: [string];
    pagestexts: [string];
}