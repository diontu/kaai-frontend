import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownRenderer = ({
  content,
}: {
  content: string | null;
}): JSX.Element | null => {
  if (!content) return null;
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown">
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
