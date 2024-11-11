export function formatDateToMonthYear(date: Date): string {
    return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' }).format(date);
}