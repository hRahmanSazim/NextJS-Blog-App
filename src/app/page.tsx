import { HomeCarousel, HeaderDefault } from "./HomePage";
export default async function Home() {
  const productLink = "https://dummyjson.com/products?limit=4";
  const response = await fetch(productLink);
  let products = await response.json();
  products = products.products;

  return (
    <main title="Home Page">
      {/* {products.map((product) => (
          <CarouselItem key={product.id}>
            <Image src={product.thumbnail} alt={product.title} />
          </CarouselItem>
        ))} */}
      <HeaderDefault />
      <HomeCarousel products={products} />
    </main>
  );
}
