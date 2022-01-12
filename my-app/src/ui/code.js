import { CodeBlock, dracula } from "react-code-blocks";

function MyCoolCodeBlock(props) {
  return (
    <CodeBlock
      text={props.code}
      language={'js'}
      showLineNumbers={false}
      theme={dracula}
    />
  );
}

export default MyCoolCodeBlock;