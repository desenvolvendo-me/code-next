// app/api/hello/route.js
import { NextResponse } from 'next/server';

export function GET(request) {
  const acceptHeader = request.headers.get('accept') || '';

  if (acceptHeader.includes('application/json')) {
    return NextResponse.json({ message: 'Hello World!' });
  } else {
    return new NextResponse('<h1>Hello World!</h1>', {
      headers: { 'Content-Type': 'text/html' },
    });
  }
}
