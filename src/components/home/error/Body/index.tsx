export interface ErrorBodyProps {
  reset: () => void;
}

export function ErrorBody({ reset }: ErrorBodyProps) {
  return (
    <>
      <h2>Something went wrong! Error</h2>
      <button onClick={() => reset()}>Try again</button>
    </>
  );
}
