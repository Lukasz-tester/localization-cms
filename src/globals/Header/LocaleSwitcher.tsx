import { useLocale } from 'next-intl'
import localization from '@/i18n/localization'
import { TypedLocale } from 'payload'
import { usePathname, useRouter } from '@/i18n/routing'
import { useParams } from 'next/navigation'
import { useTransition } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

function LocaleSwitcher() {
  // inspired by https://github.com/amannn/next-intl/blob/main/examples/example-app-router/src/components/LocaleSwitcherSelect.tsx
  const locale = useLocale()
  const router = useRouter()
  const [, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()

  function onSelectChange(value: TypedLocale) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: value },
      )
    })
  }

  return (
    <Select onValueChange={onSelectChange} value={locale}>
      <SelectTrigger className="w-auto bg-transparent border-none px-2">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        {localization.locales
          .sort((a, b) => a.label.localeCompare(b.label)) // Ordenar por label
          .map((locale) => (
            <SelectItem value={locale.code} key={locale.code}>
              <div className={`flex ${locale.code === 'it' ? 'gap-3.5' : 'gap-2'}`}>
                <div className="uppercase">{locale.code}</div>
                <div className="">{locale.label}</div>
              </div>
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  )
}

export default LocaleSwitcher
