import { z } from "zod";

export const statusResolver = (value: string | undefined, ctx: z.RefinementCtx) => {
    if (value === undefined || value.trim() === "") {
        return "void" as const;
    } else if (ctx.path.length > 0) {
        return "invalid" as const;
    }
    return "valid" as const;
};
