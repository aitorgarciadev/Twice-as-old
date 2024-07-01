function calculateYearsToDoubleAge(fatherAge, sonAge) {
  let years = 0;
  while (true) {
    if (
      fatherAge + years === 2 * (sonAge + years) ||
      fatherAge - years === 2 * (sonAge - years)
    ) {
      return years;
    }
    years++;
  }
}

export { calculateYearsToDoubleAge };
