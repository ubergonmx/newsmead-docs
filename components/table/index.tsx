import { type } from 'os'
import styles from './style.module.css'

export function OptionTable({
  options,
  customHead = {
    option: 'Option',
    type: 'Type',
    description: 'Description',
  },
  hasType = true,
}: {
  options: [string, string, any]
  customHead?: {
    option: string
    type?: string
    description: string
  }
  hasType?: boolean
}) {
  return (
    <div className="nx--mx-6 nx-mb-4 nx-mt-6 nx-overflow-x-auto nx-overscroll-x-contain">
      <table className="nx-w-full nx-border-collapse nx-text-sm">
        <thead>
          <tr className="nx-border-b nx-py-4 nx-text-left dark:nx-border-neutral-700">
            <th className="nx-py-2 nx-font-semibold">{customHead.option}</th>
            {hasType && <th className="nx-py-2 nx-pl-6 nx-font-semibold">{customHead.type}</th>}
            <th className="nx-px-6 nx-py-2 nx-font-semibold">{customHead.description}</th>
          </tr>
        </thead>
        <tbody className="nx-align-baseline">
          {options.map(([option, type, description]) => (
            <tr
              key={option}
              className={
                'nx-border-b nx-border-gray-100 dark:nx-border-neutral-700/50 ' + styles.tr
              }
            >
              <td
                className={
                  'nx-whitespace-pre nx-py-2 nx-font-mono nx-text-xs nx-font-semibold nx-leading-6 ' +
                  styles.tdViolet
                }
              >
                {option}
              </td>
              {hasType && (
                <td
                  className={
                    'nx-whitespace-pre nx-py-2 nx-pl-6 nx-font-mono nx-text-xs nx-font-semibold nx-leading-6 ' +
                    styles.tdSlate
                  }
                >
                  {type}
                </td>
              )}
              <td className={'nx-py-2 nx-pl-6 '}>{hasType ? description : type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
