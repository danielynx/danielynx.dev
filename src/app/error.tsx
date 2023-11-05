'use client';

import { AppError } from './_error/Error';

export interface ErrorParams {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ reset }: ErrorParams) {
  return (
    <html>
      <body>
        <AppError reset={reset} />
      </body>
    </html>
  );
}
