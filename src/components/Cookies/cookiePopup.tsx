// 'use client'

// import { useEffect, useState } from 'react'
// import { Button } from '@/components/ui/button'
// import { useTranslations } from 'next-intl'

// function setCookie(name, value, days = 365) {
//   var expires = ''
//   if (days) {
//     var date = new Date()
//     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
//     expires = '; expires=' + date.toUTCString()
//   }
//   document.cookie = name + '=' + (value || '') + expires + '; path=/'
// }

// function getCookie(name) {
//   if (!document) return null

//   var nameEQ = name + '='
//   var ca = document.cookie.split(';')
//   for (var i = 0; i < ca.length; i++) {
//     var c = ca[i]
//     while (c.charAt(0) == ' ') c = c.substring(1, c.length)
//     if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
//   }
//   return null
// }

// export const CookiePopup = () => {
//   const [show, setShow] = useState(false)
//   useEffect(() => {
//     const hide = getCookie('hideCookiePopup') === 'true'
//     if (hide === show) setShow(!hide)
//   }, [])

//   const t = useTranslations()

//   if (!show) return null

//   return (
//     <div className="fixed bottom-0 w-full z-[100001] flex place-content-center text-primary text-xl">
//       <div className="flex flex-col sm:flex-row bg-background w-fit h-fit p-6 pb-8 md:rounded-t-3xl gap-5 items-start sm:items-center justify-between">
//         <span>{t('cookie-message')}</span>
//         <Button
//           className="w-fit"
//           variant="default"
//           onClick={() => {
//             setCookie('hideCookiePopup', true)
//             setShow(false)
//           }}
//         >
//           {t('hide-message')}
//         </Button>
//       </div>
//     </div>
//   )
// }

'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

function setCookie(name, value, days = 365) {
  let expires = ''
  if (days) {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = '; expires=' + date.toUTCString()
  }
  document.cookie = `${name}=${value || ''}${expires}; path=/`
}

function getCookie(name) {
  if (typeof document === 'undefined') return null
  const nameEQ = name + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

export const CookiePopup = () => {
  const [show, setShow] = useState(false)
  const t = useTranslations()

  useEffect(() => {
    const hasConsent = getCookie('cookie-consent')
    if (!hasConsent) setShow(true)
  }, [])

  const acceptCookies = () => {
    setCookie('cookie-popup-hide', 'true')
    setCookie('cookie-consent', 'true')
    setShow(false)
    location.reload() // ważne, jeśli chcesz np. od razu załadować analytics
  }

  const declineCookies = () => {
    setCookie('cookie-popup-hide', 'true')
    setCookie('cookie-consent', 'false')
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 w-full z-[100001] flex justify-center text-primary text-xl">
      <div className="flex flex-col sm:flex-row bg-background w-fit h-fit p-6 pb-8 gap-5 items-start sm:items-center justify-between">
        <span>
          {t('cookie-message')}
          <Link href="/privacy-policy" className="underline">
            {t('privacy-policy')}
          </Link>
        </span>

        <div className="flex gap-2">
          <Button className="w-fit" variant="outline" onClick={acceptCookies}>
            {t('accept')}
          </Button>
          <Button className="w-fit" onClick={declineCookies}>
            {t('decline')}
          </Button>
        </div>
      </div>
    </div>
  )
}
