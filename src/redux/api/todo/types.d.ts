namespace TODO {
  type GetTodosRes = {
    title: string;
    description: string;
  }[];
  type GetTodosReq = void;

  type PostTodosResponse = {
    title: string;
    description: string;
  }[];

  type PostTodosRequest = {
    title: string;
    description: string;
  }[];
}
