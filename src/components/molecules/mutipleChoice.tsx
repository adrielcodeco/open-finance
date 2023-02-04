type MultipleChoiceProps = {
  items: Array<{ label: string; link: string }>
}

export const MultipleChoice = (props: MultipleChoiceProps) => {
  const { items = [] } = props
  return (
    <nav>
      <ul className="choice">
        {items.map(({ label, link }) => (
          <li>
            &gt; <a href={link}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
