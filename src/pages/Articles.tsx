import NewsCard from "../components/NewsCards";

const ARTICLE_CARDS_ARRAY = [
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
    imageUrl: "https://website-0xfairblock.vercel.app/_next/image?url=https%3A%2F%2Fethresear.ch%2Fuploads%2Fdefault%2Foptimized%2F3X%2Fc%2F0%2Fc06c6733354f18254792958d1ccf872057a2fbba_2_1132x586.png&w=1920&q=75",
    newsHeader: "What happened to our decentralized private new internet?",
    newsBody: "The lack of onchain confidentiality has hindered the growth and adoption of even the most obvious applications.",
    newsLink: "https://ethresear.ch/t/what-happened-to-our-decentralized-private-new-internet/20657",
    site: "ethresear.ch",
    type: "news",
  },
  {
    imageUrl: "https://hackmd.io/_uploads/SyTZb72nA.png",
    newsHeader: "MPCs going Harder, Better, Faster, and Stronger",
    newsBody: "At Fairblock, we have implemented Joint Feldman DKG, which is one of the most widely used DKG schemes nowadays and consists of (n) parallel verifiable secret sharing (VSS) instances.",
    newsLink: "https://hackmd.io/@Fairblock/r1YoJakpA",
    site: "hackmd.io",
    type: "news",
  },
  {
    imageUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*h_3IGs2zfe6MM9D3",
    newsHeader: "Introducing Dynamic Operator Sets: Secured by Symbiotic",
    newsBody: "Fairblock's dynamic operator sets allow protocol and application developers looking for more cryptographic flexibility to leverage multiple solutions within a tailored network.",
    newsLink: "https://medium.com/@0xfairblock/introducing-dynamic-operator-sets-secured-by-symbiotic-53fd2b0ecdef",
    site: "medium.com",
    type: "news",
  },
  {
    imageUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*fA7a4_g_dy21yetbBIcrnA.png",
    newsHeader: "Fairblock Public Testnet is Now Live",
    newsBody: "We're thrilled to announce the launch of our first public testnet, FairyRing.",
    newsLink: "https://medium.com/@0xfairblock/fairblock-public-testnet-is-now-live-a487f97ea3e0",
    site: "medium.com",
    type: "news",
  },
  {
    imageUrl: "https://ethresear.ch/uploads/default/original/3X/5/f/5fa5f78d2b4b44708e03133cf29d1de097113e36.jpeg",
    newsHeader: "Accessible Encryption for Ethereum Rollups with Fairomon",
    newsBody: "Fairomon is a special fairy type pokemon that combines the work of Fairblock and Monomer - a framework that enables builders to create Ethereum rollups with built-in encryption with minimal lift.",
    newsLink: "https://ethresear.ch/t/accessible-encryption-for-ethereum-rollups-with-fairomon/20349",
    site: "ethresear.ch",
    type: "news",
  },
  {
    imageUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*MmLvof7ahhmnlWOZ",
    newsHeader: "No More Plain Vanilla DeFi - We Need More Flavors",
    newsBody: "The Vitalik doesn't support DeFi' narrative is misunderstood. DeFi accounts for the lionshare of onchain activity and supports the weight of Ethereum's security budget — Vitalik and the Ethereum community understand this.",
    newsLink: "https://medium.com/@0xfairblock/no-more-plain-vanilla-defi-we-need-more-flavors-1ce16018f7b9",
    site: "medium.com",
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
  {
    imageUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*0aJtme7AEE3OZCN-",
    newsHeader: "Encryption is the Prescription",
    newsBody: "Encryption is a prerequisite for blockchains to become the future of the internet.",
    newsLink: "https://medium.com/@0xfairblock/encryption-is-the-prescription-925beef5b226",
    site: "medium.com",
    type: "news",
  },
  {
    imageUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*kaDqFWboWQAAGtt-acvJEQ.png",
    newsHeader: "Fresh Wave of Privacy-Enhancing",
    newsBody: "Fairblock and Secret Network Partner To Develop New Generation of Privacy-Enhancing Products.",
    newsLink: "https://medium.com/@0xfairblock/fresh-wave-of-privacy-enhancing-technologies-d39008ec7eda",
    site: "medium.com",
    type: "news",
  },
  {
    imageUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*FiCnyeT7PkLHq5ymsyJRqg.png",
    newsHeader: "Fast Fairy Series: Programmable Privacy in DeFi",
    newsBody: "Decentralized finance is a radically new and distinct means of conducting financial activities.",
    newsLink: "https://medium.com/@0xfairblock/fast-fairy-series-programmable-privacy-in-defi-102b16ee8245",
    site: "medium.com",
    type: "news",
  },
  {
    imageUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*gNvXTdwBIvW9EZnhDt5fmw.png",
    newsHeader: "Fast Fairy Series: Three Cryptographic Schemes Advancing Programmable Privacy",
    newsBody: "Here we'll be taking a deeper look into all three schemes, their unique properties, and what benefits they offer.",
    newsLink: "https://medium.com/@0xfairblock/fast-fairy-series-three-cryptographic-schemes-advancing-programmable-privacy-57637c78b0d6",
    site: "medium.com",
    type: "news",
  },
  {
    imageUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*WCB1z7nqszzz0vLc",
    newsHeader: "Fast Fairy Series: Fairblock's Vision",
    newsBody: "Fairblock Delivers the Practical Privacy Tools Enabling Novel Web3 Applications",
    newsLink: "https://medium.com/@0xfairblock/fast-fairy-series-fairblocks-vision-340c37769ccf",
    site: "medium.com",
    type: "news",
  },
  {
    imageUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*-72ly7032FCqPhzP",
    newsHeader: "Fast Fairy Series: Private Governance",
    newsBody: 'In the second installment of the Fast Fairy Series, we delve into "private governance", an application made possible by Fairblock infrastructure.',
    newsLink: "https://medium.com/@0xfairblock/fast-fairy-series-private-governance-b41b5faa0613",
    site: "medium.com",
    type: "news",
  },
  {
    imageUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*0Pdpg3fVY1zeVdfcNFkQTw.png",
    newsHeader: "Fast Fairy Series: FairyRing Architecture I",
    newsBody: "In the Fast Fairy Series, we are going to publish a series of articles to cover our architecture,design, potential applications, cryptography, and our long-term vision.",
    newsLink: "https://medium.com/@0xfairblock/fast-fairy-series-fairyring-architecture-i-d5293e0ce665",
    site: "medium.com",
    type: "news",
  },
];

const Articles = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8 lg:py-12">
      <h2 className="font-marlide text-4xl lg:text-5xl text-center mb-8 xl:mb-12">
        Articles & Research
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {ARTICLE_CARDS_ARRAY.map((item, index) => (
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
export default Articles;
