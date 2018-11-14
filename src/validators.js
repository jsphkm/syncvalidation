export const required = value => (
  value ? undefined : "Required"
);

export const hasSix = value => (
  value && value.length > 6 ? undefined : 
  "Requires at least 6 characters"
);