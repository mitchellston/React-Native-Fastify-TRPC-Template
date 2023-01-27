// make a new trpc router and export it to be used in the approuter
import { router, publicProcedure } from "../trpc";
import { z } from "zod";
export const exampleRouter = router({
  example: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return {
        message: `Hello ${input.name}`,
      };
    }),
});
