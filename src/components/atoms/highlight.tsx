import hljs from 'highlight.js/lib/core'

hljs.registerLanguage('dockerfile', require('highlight.js/lib/languages/dockerfile'))
hljs.registerLanguage('yaml', require('highlight.js/lib/languages/yaml'))

export enum Languages {
  dockerfile = 'dockerfile',
  yaml = 'yaml',
}

type HighlightProps = {
  text: string
  lang: Languages
}

export const Highlight = (props: HighlightProps) => {
  const { text, lang } = props
  return (
    <pre>
      <code dangerouslySetInnerHTML={{ __html: hljs.highlight(text, { language: lang }).value }} />
    </pre>
  )
}
