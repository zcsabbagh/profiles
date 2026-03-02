interface InfoboxProps {
  fullName: string;
  currentRole?: string;
  org?: string;
  education?: string[];
  knownFor?: string[];
  website?: string;
  links?: { label: string; url: string }[];
}

export default function Infobox({
  fullName,
  currentRole,
  org,
  education,
  knownFor,
  website,
  links,
}: InfoboxProps) {
  return (
    <div className="w-full mb-6 sm:float-right sm:ml-6 sm:mb-4 sm:w-72 border border-border bg-[#f5f3ee] text-sm font-sans">
      <div className="bg-[#e8e5dd] px-4 py-2.5 text-center">
        <h2 className="font-bold text-base border-0 m-0 p-0">{fullName}</h2>
      </div>
      <div className="px-4 py-3 space-y-2.5">
        {currentRole && (
          <Row label="Role" value={currentRole} />
        )}
        {org && <Row label="Organization" value={org} />}
        {education?.map((e, i) => (
          <Row key={i} label={i === 0 ? "Education" : ""} value={e} />
        ))}
        {knownFor?.map((k, i) => (
          <Row key={i} label={i === 0 ? "Known for" : ""} value={k} />
        ))}
        {website && (
          <div className="flex text-xs">
            <span className="w-24 shrink-0 font-semibold text-muted">
              Website
            </span>
            <a
              href={website.startsWith("http") ? website : `https://${website}`}
              className="text-link hover:underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              {website.replace(/^https?:\/\//, "")}
            </a>
          </div>
        )}
        {links && links.length > 0 && (
          <div className="flex text-xs">
            <span className="w-24 shrink-0 font-semibold text-muted">
              Links
            </span>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.url}
                  className="text-link hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex text-xs">
      <span className="w-24 shrink-0 font-semibold text-muted">{label}</span>
      <span>{value}</span>
    </div>
  );
}
