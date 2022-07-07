export interface Book {
    id: number; 
    maintitle: string; 
    title: string;
    writtinby: string;
    illistratedby: string;
    coverimg: string;
    pagesimages: [string];
    pagestexts: [string];
}