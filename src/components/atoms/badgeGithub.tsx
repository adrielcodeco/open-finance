import './badgeGithub.css'

type BadgeGithubProps = {
  repo: string
}

export const BadgeGithub = (props: BadgeGithubProps) => {
  const { repo } = props
  return (
    <a href={repo}>
      <img
        className="badgeGithub"
        src="/open-finance/github-mark-white.svg"
        alt="visite nosso repo"
        color="white"
      />
    </a>
  )
}
