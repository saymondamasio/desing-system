interface TokensGridProps {
  tokens: Record<string, string>
}

export function TokensGrid({ tokens }: TokensGridProps) {
  return (
    <table className="w-full border-collapse text-white sb-unstyled">
      <thead>
        <tr>
          <th className="py-3 px-4 text-left">Name</th>
          <th className="py-3 px-4 text-left">Value</th>
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => (
          <tr key={key} className="group">
            <td className="py-3 px-4 text-zinc-500 first:rounded-l-md last:rounded-r-md group-even:bg-zinc-200">
              {key}
            </td>
            <td className="py-3 px-4 text-zinc-500 first:rounded-l-md last:rounded-r-md group-even:bg-zinc-200">
              {value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
