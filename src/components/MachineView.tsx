/* eslint-disable @typescript-eslint/no-explicit-any */

interface MachineViewProps {
  data: Record<string, any>;
}

export default function MachineView({ data }: MachineViewProps) {
  return (
    <div className="machine-content overflow-hidden">
      <div className="section-header">STRUCTURED DATA — JSON-LD (SCHEMA.ORG + EXTENSIONS)</div>
      <p className="text-xs text-muted mb-4 font-sans">
        This data is also embedded in the page &lt;head&gt; as{" "}
        <code className="bg-[#e8e5dd] px-1 py-0.5 rounded text-xs">
          &lt;script type=&quot;application/ld+json&quot;&gt;
        </code>
      </p>

      {/* Identity */}
      <Section title="IDENTITY">
        <Field label="Name" value={data.name} />
        <Field label="Type" value={data["@type"]} />
        {data.url && <Field label="URL" value={data.url} link />}
        {data.jobTitle && <Field label="Job Title" value={data.jobTitle} />}
        {data.worksFor && (
          <Field label="Works For" value={data.worksFor.name} />
        )}
        {data.email && <Field label="Email" value={data.email} />}
        {data.sameAs?.length > 0 && (
          <div className="ml-4 mb-2">
            <span className="text-muted text-xs">sameAs:</span>
            {data.sameAs.map((url: string, i: number) => (
              <div key={i} className="ml-4">
                <a href={url} className="text-link hover:underline break-all" target="_blank" rel="noopener noreferrer">
                  {url}
                </a>
              </div>
            ))}
          </div>
        )}
      </Section>

      {/* Education */}
      {data.alumniOf?.length > 0 && (
        <Section title="EDUCATION">
          {data.alumniOf.map((edu: any, i: number) => (
            <div key={i} className="mb-3 ml-4 border-l-2 border-border pl-3">
              <div className="font-semibold">{edu.name}</div>
              {edu.degree && <div>{edu.degree}</div>}
              {(edu.startDate || edu.endDate) && (
                <div className="text-muted">
                  {edu.startDate}–{edu.endDate || "present"}
                </div>
              )}
              {edu.gpa && <div>GPA: {edu.gpa}</div>}
              <Badge status={edu._verificationStatus} />
              {edu._confidence != null && (
                <Confidence value={edu._confidence} />
              )}
            </div>
          ))}
        </Section>
      )}

      {/* Career */}
      {data.hasOccupation?.length > 0 && (
        <Section title="CAREER">
          {data.hasOccupation.map((role: any, i: number) => (
            <div key={i} className="mb-4 ml-4 border-l-2 border-border pl-3">
              <div className="font-semibold">
                {role.roleName}
                {role.organization?.name
                  ? ` @ ${role.organization.name}`
                  : ""}
              </div>
              {(role.startDate || role.endDate) && (
                <div className="text-muted">
                  {role.startDate}–{role.endDate || "present"}
                </div>
              )}
              {role.organization?.description && (
                <div className="text-xs mt-0.5">
                  {role.organization.description}
                </div>
              )}
              {role._whatTheyBuilt && (
                <div className="text-xs mt-1">
                  <span className="text-muted">Built: </span>
                  {role._whatTheyBuilt}
                </div>
              )}
              {role._techStack?.length > 0 && (
                <div className="text-xs mt-0.5">
                  <span className="text-muted">Stack: </span>
                  {role._techStack.join(", ")}
                </div>
              )}
              {role._funding && (
                <div className="text-xs mt-0.5">
                  <span className="text-muted">Funding: </span>
                  {role._funding}
                </div>
              )}
              {role._outcome && (
                <div className="text-xs mt-0.5">
                  <span className="text-muted">Outcome: </span>
                  {role._outcome}
                </div>
              )}
              <div className="flex gap-2 mt-1 items-center flex-wrap">
                <Badge status={role._verificationStatus} />
                {role._confidence != null && (
                  <Confidence value={role._confidence} />
                )}
              </div>
              {role._gaps?.length > 0 && <Gaps items={role._gaps} />}
            </div>
          ))}
        </Section>
      )}

      {/* Skills */}
      {data.knowsAbout?.length > 0 && (
        <Section title="SKILLS & CAPABILITIES">
          {data.knowsAbout.map((skill: any, i: number) => (
            <div key={i} className="ml-4 mb-1.5 flex items-start gap-2 flex-wrap">
              <span className="font-semibold shrink-0">{skill.skill}</span>
              <span className="text-muted text-xs">({skill.type})</span>
              {skill._confidence != null && (
                <Confidence value={skill._confidence} />
              )}
              {skill._evidence && (
                <span className="text-xs text-muted break-words">
                  — {skill._evidence}
                </span>
              )}
            </div>
          ))}
        </Section>
      )}

      {/* Memberships */}
      {data.memberOf?.length > 0 && (
        <Section title="MEMBERSHIPS & AFFILIATIONS">
          {data.memberOf.map((m: any, i: number) => (
            <div key={i} className="ml-4 mb-1">
              <span className="font-semibold">{m.name}</span>
              {m.startDate && (
                <span className="text-muted ml-2">{m.startDate}</span>
              )}
              <Badge status={m._verificationStatus} />
            </div>
          ))}
        </Section>
      )}

      {/* Projects */}
      {data._projects?.length > 0 && (
        <Section title="PROJECTS">
          {data._projects.map((p: any, i: number) => (
            <div key={i} className="mb-3 ml-4 border-l-2 border-border pl-3">
              <div className="font-semibold">{p.name}</div>
              <div className="text-xs text-muted">{p.type}</div>
              {p.description && <div className="text-xs">{p.description}</div>}
              {p.url && (
                <a
                  href={p.url}
                  className="text-xs text-link hover:underline break-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {p.url}
                </a>
              )}
              {p.status && (
                <div className="text-xs">
                  <span className="text-muted">Status: </span>
                  {p.status}
                </div>
              )}
              {p._gaps?.length > 0 && <Gaps items={p._gaps} />}
            </div>
          ))}
        </Section>
      )}

      {/* Data Quality */}
      {data._dataQuality && (
        <Section title="DATA QUALITY ASSESSMENT">
          <div className="ml-4 space-y-2">
            <div>
              <span className="text-muted">Sources consulted: </span>
              {data._dataQuality.sourcesConsulted}
            </div>
            {data._dataQuality.sourceList?.length > 0 && (
              <div>
                <span className="text-muted">Source list: </span>
                {data._dataQuality.sourceList.join(", ")}
              </div>
            )}
            <div>
              <span className="text-muted">Last updated: </span>
              {data._dataQuality.lastUpdated}
            </div>

            {data._dataQuality.overallConfidence && (
              <div className="mt-2">
                <div className="text-muted font-semibold text-xs uppercase tracking-wider mb-1">
                  Confidence Summary
                </div>
                {Object.entries(data._dataQuality.overallConfidence).map(
                  ([key, val]) => (
                    <div key={key} className="flex gap-2 ml-2">
                      <span className="w-40 text-muted">{key}:</span>
                      <span
                        className={
                          val === "HIGH"
                            ? "confidence-high font-semibold"
                            : val === "MEDIUM"
                            ? "confidence-medium font-semibold"
                            : "confidence-low font-semibold"
                        }
                      >
                        {val as string}
                      </span>
                    </div>
                  )
                )}
              </div>
            )}

            {data._dataQuality.gaps?.length > 0 && (
              <div className="mt-2">
                <div className="text-muted font-semibold text-xs uppercase tracking-wider mb-1">
                  Known Gaps
                </div>
                {data._dataQuality.gaps.map((g: string, i: number) => (
                  <div key={i} className="ml-2">
                    <span className="gap-marker">? </span>
                    {g}
                  </div>
                ))}
              </div>
            )}

            {data._dataQuality.recommendation && (
              <div className="mt-2 p-2 bg-[#e8e5dd] rounded text-xs">
                <span className="font-semibold">Recommendation: </span>
                {data._dataQuality.recommendation}
              </div>
            )}
          </div>
        </Section>
      )}

      {/* Raw JSON */}
      <Section title="RAW JSON-LD">
        <pre className="text-xs overflow-x-auto p-4 bg-[#2d2926] text-[#f0ebe3] rounded mt-2 leading-relaxed">
          {JSON.stringify(data, null, 2)}
        </pre>
      </Section>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4">
      <div className="section-header">{title}</div>
      {children}
    </div>
  );
}

