import { format } from "date-fns";

const formatDate = (date) => format(new Date(date), " d LLL yyyy");

export { formatDate };
