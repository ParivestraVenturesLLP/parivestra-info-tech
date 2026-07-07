import { Badge } from "../../components/ui/Badge";

export function StatusBadge({ status }) {
  return (
    <Badge tone={status === "published" ? "good" : "warning"}>
      {status === "published" ? "Published" : "Draft"}
    </Badge>
  );
}
