export interface BiographyProfile {
    id: number; 
    fullname: string; 
    quote: string;
    jobtitle: string;
    jobs: [string];

    life: string;
    pronunciation: string;
    location: string;
    knownfor: string;

    funfact: string;
    mathhero: string;
    mathherobullet: [string];

    jobdescription: string;
    jobdescriptionbullets: [string];
    references: [string];
    referenceslinks: [string];
    mathherobulletlinks: [string];
    profileimage: string;
    profileimage2: string;
    photocreditimage: string;
    namelink: string;
    namelinktext: string;
    nametext: string;
}