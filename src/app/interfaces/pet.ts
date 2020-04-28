export interface Pet {
  petImageId: number;
  name: string;
  level: number;
  exp: number;
  trainerId: string;
  gender: 'male' | 'female';
}
