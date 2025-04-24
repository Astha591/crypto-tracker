interface LineChartProps {
  data: { time: string; value: number }[];
  color: 'success' | 'danger';
}

export default function LineChart({ data, color }: LineChartProps) {
  if (!data || data.length === 0) {
    return <div className="w-full h-full bg-gray-100 dark:bg-gray-800 rounded"></div>;
  }

  // Calculate min and max values for scaling
  const values = data.map(d => d.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min;

  // Function to normalize values to the SVG height (0-40)
  const normalize = (value: number): number => {
    return 40 - ((value - min) / (range || 1)) * 30;
  };

  // Generate path data
  const pathPoints = data.map((point, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = normalize(point.value);
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 40"
      preserveAspectRatio="none"
      className={`stroke-current ${color === 'success' ? 'stroke-success' : 'stroke-danger'}`}
    >
      <path
        d={pathPoints}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
