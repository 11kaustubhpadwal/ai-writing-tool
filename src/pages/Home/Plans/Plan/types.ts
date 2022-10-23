export interface PlanType {
  planName: string;
  price: string;
  packageFeatures: { name: string }[];
  packageType: string;
  isActive: boolean;
}
