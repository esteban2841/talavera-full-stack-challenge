import { CandlestickChart } from "@/atoms/CandleChart"
import axios from "axios"
import { unstable_noStore } from "next/cache"

const page = async () => {
  unstable_noStore()
  const url : string = `${process.env.BACKEND_URI || 'http://localhost:3000/api/stock/history'}`
	console.log("TCL: page -> url", url)
  // const SymbolStockHistory = await axios.get(url) 
  const SymbolStockHistory =   [
    {
      date: new Date('2025-03-04T00:55:00.000Z'),
      time: 1741049700000,
      open: '250.5000',
      close: '250.3500',
      volume: '136',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-04T00:50:00.000Z'),
      time: 1741049400000,
      open: '250.9900',
      close: '250.9740',
      volume: '8',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-04T00:45:00.000Z'),
      time: 1741049100000,
      open: '250.3500',
      close: '250.3500',
      volume: '21',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-04T00:40:00.000Z'),
      time: 1741048800000,
      open: '250.3700',
      close: '250.3500',
      volume: '2',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-04T00:30:00.000Z'),
      time: 1741048200000,
      open: '250.6000',
      close: '250.3500',
      volume: '151',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-04T00:25:00.000Z'),
      time: 1741047900000,
      open: '250.6000',
      close: '250.3660',
      volume: '27',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-04T00:20:00.000Z'),
      time: 1741047600000,
      open: '250.9900',
      close: '250.9900',
      volume: '4',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-04T00:10:00.000Z'),
      time: 1741047000000,
      open: '250.3500',
      close: '250.4000',
      volume: '22',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-04T00:05:00.000Z'),
      time: 1741046700000,
      open: '250.3600',
      close: '250.3600',
      volume: '1',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-04T00:00:00.000Z'),
      time: 1741046400000,
      open: '250.1900',
      close: '250.3300',
      volume: '506720',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T23:55:00.000Z'),
      time: 1741046100000,
      open: '250.3467',
      close: '250.3467',
      volume: '6',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T23:50:00.000Z'),
      time: 1741045800000,
      open: '250.3600',
      close: '250.3600',
      volume: '8',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T23:45:00.000Z'),
      time: 1741045500000,
      open: '251.1400',
      close: '250.3600',
      volume: '115',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T23:40:00.000Z'),
      time: 1741045200000,
      open: '250.3312',
      close: '250.3400',
      volume: '14',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T23:30:00.000Z'),
      time: 1741044600000,
      open: '250.1900',
      close: '250.5000',
      volume: '507050',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T23:25:00.000Z'),
      time: 1741044300000,
      open: '250.5000',
      close: '250.5000',
      volume: '1',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T23:20:00.000Z'),
      time: 1741044000000,
      open: '250.3000',
      close: '250.3000',
      volume: '100',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T23:05:00.000Z'),
      time: 1741043100000,
      open: '250.4938',
      close: '250.4938',
      volume: '1',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T23:00:00.000Z'),
      time: 1741042800000,
      open: '250.4000',
      close: '250.2500',
      volume: '24',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T22:55:00.000Z'),
      time: 1741042500000,
      open: '250.2172',
      close: '250.4300',
      volume: '70',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T22:50:00.000Z'),
      time: 1741042200000,
      open: '250.4000',
      close: '250.3900',
      volume: '29',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T22:45:00.000Z'),
      time: 1741041900000,
      open: '250.4700',
      close: '250.3400',
      volume: '15',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T22:40:00.000Z'),
      time: 1741041600000,
      open: '250.2600',
      close: '250.2600',
      volume: '17',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T22:35:00.000Z'),
      time: 1741041300000,
      open: '250.4700',
      close: '250.4700',
      volume: '1',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T22:30:00.000Z'),
      time: 1741041000000,
      open: '250.2100',
      close: '250.2100',
      volume: '89',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T22:25:00.000Z'),
      time: 1741040700000,
      open: '250.2100',
      close: '250.2700',
      volume: '23',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T22:20:00.000Z'),
      time: 1741040400000,
      open: '250.2100',
      close: '250.2172',
      volume: '9',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T22:15:00.000Z'),
      time: 1741040100000,
      open: '250.2500',
      close: '250.2100',
      volume: '295',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T22:10:00.000Z'),
      time: 1741039800000,
      open: '250.2500',
      close: '250.2500',
      volume: '16',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T22:05:00.000Z'),
      time: 1741039500000,
      open: '250.1900',
      close: '250.2500',
      volume: '14586',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T22:00:00.000Z'),
      time: 1741039200000,
      open: '250.4500',
      close: '250.2900',
      volume: '23',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T21:55:00.000Z'),
      time: 1741038900000,
      open: '250.4700',
      close: '250.4700',
      volume: '34',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T21:50:00.000Z'),
      time: 1741038600000,
      open: '250.4700',
      close: '250.4900',
      volume: '51',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T21:45:00.000Z'),
      time: 1741038300000,
      open: '250.4800',
      close: '250.2200',
      volume: '5',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T21:40:00.000Z'),
      time: 1741038000000,
      open: '250.3700',
      close: '250.4988',
      volume: '34',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T21:35:00.000Z'),
      time: 1741037700000,
      open: '250.2100',
      close: '250.2100',
      volume: '171',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T21:30:00.000Z'),
      time: 1741037400000,
      open: '250.2200',
      close: '250.2100',
      volume: '45',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T21:25:00.000Z'),
      time: 1741037100000,
      open: '250.2075',
      close: '250.4000',
      volume: '12',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T21:20:00.000Z'),
      time: 1741036800000,
      open: '250.2100',
      close: '250.2075',
      volume: '55',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T21:15:00.000Z'),
      time: 1741036500000,
      open: '250.1900',
      close: '250.2000',
      volume: '7',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T21:10:00.000Z'),
      time: 1741036200000,
      open: '250.1900',
      close: '250.2100',
      volume: '507760',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T21:05:00.000Z'),
      time: 1741035900000,
      open: '250.1900',
      close: '250.4900',
      volume: '12506',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T21:00:00.000Z'),
      time: 1741035600000,
      open: '250.3300',
      close: '250.1900',
      volume: '1092752',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T20:55:00.000Z'),
      time: 1741035300000,
      open: '249.6600',
      close: '250.3300',
      volume: '275852',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T20:50:00.000Z'),
      time: 1741035000000,
      open: '249.0900',
      close: '249.6900',
      volume: '68869',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T20:45:00.000Z'),
      time: 1741034700000,
      open: '248.5300',
      close: '249.1750',
      volume: '62106',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T20:40:00.000Z'),
      time: 1741034400000,
      open: '248.5100',
      close: '248.5500',
      volume: '54921',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T20:35:00.000Z'),
      time: 1741034100000,
      open: '248.9800',
      close: '248.4800',
      volume: '36658',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T20:30:00.000Z'),
      time: 1741033800000,
      open: '248.9000',
      close: '248.9700',
      volume: '34461',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T20:25:00.000Z'),
      time: 1741033500000,
      open: '249.5050',
      close: '248.9700',
      volume: '45020',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T20:20:00.000Z'),
      time: 1741033200000,
      open: '249.7100',
      close: '249.5050',
      volume: '44671',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T20:15:00.000Z'),
      time: 1741032900000,
      open: '249.8200',
      close: '249.8250',
      volume: '44391',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T20:10:00.000Z'),
      time: 1741032600000,
      open: '250.1500',
      close: '249.9000',
      volume: '37185',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T20:05:00.000Z'),
      time: 1741032300000,
      open: '250.0950',
      close: '250.0700',
      volume: '27351',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T20:00:00.000Z'),
      time: 1741032000000,
      open: '250.8020',
      close: '250.1700',
      volume: '35579',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T19:55:00.000Z'),
      time: 1741031700000,
      open: '251.1800',
      close: '250.9100',
      volume: '35605',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T19:50:00.000Z'),
      time: 1741031400000,
      open: '251.8300',
      close: '251.0750',
      volume: '35113',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T19:45:00.000Z'),
      time: 1741031100000,
      open: '252.0450',
      close: '251.7750',
      volume: '22965',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T19:40:00.000Z'),
      time: 1741030800000,
      open: '252.1300',
      close: '252.0800',
      volume: '12250',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T19:35:00.000Z'),
      time: 1741030500000,
      open: '251.8400',
      close: '252.0400',
      volume: '11503',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T19:30:00.000Z'),
      time: 1741030200000,
      open: '251.5600',
      close: '251.7750',
      volume: '13611',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T19:25:00.000Z'),
      time: 1741029900000,
      open: '251.7850',
      close: '251.5650',
      volume: '13237',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T19:20:00.000Z'),
      time: 1741029600000,
      open: '251.6500',
      close: '251.8450',
      volume: '7509',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T19:15:00.000Z'),
      time: 1741029300000,
      open: '252.0000',
      close: '251.6550',
      volume: '11729',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T19:10:00.000Z'),
      time: 1741029000000,
      open: '252.1750',
      close: '251.9400',
      volume: '37138',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T19:05:00.000Z'),
      time: 1741028700000,
      open: '251.9500',
      close: '252.1800',
      volume: '17274',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T19:00:00.000Z'),
      time: 1741028400000,
      open: '251.3400',
      close: '251.9200',
      volume: '38438',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T18:55:00.000Z'),
      time: 1741028100000,
      open: '251.1000',
      close: '251.4400',
      volume: '24080',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T18:50:00.000Z'),
      time: 1741027800000,
      open: '251.3600',
      close: '251.1750',
      volume: '16133',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T18:45:00.000Z'),
      time: 1741027500000,
      open: '251.3800',
      close: '251.3500',
      volume: '50123',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T18:40:00.000Z'),
      time: 1741027200000,
      open: '251.1465',
      close: '251.4000',
      volume: '10510',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T18:35:00.000Z'),
      time: 1741026900000,
      open: '251.2400',
      close: '251.1550',
      volume: '16197',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T18:30:00.000Z'),
      time: 1741026600000,
      open: '251.5991',
      close: '251.2300',
      volume: '14032',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T18:25:00.000Z'),
      time: 1741026300000,
      open: '252.2900',
      close: '251.4000',
      volume: '18162',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T18:20:00.000Z'),
      time: 1741026000000,
      open: '252.4401',
      close: '252.2900',
      volume: '14725',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T18:15:00.000Z'),
      time: 1741025700000,
      open: '252.0850',
      close: '252.4650',
      volume: '11678',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T18:10:00.000Z'),
      time: 1741025400000,
      open: '252.3300',
      close: '252.0800',
      volume: '23626',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T18:05:00.000Z'),
      time: 1741025100000,
      open: '252.7600',
      close: '252.4150',
      volume: '35418',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T18:00:00.000Z'),
      time: 1741024800000,
      open: '252.7500',
      close: '252.8400',
      volume: '16875',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T17:55:00.000Z'),
      time: 1741024500000,
      open: '252.8450',
      close: '252.8800',
      volume: '34796',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T17:50:00.000Z'),
      time: 1741024200000,
      open: '253.1500',
      close: '252.8450',
      volume: '18738',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T17:45:00.000Z'),
      time: 1741023900000,
      open: '253.2000',
      close: '253.2100',
      volume: '10135',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T17:40:00.000Z'),
      time: 1741023600000,
      open: '253.2800',
      close: '253.2100',
      volume: '10443',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T17:35:00.000Z'),
      time: 1741023300000,
      open: '253.0863',
      close: '253.2700',
      volume: '14254',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T17:30:00.000Z'),
      time: 1741023000000,
      open: '253.0100',
      close: '252.9800',
      volume: '10741',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T17:25:00.000Z'),
      time: 1741022700000,
      open: '253.0900',
      close: '253.0100',
      volume: '11345',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T17:20:00.000Z'),
      time: 1741022400000,
      open: '252.9200',
      close: '253.0900',
      volume: '8130',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T17:15:00.000Z'),
      time: 1741022100000,
      open: '252.6747',
      close: '252.9500',
      volume: '13368',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T17:10:00.000Z'),
      time: 1741021800000,
      open: '252.6955',
      close: '252.6500',
      volume: '12390',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T17:05:00.000Z'),
      time: 1741021500000,
      open: '252.5723',
      close: '252.6700',
      volume: '10939',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T17:00:00.000Z'),
      time: 1741021200000,
      open: '252.4250',
      close: '252.5500',
      volume: '16272',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T16:55:00.000Z'),
      time: 1741020900000,
      open: '252.4600',
      close: '252.4250',
      volume: '13729',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T16:50:00.000Z'),
      time: 1741020600000,
      open: '252.3100',
      close: '252.4900',
      volume: '26758',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T16:45:00.000Z'),
      time: 1741020300000,
      open: '251.7800',
      close: '252.2250',
      volume: '22612',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T16:40:00.000Z'),
      time: 1741020000000,
      open: '252.1400',
      close: '251.6950',
      volume: '14395',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T16:35:00.000Z'),
      time: 1741019700000,
      open: '252.5100',
      close: '252.1200',
      volume: '15524',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T16:30:00.000Z'),
      time: 1741019400000,
      open: '252.6800',
      close: '252.5525',
      volume: '29193',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T16:25:00.000Z'),
      time: 1741019100000,
      open: '253.5500',
      close: '252.6380',
      volume: '28298',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T16:20:00.000Z'),
      time: 1741018800000,
      open: '253.2850',
      close: '253.5500',
      volume: '42111',
      symbol: 'IBM'
    },
    {
      date: new Date('2025-03-03T16:15:00.000Z'),
      time: 1741018500000,
      open: '253.1300',
      close: '253.2850',
      volume: '18321',
      symbol: 'IBM'
    }
  ] 
  
	console.log("TCL: page -> SymbolStockHistory", SymbolStockHistory)

  return (
    <div className="flex w-full justify-center items-center">
      <CandlestickChart data={SymbolStockHistory.slice(0,50)} />
    </div>
  )
}

export default page
