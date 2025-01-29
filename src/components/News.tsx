import NewsCard from "./NewsCards";

const NEWS_CARDS_ARRAY = [
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*nqeeFwC-zmdEylSXtIMGQg.png",
    newsHeader: "Trustless and Unstoppable Al with Fairblock and Ritual",
    newsBody:
      "Fairblock and Ritual are collaborating for Trustless and Unstoppable Al economies through decentralized confidential computing.",
    newsLink:
      "https://medium.com/@0xfairblock/confidential-rituals-trustless-and-unstoppable-ai-with-dynamic-confidentiality-95ecaee66e4c",
    site: "medium.com",
    type: "news",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/0*Fadf2P2PH7_UvkNa",
    newsHeader:
      "Permissionless and performant confidential computing for Arbitrum ecosystem",
    newsBody:
      "Fairblock and Arbitrum are collaborating for permissionless and efficient confidential computing in EVM L2s.",
    newsLink:
      "https://medium.com/@0xfairblock/unlocking-arbitrum-with-dynamic-confidentiality-c376f4dd3000",
    site: "medium.com",
    type: "news",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/0*7TfdDRazLdM0eumI",
    newsHeader:
      "Native Encryption for the OP Superchain with Camp and Fairblock",
    newsBody:
      "Fairblock and Camp Network are collaborating to bring confidential computing to Optimism Superchain and Camp Ecosystem of Al and consumer applications.",
    newsLink:
      "https://medium.com/@0xfairblock/native-encryption-for-the-op-superchain-with-camp-and-fairblock-e003dc62c648",
    site: "medium.com",
    type: "news",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/0*3Yg5EJeVq7nI3GYu",
    newsHeader: "Encrypt Every Rollup",
    newsBody:
      "Bringing Dynamic Confidentiality to Rollup Developers with AltLayer.",
    newsLink:
      "https://medium.com/@0xfairblock/encrypting-every-rollup-ae95cfcad848",
    site: "medium.com",
    type: "news",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*iaGYDRZZiiYQ_TM4Mo_zpw.png",
    newsHeader: "Announcing FairyCoW: Encrypted Orders for CoW Swap",
    newsBody:
      "FairyCoW improves onchain trading experiences by increasing capital efficiency and protecting against pre-execution order leakage without reliance on centralized parties.",
    newsLink:
      "https://medium.com/@0xfairblock/announcing-fairycow-encrypted-orders-for-cow-swap-2a5ae0bd0785",
    site: "medium.com",
    type: "news",
  },
  {
    imageUrl:
      "https://blockworks.co/_next/image?url=https%3A%2F%2Fblockworks-co.imgix.net%2Fwp-content%2Fuploads%2F2024%2F03%2FED_hacks_20231105d-1-1.jpg&w=1920&q=75",
    newsHeader:
      "What is fully homomorphic encryption and how will it change blockchain?",
    newsBody:
      "FHE differs from zero-knowledge technology, as it can perform computation on top of encrypted data without revealing data points.",
    newsLink: "https://blockworks.co/news/what-is-fully-homomorphic-encryption",
    site: "blockworks.co",
    type: "news",
  },
  {
    imageUrl:
      "https://website-0xfairblock.vercel.app/_next/image?url=https%3A%2F%2Fhackmd.io%2F_uploads%2FBJo97G8pC.png&w=1920&q=75",
    newsHeader: "Multimodal Cryptography Series - Accountable MPC + TEE",
    newsBody:
      "Trusted Execution Environment (TEE) is a secure area within the memory and CPU of a device (computer or server), isolated from the rest of the system through encryption.",
    newsLink: "https://hackmd.io/@Fairblock/rkSiU78TR",
    site: "hackmd.io",
    type: "news",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*zeb3NhzUNr9qeioTVRLmwQ.png",
    newsHeader: "Fairblock raises 2.5M",
    newsBody:
      "Fairblock raises 2.5M to build toward conditional decryption and programmable privacy.",
    newsLink:
      "https://medium.com/@0xfairblock/fairblock-raises-2-5m-to-build-toward-conditional-decryption-and-pre-execution-privacy-8f652877bf95",
    site: "medium.com",
    type: "news",
  },
];

const News = () => {
  return (
    <div className="px-6 py-12 md:py-20">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="font-marlide font-normal mb-2 text-4xl md:text-5xl">
          News
        </h2>
        <p className="font-semibold mb-4 md:mb-6 text-neutral-600 dark:text-neutral-400">
          from the Fairblock ecosystem
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {NEWS_CARDS_ARRAY.map((item, index) => (
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
    </div>
  );
};
export default News;
