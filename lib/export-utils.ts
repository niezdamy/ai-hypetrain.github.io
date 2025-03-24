/**
 * Exports data to a CSV file and triggers a download
 * @param data Array of objects to export
 * @param filename Name for the exported file (without extension)
 */
export function exportToCsv<T extends object>(data: T[], filename: string): void {
  if (!data || !data.length) return;
  
  // Get headers from the first item
  const headers = Object.keys(data[0]);
  
  // Create CSV content with headers
  const headerRow = headers.join(',');
  
  // Create data rows
  const rows = data.map(item => 
    Object.values(item)
      .map(value => {
        // Handle strings that may contain commas or quotes
        if (typeof value === 'string') {
          return `"${value.replace(/"/g, '""')}"`;
        }
        // Handle dates
        else if (value instanceof Date) {
          return `"${value.toISOString()}"`;
        }
        // Handle other values
        return value;
      })
      .join(',')
  ).join('\n');
  
  // Combine headers and rows
  const csvContent = `${headerRow}\n${rows}`;
  
  // Create a Blob and download link
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  // Create download link
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `${filename}.csv`);
  link.style.visibility = 'hidden';
  
  // Append to DOM, trigger click and clean up
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Release the object URL
  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 100);
}
