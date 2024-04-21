import { z } from "zod";

const contractValidator = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(6, { message: "Name must be 6 Char" })
    .max(255, { message: "Name must not be more then 255 Char" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .min(6, { message: "Email must be 6 Char" })
    .max(255, { message: "Email must not be more then 255 Char" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(6, { message: "Phone must be 11 Char" })
    .max(255, { message: "Phone must not be more then 255 Char" }),

  address: z
    .string({ required_error: "Address is required" })
    .trim()
    .min(6, { message: "Address must be 11 Char" })
    .max(255, { message: "Address must not be more then 255 Char" }),
  photourl: z
    .string({ required_error: "photourl is required" })
    .trim()
    .min(0, { message: "photourl must be 11 Char" })
    .max(255, { message: "photourl must not be more then 255 Char" }),
});
// module.exports = contractValidator;
export { contractValidator };