function Badge({ status }: { status?: string }) {
  if (!status) return null;
  const cls =
    status === "public"
      ? "badge-public"
      : status === "self-reported"
      ? "badge-self-reported"
      : status === "inferred"
      ? "badge-inferred"
      : "badge-unverified";
  return <span className={`badge ${cls} ml-1`}>[{status}]</span>;
}

function Confidence({ value }: { value: number }) {
  const pct = Math.round(value * 100);
  const cls =
    value >= 0.7
      ? "confidence-high"
      : value >= 0.4
      ? "confidence-medium"
      : "confidence-low";
  return (
    <span className={`text-xs ${cls}`}>
      {pct}% conf
    </span>
  );
}

function Gaps({ items }: { items: string[] }) {
  return (
    <div className="mt-1">
      {items.map((g, i) => (
        <div key={i} className="text-xs">
          <span className="gap-marker">? </span>
          {g}
        </div>
      ))}
    </div>
  );
}

function Field({
  label,
  value,
  link,
}: {
  label: string;
  value?: string;
  link?: boolean;
}) {
  if (!value) return null;
  return (
    <div className="ml-4 mb-1">
      <span className="text-muted">{label}: </span>
      {link ? (
        <a
          href={value.startsWith("http") ? value : `https://${value}`}
          className="text-link hover:underline break-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          {value}
        </a>
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
}
