import { CloseSmallIcon } from "../Icons";

interface FilterTagProps {
  label: string;
  onRemove: () => void;
}

export default function FilterTag({ label, onRemove }: FilterTagProps) {
  return (
    <span className="inline-flex items-center gap-2 bg-celestial text-porcelain px-3 py-1.5 rounded font-body text-body-sm">
      {label}
      <button
        type="button"
        onClick={onRemove}
        className="hover:opacity-70 transition-opacity cursor-pointer"
        aria-label={`Remover filtro ${label}`}
      >
        <CloseSmallIcon />
      </button>
    </span>
  );
}
