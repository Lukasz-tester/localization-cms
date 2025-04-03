const localization = {
  defaultLocale: 'en',
  fallback: true,
  locales: [
    {
      code: 'de',
      label: 'Deutsch',
    },
    {
      code: 'en',
      // Regarding the label, we are using the syntax "{lang. in English} - ({lang. in native})".
      // The consensus is that it's a good idea to have languages ​​listed in their own languages: https://ux.stackexchange.com/q/37017/144485
      // Although others have made good points about why it is good to have them in English:
      // such as the user type, and the order of languages. See https://ux.stackexchange.com/q/3592/144485
      label: 'English',
    },
    {
      code: 'es',
      label: 'Español',
    },
    {
      code: 'it',
      label: 'Italiano',
    },
    {
      code: 'fr',
      label: 'Français',
    },
    {
      code: 'nl',
      label: 'Nederlands',
    },
    {
      code: 'pl',
      label: 'Polski',
    },
    {
      code: 'ru',
      label: 'Русский',
    },
    {
      code: 'ua',
      label: 'Українська',
    },
  ],
}

export default localization

// OLD VERSION

// {
//   code: 'de',
//   label: 'German (Deutsch)',
// },
// {
//   code: 'en',
//   // Regarding the label, we are using the syntax "{lang. in English} - ({lang. in native})".
//   // The consensus is that it's a good idea to have languages ​​listed in their own languages: https://ux.stackexchange.com/q/37017/144485
//   // Although others have made good points about why it is good to have them in English:
//   // such as the user type, and the order of languages. See https://ux.stackexchange.com/q/3592/144485
//   label: 'English (English)',
// },
// {
//   code: 'es',
//   label: 'Spanish (Español)',
// },
// {
//   code: 'it',
//   label: 'Italian (Italiano)',
// },
// {
//   code: 'fr',
//   label: 'French (Français)',
// },
// {
//   code: 'nl',
//   label: 'Dutch (Nederlands)',
// },
// {
//   code: 'pl',
//   label: 'Polish (Polski)',
// },
// {
//   code: 'ru',
//   label: 'Russian (Русский)',
// },
// {
//   code: 'ua',
//   label: 'Ukrainian (Українська)',
// },
