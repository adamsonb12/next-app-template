import format from "date-fns/format";
import enUS from "date-fns/locale/en-US";

export const formatLongDate = ({ date }: { date: Date }) => {
  // TODO => handle other locale date formats
  return format(date, "MMM do, yyyy", { locale: enUS });
};

export const formatDateToGraphqlDate = ({ date }: { date: Date }) => {
  return format(date, "yyyy-MM-dd", { locale: enUS });
};
