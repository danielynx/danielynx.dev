export interface AppErrorProps {
  reset: () => void;
}

export function AppError({ reset }: AppErrorProps) {
  return (
    <>
      <h2>Something went wrong! Error</h2>
      <button
        type='button'
        onClick={() => reset()}
      >
        Try again
      </button>
    </>
  );
}
