import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';

import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import Image from "next/image";
import { atomOneDark, atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'


SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const customRenderers = {
    // image(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    paragraph(paragraph) {
      const { node } = paragraph;

      if (node.children[0] / type === "image") {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.url}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code(code) {
      const { children , className} =code;
     // const codeString = '(num) => num + 1';
      return   <SyntaxHighlighter language={className} children={children} styles={atomOneDarkReasonable} />
    }
  };
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}
export default PostContent;
