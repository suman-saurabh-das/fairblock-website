import NewsCard from "./NewsCards";

const newsCardsArray = [
  {
    imageUrl: "https://tinyurl.com/37cv3hr9",
    newsHeader:
      "What is fully homomorphic encryption and how will it change blockchain?",
    newsBody:
      "FHE differs from zero-knowledge technology, as it can perform computation on top of encrypted data without revealing data points.",
    newsLink: "https://blockworks.co/news/what-is-fully-homomorphic-encryption",
    site: "blockworks.co",
    type: "news",
  },
  {
    imageUrl: "https://tinyurl.com/3nk3733x",
    newsHeader:
      "Fairblock raises $2.5M for fully private blockchain transactions",
    newsBody:
      "The Fairblock team has recently secured $2.5 million from investors to bring conditional encryption to blockchains.",
    newsLink:
      "https://blockworks.co/news/fairblock-fundraising-conditional-decryption-privacy",
    site: "blockworks.co",
    type: "news",
  },
  {
    imageUrl: "https://tinyurl.com/2w54ajku",
    newsHeader: "Unlocking Arbitrum with Dynamic Confidentiality",
    newsBody:
      "From our start, one core mission has been our focus: make confidentiality accessible to developers and users where they need it most.",
    newsLink:
      "https://medium.com/@0xfairblock/unlocking-arbitrum-with-dynamic-confidentiality-c376f4dd3000",
    site: "medium.com",
    type: "news",
  },
  {
    imageUrl: "https://tinyurl.com/mty5kapn",
    newsHeader: "Accessible Encryption for Ethereum Rollups with Fairomon",
    newsBody:
      "Fairomon is a special fairy type pokemon that combines the work of Fairblock and Monomer - a framework that enables builders to create Ethereum rollups with built-in encryption with minimal lift.",
    newsLink:
      "https://ethresear.ch/t/accessible-encryption-for-ethereum-rollups-with-fairomon/20349",
    site: "ethresear.ch",
    type: "news",
  },
  {
    imageUrl: "https://tinyurl.com/4xd52t98",
    newsHeader: "Fairblock Public Testnet is Now Live",
    newsBody:
      "We’re thrilled to announce the launch of our first public testnet, FairyRing. App developers in Cosmos, and soon the Arbitrum, Optimism, and Celestia ecosystems, now have the flexibility to test integrations for programmable privacy in their application logic.",
    newsLink:
      "https://medium.com/@0xfairblock/fairblock-public-testnet-is-now-live-a487f97ea3e0",
    site: "medium.com",
    type: "news",
  },
];

const News = () => {
  return (
    <div>
      <h2 className="font-marlide font-normal mb-2 text-4xl md:text-5xl">
        News
      </h2>
      <p className="mb-4 md:mb-6">from the Fairblock ecosystem</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {newsCardsArray.map((item, index) => (
          <NewsCard
            key={index}
            imageUrl={item.imageUrl}
            newsHeader={item.newsHeader}
            newsBody={item.newsBody}
            newsLink={item.newsLink}
            site={item.site}
          />
        ))}
      </div>
    </div>
  );
};
export default News;
