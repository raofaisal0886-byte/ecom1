export interface StoreSettings {
  storeName: string;
  whatsappNumber: string; // digits only, with 880 country code
  phoneDisplay: string;
  email: string;
  address: string;
  bkashNumber: string;
  nagadNumber: string;
  insideDhakaFee: number;
  outsideDhakaFee: number;
  freeShippingThreshold: number; // 0 disables free shipping
  announcements: string[];
}

export const defaultSettings: StoreSettings = {
  storeName: "Blackwell BD",
  whatsappNumber: "8801714920684",
  phoneDisplay: "+880 1714-920684",
  email: "blackwellbd.official@gmail.com",
  address: "Gulshan 1, Dhaka 1212, Bangladesh",
  bkashNumber: "01714920684",
  nagadNumber: "01714920684",
  insideDhakaFee: 70,
  outsideDhakaFee: 130,
  freeShippingThreshold: 5000,
  announcements: [
    "Free delivery on orders over ৳5,000",
    "Cash on Delivery available across all 64 districts",
    "Order instantly on WhatsApp",
    "7-day easy returns & exchanges",
  ],
};

export type DeliveryZone = "inside" | "outside";

export function zoneForDistrict(district: string | undefined | null): DeliveryZone {
  return district?.trim().toLowerCase() === "dhaka" ? "inside" : "outside";
}

export function calcShipping(
  subtotal: number,
  zone: DeliveryZone,
  s: Pick<StoreSettings, "insideDhakaFee" | "outsideDhakaFee" | "freeShippingThreshold">,
): number {
  if (subtotal <= 0) return 0;
  if (s.freeShippingThreshold > 0 && subtotal >= s.freeShippingThreshold) return 0;
  return zone === "inside" ? s.insideDhakaFee : s.outsideDhakaFee;
}

/** Normalise a Bangladeshi mobile number to 8801XXXXXXXXX, or return null if invalid. */
export function normalizeBdPhone(input: string): string | null {
  const digits = input.replace(/\D/g, "");
  let local = digits;
  if (local.startsWith("880")) local = local.slice(3);
  if (local.startsWith("0")) local = local.slice(1);
  if (!/^1[3-9]\d{8}$/.test(local)) return null;
  return `880${local}`;
}

export const districts = [
  "Bagerhat", "Bandarban", "Barguna", "Barishal", "Bhola", "Bogura", "Brahmanbaria", "Chandpur",
  "Chapai Nawabganj", "Chattogram", "Chuadanga", "Cox's Bazar", "Cumilla", "Dhaka", "Dinajpur",
  "Faridpur", "Feni", "Gaibandha", "Gazipur", "Gopalganj", "Habiganj", "Jamalpur", "Jashore",
  "Jhalokati", "Jhenaidah", "Joypurhat", "Khagrachhari", "Khulna", "Kishoreganj", "Kurigram",
  "Kushtia", "Lakshmipur", "Lalmonirhat", "Madaripur", "Magura", "Manikganj", "Meherpur",
  "Moulvibazar", "Munshiganj", "Mymensingh", "Naogaon", "Narail", "Narayanganj", "Narsingdi",
  "Natore", "Netrokona", "Nilphamari", "Noakhali", "Pabna", "Panchagarh", "Patuakhali", "Pirojpur",
  "Rajbari", "Rajshahi", "Rangamati", "Rangpur", "Satkhira", "Shariatpur", "Sherpur", "Sirajganj",
  "Sunamganj", "Sylhet", "Tangail", "Thakurgaon",
];
