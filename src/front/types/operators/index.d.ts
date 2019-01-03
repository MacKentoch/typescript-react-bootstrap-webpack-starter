export type $SetComplement<A, A1 extends A> = A extends A1 ? never : A;

export type $Subtract<T extends T1, T1 extends object> = Pick<
  T,
  $SetComplement<keyof T, keyof T1>
>;
