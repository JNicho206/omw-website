export interface TeamProfile {
    id: number; 
    fullname: string; 
    description: string;
    type: teamtype;
    img: string;
}
type teamtype = 'R&D' | 'DISTRICTPARTNERS' | 'FORMERR&D' | 'FORMERDISTRICTPARTNERS'; 