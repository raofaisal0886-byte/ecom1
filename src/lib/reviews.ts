export interface CustomerReview {
  id: string;
  name: string;
  city: string;
  text: string;
  product: string;
  rating: number;
}

/** Homepage customer love section — 20 verified-style reviews. */
export const customerReviews: CustomerReview[] = [
  {
    id: "r01",
    name: "Nusrat Jahan",
    city: "Dhanmondi, Dhaka",
    text: "The emerald kurti set is even more beautiful in person. The embroidery is so fine — I got compliments all through Eid. Delivery came the next day!",
    product: "Emerald Silk Kurti Set",
    rating: 5,
  },
  {
    id: "r02",
    name: "Tanvir Ahmed",
    city: "Chattogram",
    text: "Ordered the panjabi and chronograph over WhatsApp — they confirmed within minutes and it arrived in 3 days with Cash on Delivery. Premium packaging too.",
    product: "Ivory Cotton Panjabi",
    rating: 5,
  },
  {
    id: "r03",
    name: "Farzana Rahman",
    city: "Sylhet",
    text: "Oud Royale lasts the whole day. Finally a Bangladeshi store that feels truly luxurious from browsing to unboxing.",
    product: "Oud Royale Parfum",
    rating: 5,
  },
  {
    id: "r04",
    name: "Rafiul Hasan",
    city: "Mirpur, Dhaka",
    text: "Bought the leather tote as a gift for my wife. The stitching and hardware feel expensive — she uses it every day to the office.",
    product: "Heritage Leather Tote",
    rating: 5,
  },
  {
    id: "r05",
    name: "Sadia Islam",
    city: "Gazipur",
    text: "Jamdani saree quality is outstanding. Soft, lightweight and the gold border catches light beautifully. Blouse piece was generous.",
    product: "Handwoven Jamdani Cotton Saree",
    rating: 5,
  },
  {
    id: "r06",
    name: "Imran Chowdhury",
    city: "Rajshahi",
    text: "First time ordering online from Blackwell. WhatsApp support answered every size question patiently. Boots fit true to size.",
    product: "Chelsea Leather Boots",
    rating: 5,
  },
  {
    id: "r07",
    name: "Mehnaz Akter",
    city: "Uttara, Dhaka",
    text: "The brightening serum has visibly calmed my skin in two weeks. Packaging looks like a boutique brand, not a random marketplace seller.",
    product: "Vitamin C Brightening Serum",
    rating: 5,
  },
  {
    id: "r08",
    name: "Karim Ullah",
    city: "Khulna",
    text: "Chronograph watch arrived well packed with papers. Looks sharp with both panjabi and formal shirts. Worth every taka.",
    product: "Noir Chronograph Watch",
    rating: 5,
  },
  {
    id: "r09",
    name: "Anika Sultana",
    city: "Narayanganj",
    text: "Ordered three hijabs for my sister's wedding. Colours matched the photos exactly and fabric doesn't slip. Will order again.",
    product: "Modal Everyday Hijab",
    rating: 4,
  },
  {
    id: "r10",
    name: "Shahriar Kabir",
    city: "Cumilla",
    text: "Cash on Delivery made me confident to try them. Polo shirts are soft, hold shape after wash, and shipping to Cumilla was only 4 days.",
    product: "Piqué Cotton Polo",
    rating: 5,
  },
  {
    id: "r11",
    name: "Lamia Noor",
    city: "Banani, Dhaka",
    text: "Velvet lipstick shade is rich without drying my lips. Got so many DMs asking where I bought it — sent them straight to Blackwell.",
    product: "Velvet Matte Lipstick",
    rating: 5,
  },
  {
    id: "r12",
    name: "Abdullah Al Mamun",
    city: "Barishal",
    text: "Wallet is slim but holds cards securely. Genuine leather smell, neat stitching. Perfect Eid gift for my brother.",
    product: "Fold Leather Wallet",
    rating: 5,
  },
  {
    id: "r13",
    name: "Tasnim Rahman",
    city: "Mymensingh",
    text: "Co-ord set photos don't lie — the fit is flattering and fabric breathes in humid weather. Exchanged one size via WhatsApp, no hassle.",
    product: "Linen Co-ord Set",
    rating: 5,
  },
  {
    id: "r14",
    name: "Nayeem Hossain",
    city: "Bogura",
    text: "Sunglasses look premium and the UV claim seems solid for outdoor rides. Case and cloth included. Happy customer from Bogura.",
    product: "Aviator Sunglasses",
    rating: 4,
  },
  {
    id: "r15",
    name: "Rumana Begum",
    city: "Chittagong Hill Tracts",
    text: "Worried about delivery to our area — they still got the candle set to us safely. Scents are elegant, not overpowering.",
    product: "Amber Soy Candle Set",
    rating: 5,
  },
  {
    id: "r16",
    name: "Fahim Reza",
    city: "Mohakhali, Dhaka",
    text: "Crossbody bag is perfect for weekends. Zippers feel solid and the strap adjusts easily. Ordered a second colour for my fiancée.",
    product: "City Crossbody Bag",
    rating: 5,
  },
  {
    id: "r17",
    name: "Jannatul Ferdous",
    city: "Jessore",
    text: "Nakshi kantha cushion covers are pure art. Colours are vibrant and the running stitch is authentic. Proud to display them in our living room.",
    product: "Nakshi Kantha Cushion Cover",
    rating: 5,
  },
  {
    id: "r18",
    name: "Omar Faruk",
    city: "Sylhet",
    text: "Diffuser oil set filled our apartment with a soft oud note. Refills would be great — for now we're already planning a reorder.",
    product: "Oud Reed Diffuser",
    rating: 4,
  },
  {
    id: "r19",
    name: "Samira Haque",
    city: "Gulshan, Dhaka",
    text: "Gold-plated earrings arrived in a beautiful box. Lightweight for all-day wear and haven't tarnished after a month. Customer care is warm.",
    product: "Pearl Drop Earrings",
    rating: 5,
  },
  {
    id: "r20",
    name: "Mahbub Alam",
    city: "Rangpur",
    text: "From first WhatsApp reply to doorstep delivery, everything felt organised. Tea set looks museum-quality on our dining table. Highly recommend Blackwell BD.",
    product: "Porcelain Tea Set",
    rating: 5,
  },
];

export const REVIEWS_PER_PAGE = 6;
