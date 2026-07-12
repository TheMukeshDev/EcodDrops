export interface Transaction {
  _id: string
  status?: string
  type?: "scan" | "recycle" | "sell"
  itemName?: string
  itemType: string
  pointsEarned: number
  createdAt: string
  binId?: { name: string } | null
}
