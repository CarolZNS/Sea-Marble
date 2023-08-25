export default function Input({
  label,
  type,
  value,
  onChange,
  id,
  outline,
}) {
  if (outline) {
    return (
      <div className="relative block border-2 rounded border-gray-200 bg-transparent pt-2 focus-within:border-cyan-600">
        <input
          placeholder='transparent placeholder'
          id={id}
          type={"text" || type}
          onChange={onChange}
          value={value}
          className="peer w-full p-2 border-none placeholder-transparent focus:outline-none sm:text-sm"
        />
        <label
          htmlFor={id}
          className="absolute bg-white px-1 start-0 top-0 left-3 -translate-y-1/2 text-xs text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-cyan-500"
        >
          {label}
        </label>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="relative block overflow-hidden border-b-2 border-gray-200 bg-transparent pt-2 focus-within:border-cyan-600">
        <input
          className="peer w-full border-none bg-transparent pt-2 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          placeholder='transparent placeholder'
          id={id}
          type={type}
          value={value}
          onChange={onChange}
        />
        <label
          className="absolute start-0 top-0.5 -translate-y-1/3 text-xs text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-cyan-500"
          htmlFor={id}
        >
          {label}
        </label>
      </div>
    </div>
  );
}
