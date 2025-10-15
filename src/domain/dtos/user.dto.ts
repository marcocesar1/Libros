export interface CreateUserDto {
  name: string;
  email: string;
}

export interface UpdateUserDto extends Partial<CreateUserDto> {}
