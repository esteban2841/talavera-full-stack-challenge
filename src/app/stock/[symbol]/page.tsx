import axios from "axios"
import { notFound } from "next/navigation"

const Page = async ({params}: {params : {symbol: string}}) => {
    const symbol = params.symbol
    
    if(!symbol) notFound()
    const url : string = `${process.env.BACKEND_URI || 'http://localhost:3000/api/stock/history/' + symbol}`
	console.log("TCL: Page -> url", url)

    const SymbolStockHistory = await axios.get(url) 
	console.log("TCL: Page -> SymbolStockHistory", SymbolStockHistory)
    

  return (
    <div className='flex flex-col w-full justify-center items-center py-20'>
    </div>
  )
}

export default Page