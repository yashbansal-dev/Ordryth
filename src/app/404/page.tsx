import type { Metadata } from "next";
import { NotFoundPage } from "@/components/ui/404-page-not-found";

export const metadata: Metadata = {
  title: "404 - Page Not Found | ORDRYTH",
  description: "The page you are looking for is not available.",
};

export default function Page404() {
  return <NotFoundPage />;
}
