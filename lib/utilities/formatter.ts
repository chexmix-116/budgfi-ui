export function formatAsCurrency(amount: number){
    return `$${amount}`
}

export function formatAsDate(date: string){
    return date.split('-').join('/')
}