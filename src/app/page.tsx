import {
    Crosshair,
    Menu,
    MoveUpRight,
    TrendingUp,
    Triangle,
    Zap,
} from "lucide-react"
import Link from "next/link"

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="flex justify-between items-center h-20 border-b px-4">
                <h1 className="text-2xl"> PropMind</h1>
                <nav className="flex gap-4 items-center">
                    <Link
                        className="border rounded-full px-6 py-2 hidden sm:block "
                        href="/about"
                    >
                        About
                    </Link>
                    <Link
                        className="border rounded-full px-6 py-2 bg-black text-white hidden sm:block"
                        href="/contact"
                    >
                        Contact
                    </Link>
                    <Menu className="size-10" />
                </nav>
            </header>
            <main className="sm:grid   grid-cols-4 grid-rows-3  flex-1">
                <div className="bg-gradient-to-b from-white to-blue-500 row-span-3 col-span-2 pt-20 px-4 lg:px-16 sm:border-r border-black">
                    <p className="text-xl">
                        Bringing Segurity To <p>Your Life</p>
                    </p>
                    <h1 className="font-bold uppercase  text-2xl lg:text-6xl sm:leading-[80px] mt-4">
                        Money <span className="block">Investment</span>
                    </h1>
                    <div className=" mt-20 border-y py-4 px-1 ">
                        <div className="flex">
                            <p className="flex-1">Wealth Investment</p>
                            <p className="flex-1">
                                <span className="mr-2">/</span> Up to 10M+ USD
                            </p>
                            <MoveUpRight className="bg-black text-white rounded-full w-10 h-7 py-1" />
                        </div>
                        <hr className="my-4" />
                        <div className="flex ">
                            <p className="flex-1">Portfolio Manage</p>
                            <p className="flex-1">
                                <span className="mr-2">/</span>5 Accounts
                            </p>
                            <MoveUpRight className="bg-black text-white rounded-full w-10 h-7 py-1" />
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col bg-gradient-to-b sm:border-r  from-white to-purple-500  row-span-2  px-4 lg:px-16 p-6">
                    <Zap className="size-10" fill="black" />
                    <h1 className="font-semibold text-3xl mt-4">Long-Term</h1>
                    <p className="mt-5">
                        A Low-Cost Low-Touch Large-Cap Portfolio Meant For The
                        Long-Term Investment
                    </p>
                    <hr className="mt-auto mb-2" />
                    <p className="text-sm">10 Yrs CAGR on Invest</p>
                    <div className="flex justify-between mt-2 items-center">
                        <p className="text-2xl font-bold">6.2%</p>
                        <MoveUpRight className="bg-black text-white rounded-full w-10 h-7 py-1" />
                    </div>
                </div>
                <div className=" flex flex-col bg-gradient-to-b  from-white to-green-500  row-span-2 px-4 lg:px-16 p-6 ">
                    <Crosshair className="size-10" />
                    <h1 className="font-semibold text-3xl mt-4">Short-Term</h1>
                    <p className="mt-5">
                        Algorithmically Picked Portfolio Of Best Stocks Based On
                        Price-Momentum
                    </p>
                    <hr className="mt-auto mb-2" />
                    <p className="text-sm">25 Yrs Return on Invest</p>
                    <div className="flex justify-between mt-2 items-center">
                        <p className="text-2xl font-bold">24.2%</p>
                        <MoveUpRight className="bg-black text-white rounded-full w-10 h-7 py-1" />
                    </div>
                </div>
                <div className=" flex flex-col bg-gradient-to-r sm:border-t  from-yellow-200 to-white  col-span-2 px-4 xl:px-16 p-6">
                    <TrendingUp className="size-10" />
                    <h1 className="font-semibold text-3xl">Wealth PMS</h1>
                    <p className="mt-3 lg:text-base text-xs">
                        Up to 25 stocks selected based on Sharpe rations and
                        liquidity
                    </p>
                    <hr className="mt-auto mb-2" />
                    <p className="text-sm">30 Yrs CAGR on invest</p>
                    <div className="flex justify-between mt-2 items-center">
                        <p className="text-2xl font-bold">28.2%</p>
                        <MoveUpRight className="bg-black text-white rounded-full w-10 h-7 py-1" />
                    </div>
                </div>
            </main>
            <div className="h-16 bg-black flex item-center overflow-hidden">
                <ul className="flex gap-10 text-white animate-tickers items-center">
                    {[...stocks, ...stocks].map((stock) => {
                        const isIncrease = stock.percentageChange > 0
                        return (
                            <li
                                key={stock.ticker}
                                className="flex gap-2 items-center"
                            >
                                <p className="text-gray-700">{stock.ticker}</p>
                                <p className="text-gray-700">{stock.price}</p>
                                <p className="flex items-center gap-1 ">
                                    <Triangle
                                        className={`size-3 ${
                                            isIncrease && "rotate-180"
                                        }`}
                                        fill="white"
                                    />
                                    <span
                                        className={`${
                                            isIncrease
                                                ? "text-green-300"
                                                : "text-red-400"
                                        }`}
                                    >
                                        {stock.priceChange}
                                    </span>
                                </p>
                                <p
                                    className={`${
                                        isIncrease
                                            ? "text-green-300"
                                            : "text-red-400"
                                    }`}
                                >
                                    {isIncrease && "+"}
                                    {stock.percentageChange}%
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <footer className="flex justify-between items-center h-20 px-4 ">
                <div className="flex gap-4">
                    <p>Terms Policy</p>
                    <strong>+</strong>
                    <p>Customer Story</p>
                </div>
                <p>Copyright@iversedev 2025</p>
            </footer>
        </div>
    )
}

const stocks = [
    { ticker: "AAPL", price: 175.32, percentageChange: 1.5, priceChange: 2.58 },
    {
        ticker: "TSLA",
        price: 245.76,
        percentageChange: -2.1,
        priceChange: -5.28,
    },
    { ticker: "AMZN", price: 133.42, percentageChange: 0.8, priceChange: 1.07 },
    {
        ticker: "GOOGL",
        price: 2804.15,
        percentageChange: -0.5,
        priceChange: -14.02,
    },
    { ticker: "MSFT", price: 312.87, percentageChange: 1.2, priceChange: 3.72 },
    {
        ticker: "NVDA",
        price: 445.12,
        percentageChange: 2.5,
        priceChange: 10.88,
    },
    {
        ticker: "META",
        price: 326.99,
        percentageChange: -1.4,
        priceChange: -4.63,
    },
    { ticker: "NFLX", price: 389.67, percentageChange: 0.9, priceChange: 3.52 },
    {
        ticker: "AMD",
        price: 115.23,
        percentageChange: -0.8,
        priceChange: -0.92,
    },
    { ticker: "INTC", price: 34.56, percentageChange: 1.0, priceChange: 0.35 },
    { ticker: "BA", price: 205.87, percentageChange: 2.2, priceChange: 4.43 },
    { ticker: "DIS", price: 93.72, percentageChange: -1.6, priceChange: -1.52 },
    { ticker: "UBER", price: 48.91, percentageChange: 0.7, priceChange: 0.34 },
    {
        ticker: "PYPL",
        price: 72.15,
        percentageChange: -3.1,
        priceChange: -2.31,
    },
    { ticker: "SQ", price: 61.28, percentageChange: 2.8, priceChange: 1.67 },
    { ticker: "JPM", price: 146.55, percentageChange: 1.1, priceChange: 1.6 },
    { ticker: "V", price: 228.94, percentageChange: -0.5, priceChange: -1.14 },
    { ticker: "MA", price: 381.27, percentageChange: 1.3, priceChange: 4.85 },
    {
        ticker: "COST",
        price: 498.76,
        percentageChange: -0.9,
        priceChange: -4.49,
    },
    { ticker: "TSM", price: 98.44, percentageChange: 1.7, priceChange: 1.65 },
]
