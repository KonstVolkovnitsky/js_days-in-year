function daysInYear(year) {
  try {
    if (year < 0 || !Number.isInteger(year) || typeof year !== 'number') {
      throw new Error('Incorrect year!');
    }
    const days = (new Date(year,11,31) - new Date(year,0,0))/86400000
    return days;
  }
  catch {
    console.log('Incorrect year!')
  }
}

daysInYear(2019); // 365
daysInYear('2019'); // exception
daysInYear(2020); // 366
daysInYear(2020.2); // exception
daysInYear(2100); // 365
daysInYear({year: 2100}); // exception
