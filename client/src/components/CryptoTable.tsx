import { useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RootState } from "@/store";
import { formatCurrency, formatLargeNumber, formatPercentage } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import LineChart from "./charts/LineChart";

export default function CryptoTable() {
  const { assets } = useSelector((state: RootState) => state.crypto);
  const { lastUpdated } = useSelector((state: RootState) => state.crypto);

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
              <TableHead className="text-right">7D Chart</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {assets.map((asset, index) => (
              <TableRow key={asset.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <TableCell className="text-sm text-gray-500 dark:text-gray-400">{index + 1}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8">
                      <img 
                        className="h-8 w-8 rounded-full" 
                        src={asset.logoUrl} 
                        alt={asset.name} 
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{asset.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{asset.symbol}</div>
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
                <TableCell className="text-right">
                  <div className="h-8 w-16 inline-block">
                    <LineChart data={asset.chartData} color={asset.change7d >= 0 ? 'success' : 'danger'} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 text-xs text-gray-500 dark:text-gray-400">
        Last updated: {new Date(lastUpdated).toLocaleTimeString()}
      </div>
    </Card>
  );
}
