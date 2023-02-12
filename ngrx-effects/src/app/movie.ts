export interface Movie {
    count:number;
    next:null;
    previous:null;
    results:Results[];
}

export interface Results {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
}

//  title :string,
//     episode_id:number;
//     opening_crawl:string,
//     director:string,
//     producer:string,
//     release_date:string;