import { format } from "date-fns";

export function FormattedDate({ date }: { date: string }) {
  return <>{format(new Date(date), "dd.MM.yyyy")}</>;
}
