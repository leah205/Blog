export type ValidationError = Error & {
  errors?: string[];
};
