'use client';

import { ErrorBody } from '@/components/home/error/Body';

export interface ErrorParams {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ reset }: ErrorParams) {
  return (
    <html>
      <body>
        <ErrorBody reset={reset} />
      </body>
    </html>
  );
}
