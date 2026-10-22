import type { Metadata } from "next";
import ModernLoginSignup from "@/components/ui/modern-login-signup";

export const metadata: Metadata = {
  title: "Account | Ordryth",
  description: "Sign in or create an account for Ordryth and Imagica platforms.",
};

export default function LoginPage() {
  return <ModernLoginSignup />;
}
