export function generateID(children, attributes) {
  if (attributes.id && typeof attributes.id === "string") {
    return attributes.id;
  }
  return children
    .filter((child) => typeof child === "string")
    .join(" ")
    .replace(/[?]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
}
