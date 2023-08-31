'use client';

import { ErrorBody } from '@/components/home/error/Body';

export interface GlobalErrorParams {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ reset }: GlobalErrorParams) {
  return (
    <html>
      <body>
        <ErrorBody reset={reset} />
      </body>
    </html>
  );
}
