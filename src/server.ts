import "dotenv/config";
import fastifyApp from "./index";

(async () => {
  const app = await fastifyApp();
  const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
  app.listen({ port }, (err, address) => {
    if (err) {
      console.error("Failed to start server:", err);
      process.exit(1);
    }
    console.log(`Server running at ${address}`);
  });
})();
