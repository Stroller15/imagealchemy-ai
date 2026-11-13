import "server-only";
import User from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";

/**
 * Change a user's credit balance. Server-only: never import this from a
 * client component. Used by the Stripe webhook after a verified payment.
 */
export async function adjustCredits(userId: string, amount: number) {
  await connectToDatabase();

  const updated = await User.findOneAndUpdate(
    { _id: userId },
    { $inc: { creditBalance: amount } },
    { new: true }
  );
  if (!updated) throw new Error("User credits update failed");

  return JSON.parse(JSON.stringify(updated));
}
