type TodoId = string | undefined;

type Todo = {
  _id: TodoId;
  title: string;
  activeStatus: boolean;
  endDate: string;
}

type TodosState = {
  todos: Todo[];
}

type ApiData = {
  message: string;
  status: string;
  data: Todo[];
  todo?: Todo;
  id?: TodoId;
}

type SingleApiData = {
  message: string;
  status: string;
  data: Todo;
  id?: TodoId;
}

type ApiError = {
  message: string;
};