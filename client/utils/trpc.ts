import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../server/src/routers/_main";
export const api = createTRPCReact<AppRouter>();
