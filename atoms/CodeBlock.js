import Highlight, { defaultProps } from "prism-react-renderer";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const CodeBlock = ({ children, className, live }) => {
  const language = className.replace(/language-/, "");
  if (live) {
    return (
      <div>
        <LiveProvider code={children}>
          <LiveEditor
            style={{
              border: "1px solid black",
            }}
          />
          <br />
          <LivePreview />
          <LiveError />
        </LiveProvider>
      </div>
    );
  }
  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
