export function formatContent(content: string): (string | React.ReactElement)[] {
  const parts = content.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-porcelain">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}
