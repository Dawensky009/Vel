// Renders trusted (author/staff-written) HTML produced from Markdown by the data layer.
export default function MarkdownBody({ html }: { html: string }) {
  return (
    <div className="rich reveal" dangerouslySetInnerHTML={{ __html: html }} />
  );
}
