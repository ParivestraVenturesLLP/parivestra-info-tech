import { useNavigate } from "react-router-dom";

export function AdminTable({ columns, rows, keyField, editPath }) {
  const navigate = useNavigate();

  if (!rows.length) return null;

  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-paper-raised">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-border">
            {columns.map((col) => (
              <th key={col.key} className="px-5 py-3 font-medium text-ink-faint">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row[keyField]}
              onClick={() => navigate(editPath(row))}
              className="cursor-pointer border-b border-border last:border-0 hover:bg-ink/3"
            >
              {columns.map((col) => (
                <td key={col.key} className="px-5 py-3.5 text-ink">
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
