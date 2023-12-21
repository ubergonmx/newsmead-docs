import React, { ReactNode } from 'react'
import membersData from './members.json'
import styles from './style.module.css'

export default function Members({ current }: { current: boolean }) {
  const members = membersData.members
    .filter((member) => member.isCurrentMember === current)
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((member) => [
      member.isTeamLead,
      member.name,
      [
        member.roles['UI/UX'] ? '🎨' : '',
        member.roles['Front-end'] ? '🚀' : '',
        member.roles['Back-end'] ? '⚙️' : '',
      ].join(' '),
      member.programmingLanguages.join(', '),
      member.frameworksAndLibraries.join(', '),
      member.tools.join(', '),
    ])

  return (
    <div className="nx--mx-6 nx-mb-4 nx-mt-6 nx-overflow-x-auto nx-overscroll-x-contain">
      <table className="nx-w-full nx-border-collapse nx-text-sm">
        <thead>
          <tr className="nx-border-b nx-py-4 nx-text-left dark:nx-border-neutral-700">
            <th className="nx-py-2 nx-font-semibold">Name</th>
            <th className="nx-px-6 nx-py-2 nx-font-semibold">Roles</th>
            <th className="nx-py-2 nx-pl-6 nx-font-semibold">Languages</th>
            <th className="nx-px-6 nx-py-2 nx-font-semibold">Frameworks/Lib</th>
            <th className="nx-px-6 nx-py-2 nx-font-semibold">Tools</th>
          </tr>
        </thead>
        <tbody className="nx-align-baseline">
          {members.map(([isTeamLead, name, roles, languages, frameworks, tools]) => (
            <tr
              key={name as string}
              className={
                'nx-border-b nx-border-gray-100 dark:nx-border-neutral-700/50 ' + styles.tr
              }
            >
              <td className="nx-whitespace-pre nx-py-2 nx-text-xs nx-leading-6">
                {isTeamLead ? <TL>{name}</TL> : <Member>{name}</Member>}
              </td>
              <td
                className={
                  'nx-whitespace-pre nx-py-2 nx-pl-6 nx-text-xs nx-font-semibold nx-leading-6 ' +
                  styles.tdSlate
                }
              >
                {roles}
              </td>
              <td className={'nx-py-2 nx-pl-6 nx-font-mono'}>{languages}</td>
              <td className={'nx-py-2 nx-pl-6'}>{frameworks}</td>
              <td className={'nx-py-2 nx-pl-6'}>{tools}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export const TL = ({ children }: { children: ReactNode }) => {
  return <span className={'nx-font-semibold ' + styles.teamLeader}>{children}</span>
}

export const Member = ({ children }: { children: ReactNode }) => {
  return <span className={styles.member}>{children}</span>
}
