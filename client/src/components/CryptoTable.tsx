import { useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RootState } from "@/store";
import { formatCurrency, formatLargeNumber, formatPercentage } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LineChart from "./charts/LineChart";

export default function CryptoTable() {
  const { assets } = useSelector((state: RootState) => state.crypto);

  return (
    <Card className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-gray-50 dark:bg-gray-800">
            <TableRow>
              <TableHead className="w-[60px]">#</TableHead>
              <TableHead>Asset</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">1h %</TableHead>
              <TableHead className="text-right">24h %</TableHead>
              <TableHead className="text-right">7d %</TableHead>
              <TableHead className="text-right">Market Cap</TableHead>
              <TableHead className="text-right">Volume (24h)</TableHead>
              <TableHead className="text-right">Circulating Supply</TableHead>
              <TableHead className="text-right">Max Supply</TableHead>
              <TableHead className="text-right w-[150px]">7D Chart</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {assets.map((asset, index) => (
              <TableRow key={asset.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <TableCell className="text-sm text-gray-500 dark:text-gray-400">{index + 1}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img 
                        className="h-10 w-10 rounded-full" 
                        src={asset.logoUrl} 
                        alt={asset.name} 
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{asset.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{asset.symbol}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right font-medium">{formatCurrency(asset.price)}</TableCell>
                <TableCell className={`text-right ${asset.change1h >= 0 ? 'text-success' : 'text-danger'}`}>
                  {formatPercentage(asset.change1h)}
                </TableCell>
                <TableCell className={`text-right ${asset.change24h >= 0 ? 'text-success' : 'text-danger'}`}>
                  {formatPercentage(asset.change24h)}
                </TableCell>
                <TableCell className={`text-right ${asset.change7d >= 0 ? 'text-success' : 'text-danger'}`}>
                  {formatPercentage(asset.change7d)}
                </TableCell>
                <TableCell className="text-right">{formatCurrency(asset.marketCap)}</TableCell>
                <TableCell className="text-right">{formatLargeNumber(asset.volume24h)}</TableCell>
                <TableCell className="text-right">{formatLargeNumber(asset.circulatingSupply)} {asset.symbol}</TableCell>
                <TableCell className="text-right">{asset.maxSupply ? formatLargeNumber(asset.maxSupply) : 'N/A'}</TableCell>
                <TableCell className="text-right">
                  <div className="h-12 w-24 inline-block">
                    <LineChart data={asset.chartData} color={asset.change7d >= 0 ? 'success' : 'danger'} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <CardFooter className="bg-gray-50 dark:bg-gray-800 px-6 py-4 flex justify-end">
        <Button variant="link" className="text-primary hover:text-primary/80 text-sm font-medium flex items-center justify-center">
          <span>View Full Market Data</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </CardFooter>
    </Card>
  );
}
