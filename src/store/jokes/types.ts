export interface JokePayload {
  id: string;
  created_at: string;
  icon_url: string;
  updated_at: string;
  url: string;
  value: string;
}

export interface JokesState extends JokePayload {
  jokeNumber: number;
  isLoading: boolean;
}