addEventListener("fetch", (event) => {
  event.respondWith(
    new Response("Hello world aniruddh", {
      status: 200,
      headers: {
        server: "deploy",
        "content-type": "text/plain",
      },
    }),
  );
});
