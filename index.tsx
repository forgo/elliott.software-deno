/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { h, renderSSR } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";

function App() {
  return (
    <html>
      <head>
        <title>Elliott</title>
      </head>
      <body>
        <h1>elliott.software</h1>
        <p>This should only show up in preview deployments.</p>
        <p>More development</p>
      </body>
    </html>
  );
}

function handler(req) {
  const html = renderSSR(<App />);
  return new Response(html, {
    headers: {
      "content-type": "text/html",
    },
  });
}

serve(handler);