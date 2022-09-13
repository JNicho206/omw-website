export interface TeamProfile {
    id: number; 
    fullname: string; 
    title: string;
    description: string;
    type: teamtype;
    img: string;
    twitter: string;
    website: string;
    email: string;
    location: string;
}
type teamtype = 'R&D' | 'DISTRICTPARTNERS' | 'FORMERR&D' | 'FORMERDISTRICTPARTNERS'; 