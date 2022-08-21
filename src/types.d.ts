declare namespace Api {
  interface PaginatedQuery {
    nextPage?: number;
  }

  interface PhotoPage extends PaginatedQuery {
    data: Photo[];
  }

  interface Photo {
    id: number;
    albumId: Album["id"];
    title: string;
    url: string;
    thumbnailUrl: string;
  }

  interface AlbumPage extends PaginatedQuery {
    data: Album[];
  }

  interface Album {
    id: string;
    userId: User["id"];
    title: string;
  }

  interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    address: Address;
    company: Company;
  }

  interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
  }

  interface Geo {
    lat: string;
    lng: string;
  }

  interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}
