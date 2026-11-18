import { PageHeader } from "./PageHeader";

export function InfoPage({ title, intro, sections }: { title: string; intro: string; sections: { h: string; p: string }[] }) {
  return (
    <>
      <PageHeader title={title} description={intro} crumbs={[{ label: title }]} />
      <div className="container-luxe max-w-3xl space-y-8 py-14">
        {sections.map((s) => (
          <section key={s.h}>
            <h2 className="text-2xl">{s.h}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.p}</p>
          </section>
        ))}
      </div>
    </>
  );
}
