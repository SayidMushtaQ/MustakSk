export const PortfolioCard = ({
  title,
  description,
  image,
  link,
  category,
  date,
}) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:scale-[1.02] transition">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <div className="flex justify-between items-center text-xs text-slate-400">
          <span className="px-2 py-1 rounded bg-slate-800 text-sky-400">
            {category}
          </span>
          <span>{new Date(date).toDateString()}</span>
        </div>

        <h3 className="mt-3 text-lg font-semibold text-slate-100">
          {title}
        </h3>

        <p className="mt-2 text-sm text-slate-400 line-clamp-3">
          {description}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-sm text-sky-400 hover:underline"
        >
          View Project →
        </a>
      </div>
    </div>
  );
};
