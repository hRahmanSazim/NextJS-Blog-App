import { Header } from "@/components/HomePage";

export default function ShopLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    tag: string;
    item: string;
  };
}) {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
}
