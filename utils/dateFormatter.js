const formatDate = (date, format = 'YYYY-MM-DD') => {
    const d = new Date(date);
    const pad = (num) => (num < 10 ? '0' + num : num);
  
    if (format === 'YYYY-MM-DD') {
      return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
    } else if (format === 'MM/DD/YYYY') {
      return `${pad(d.getMonth() + 1)}/${pad(d.getDate())}/${d.getFullYear()}`;
    }
    return d.toISOString();
  };
  
  module.exports = { formatDate };
  