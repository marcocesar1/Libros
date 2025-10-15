export interface CreateBookDto {
  title: string;
  author: string;
  userId: string;
}

export interface UpdateBookDto extends Omit<CreateBookDto, "userId"> {}
