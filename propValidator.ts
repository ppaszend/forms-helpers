export function hexColorValidator(value: string): boolean {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{8})$/.test(value);
}

export function cssUnitValidator(value: string): boolean {
  return /^(-?(\d*\.)?\d+)((px)|(em)|(%)|(vw)|(vh))?$/.test(value);
}

export function cssAllSidesUnitValidator(value: string): boolean {
  return value.split(" ").every((singleValue) => cssUnitValidator(singleValue));
}
