interface BarChartProps {
  data: { label: string; value: number; color: string }[];
  maxValue?: number;
}

export default function BarChart({ data, maxValue }: BarChartProps) {
  const max = maxValue || Math.max(...data.map((d) => d.value));

  return (
    <div className="space-y-4">
      {data.map((item, index) => {
        const percentage = (item.value / max) * 100;

        return (
          <div key={index} className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">{item.label}</span>
              <span className="text-sm font-semibold text-gray-800">{item.value} kg CO₂</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2"
                style={{
                  width: `${percentage}%`,
                  backgroundColor: item.color,
                }}
              >
                {percentage > 10 && (
                  <span className="text-xs font-semibold text-white">
                    {percentage.toFixed(0)}%
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
