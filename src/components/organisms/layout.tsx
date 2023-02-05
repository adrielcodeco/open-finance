/** @jsxImportSource @emotion/react */
import React from 'react'
import Container from '@mui/material/Container'
import * as styles from './layout.css'
import { TerminalcssLink } from '../atoms/terminalcssLink'
import { BadgeGithub } from '../atoms/badgeGithub'
import { ScrollToTop } from '../atoms/scrollToTop'

type LayoutProps = {
  children: React.ReactNode
  repo?: string
}

export const Layout = (props: LayoutProps) => {
  const { children, repo } = props
  return (
    <>
      <Container css={styles.container} maxWidth="md">
        <header className="terminal-nav">
          <div className="terminal-logo">
            <div className="logo terminal-prompt">
              <a href="/open-finance" className="no-style">
                Open Finance Guild
              </a>
            </div>
          </div>
        </header>
        {children}
        {repo ? <BadgeGithub repo={repo} /> : null}
        <ScrollToTop />
      </Container>
      <footer css={styles.footer}>
        <div css={styles.copyright}>
          built by codeco using <TerminalcssLink /> theme, thanks guys
        </div>
      </footer>
    </>
  )
}
