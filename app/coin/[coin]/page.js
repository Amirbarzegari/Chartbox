import { notFound } from "next/navigation";

async function getCoin(input) {
  let res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${input.toLowerCase()}`
  );
  let coin = await res.json();
  if (coin.error) notFound();
  return {
    name: coin.name,
    description: coin.description.en,
    symbol: coin.symbol,
    image: coin.image.large,
    price: coin.market_data.current_price.usd,
  };
}

export default async function page({ params }) {
  const { name, description, symbol, image, price } = await getCoin(
    params.coin
  );
  return (
    <div className="flex flex-col max-w-lg gap-4 p-10 h-full w-full justify-center">
      <h1 className="text-xl font-bold">{name}</h1>
      <img className="size-24 mx-auto my-10" src={image} alt={name} />
      <div className="flex justify-between">
        <span className="text-gray-500">Name</span>
        <span>{name}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">Symbol</span>
        <span>{symbol.toUpperCase()}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">Price</span>
        <span>{price}$</span>
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-gray-500">Description</span>
        <p>{description}</p>
      </div>
    </div>
  );
}
