
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { DomesticTruckingRecord } from '../types/DomesticTruckingRecord';

interface DomesticTruckingTableHeaderProps {
  selectedRows: string[];
  data: DomesticTruckingRecord[];
  setSelectedRows: React.Dispatch<React.SetStateAction<string[]>>;
}

const DomesticTruckingTableHeader = ({
  selectedRows,
  data,
  setSelectedRows
}: DomesticTruckingTableHeaderProps) => {
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(data.map(record => record.id));
    } else {
      setSelectedRows([]);
    }
  };

  const isAllSelected = data.length > 0 && selectedRows.length === data.length;
  const isIndeterminate = selectedRows.length > 0 && selectedRows.length < data.length;

  return (
    <thead className="sticky top-0 bg-white z-30 shadow-sm">
      <tr className="border-b-4 border-black bg-white">
        <th className="bg-gray-100 border-r-4 border-black p-2 text-center font-bold text-gray-900 w-32 sticky left-0 z-40">Customer</th>
        <th className="border-r-4 border-black p-2 text-center font-bold text-gray-900 bg-blue-200">File Info</th>
        <th colSpan={2} className="border-r-4 border-black p-2 text-center font-bold text-gray-900 bg-green-200">Work Order & Insurance</th>
        <th colSpan={2} className="border-r-4 border-black p-2 text-center font-bold text-gray-900 bg-purple-200">Schedule</th>
        <th colSpan={2} className="border-r-4 border-black p-2 text-center font-bold text-gray-900 bg-orange-200">Payment</th>
        <th className="border-r-4 border-black p-2 text-center font-bold text-gray-900 bg-gray-200 min-w-[200px]">Notes</th>
        <th className="bg-red-200 p-2 text-center font-bold text-gray-900">Select</th>
      </tr>
      <tr className="bg-gray-200 border-b-4 border-gray-500 sticky top-[41px] z-30">
        <th className="bg-gray-300 border-r-4 border-black p-1 text-left text-xs font-bold text-gray-800 min-w-[100px] sticky left-0 z-40">Customer</th>
        <th className="border-r-4 border-black p-1 text-center text-xs font-bold text-gray-800 bg-gray-200 min-w-[70px]">File</th>
        <th className="border-r border-gray-500 p-1 text-center text-xs font-bold text-gray-800 bg-gray-200 min-w-[80px]">W/O Sent?</th>
        <th className="border-r-4 border-black p-1 text-center text-xs font-bold text-gray-800 bg-gray-200 min-w-[80px]">Insurance?</th>
        <th className="border-r border-gray-500 p-1 text-center text-xs font-bold text-gray-800 bg-gray-200 min-w-[90px]">Pick Date</th>
        <th className="border-r-4 border-black p-1 text-center text-xs font-bold text-gray-800 bg-gray-200 min-w-[90px]">Delivery Date</th>
        <th className="border-r border-gray-500 p-1 text-center text-xs font-bold text-gray-800 bg-gray-200 min-w-[90px]">Payment Rec'd?</th>
        <th className="border-r-4 border-black p-1 text-center text-xs font-bold text-gray-800 bg-gray-200 min-w-[90px]">Payment Made?</th>
        <th className="border-r-4 border-black p-1 text-left text-xs font-bold text-gray-800 bg-gray-200 min-w-[150px]">Notes</th>
        <th className="bg-gray-300 p-1 text-center text-xs font-bold text-gray-800 w-10">
          <Checkbox
            checked={isAllSelected}
            onCheckedChange={handleSelectAll}
            className="h-3 w-3 border"
            {...(isIndeterminate && { 'data-indeterminate': true })}
          />
          <div className="text-[8px] leading-tight mt-1">Select</div>
        </th>
      </tr>
    </thead>
  );
};

export default DomesticTruckingTableHeader;
