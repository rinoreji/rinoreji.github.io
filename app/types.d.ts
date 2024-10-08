export interface Product {
    id: number
    title: string
    description: string
    category: string
  }


export interface ProfInfo{
    type:string,
    name:string,
    value:string,
    startDate:Date,
    endDate:Date|undefined
}