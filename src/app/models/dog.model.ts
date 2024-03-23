export interface Dog {
    id: number;
    name: string;
    breed: string;
    age: number;
    gender: string;
    price: number;
    image: string;
    sold: boolean;
    allergies?: string[];
    disability?: boolean;
    ownerId: number;
  }