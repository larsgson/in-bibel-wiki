import { obsStoryList } from '../constants/obsHierarchy'
import { fullBibleList, newTestamentList } from '../constants/bibleData'

const bibleDataEnOBSStory = {
  freeType: false,
  curPath: "",
  title: "Open Bible Stories",
  description: "",
  image: {
      origin: "Local",
      filename: ""
  },
  language: "eng",
  mediaType: "audio",
  episodeList: obsStoryList,
  uniqueID: "uW.OBS.en"
}

export const lang2to3letters = {
  as: "asm",
  bn: "ben",
  en: "eng",
  gu: "guj",
  he: "hbo",
  hi: "hin",
  kn: "kan",
  ml: "mal",
  mr: "mar",
  ne: "nep",
  pu: "pan",
  ta: "tam",
  te: "tel",
  ur: "urd",
}

export const contentLangData = {
  asm: { engName: "assamese", name: "অসমীয়া", iso639: "as", version: "irv" }, 
  bgl: { engName: "baghlayani", name: "Baghlayani", books: "NT" }, 
  ben: { engName: "bengali", name: "বাঙালি", iso639: "bn", version: "irv" }, 
  kfs: { engName: "bilaspuri", name: "बिलासपुरी", version: "irv", books: "NT" }, 
  boc: { engName: "bommala", name: "Bommala", books: "NT" }, 
  dgo: { engName: "dogri", name: "डोगरी", version: "dsv", books: "NT" }, 
  dom: { engName: "dommri", name: "Dommri", books: "NT" }, 
  eng: { engName: "english", name: "English", iso639: "en", version: "esv" }, 
  guj: { engName: "gujarati", name: "ગુજરાતી", iso639: "gu", version: "irv" }, 
  har: { engName: "haryanvi", name: "हरियाणवी", version: "hb" }, 
  // hbo: { engName: "hebrew, ancient", name: "עברית, עתיקה", iso639: "he" }, 
  hin: { engName: "hindi", name: "हिंदी", iso639: "hi", version: "irv" }, 
  kar: { engName: "kachha", name: "कच्छ", books: "NT" },
  kan: { engName: "kannada", name: "ಕನ್ನಡ", iso639: "kn", version: "irv" }, 
  gjk: { engName: "koli-kachhi", name: "કોલી કચ્છી", books: "NT" }, 
  kon: { engName: "kongaru", name: "Kongaru", books: "NT" }, 
  mal: { engName: "malayalam", name: "മലയാളം", iso639: "ml", version: "irv" }, 
  mar: { engName: "marathi", name: "मराठी", iso639: "mr", version: "irv" }, 
  may: { engName: "mayla-marathi", name: " मायला मराठी", books: "NT"}, 
  nag: { engName: "nagamese", name: "Nagamese", version: "isv", books: "NT" }, 
  nep: { engName: "nepali", name: "नेपाली", iso639: "ne", version: "ulb" }, 
  ory: { engName: "odia", name: "ଓଡିଆ", version: "irv" }, 
  pan: { engName: "punjabi", name: "ਪੰਜਾਬੀ", iso639: "pu", version: "irv" }, 
  tam: { engName: "tamil", name: "தமிழ்", iso639: "ta", version: "irv" }, 
  tel: { engName: "telugu", name: "తెలుగు", iso639: "te", version: "irv" }, 
  urd: { engName: "urdu", name: "उर्दू", iso639: "ur", version: "irv" }, 
  vav: { engName: "varli-davri", name: "વારલી", books: "NT" } 
}

export const navLangList = [ "en", "hi", "kn", "ml" ]

export const selectAudioBible = (lang) => `audio-bible-vachan-${lang}` 

export const useSerie = (lang,serId) => {
  const useVersion = contentLangData[lang]?.version
  const useLimitedList = contentLangData[lang]?.books === "NT"
  const usePath = "https://vachan.sgp1.cdn.digitaloceanspaces.com/audio_bibles/"
  return {
    "bibleBookList": useLimitedList ? newTestamentList : fullBibleList,
    "wordProjectType": true,
    "curPath": useVersion ? `${usePath}${lang}/${useVersion}/` : `${usePath}${lang}/`,
    "title": "Audio Bibel",
    uniqueID: `Vachan-${lang}`,
    "description": "Public domain",
    "language": lang,
    "mediaType": "bible",
    "image": {
       "origin": "Local",
       "filename": "pics/Bible_OT.png"
    }
  }
}
  // "de-jhn-serie": gospelOfJohnObj,
  // "en-jhn-serie": gospelOfJohnObj,
  // "en-audio-OBS": bibleDataEnOBSStory,
  // "de-audio-bible-ML": bibleDataDE_ML_1912,
  // "en-audio-bible-WEB": bibleDataEN,
  // "es-audio-bible-WordProject": bibleDataES_WP,
  // "pt-br-audio-bible-WordProject": bibleDataPT_BR_WP,
  // "fr-audio-bible-WordProject": bibleDataFR_WP,
  // "hu-audio-bible-WordProject": bibleDataHU_WP,
  // "lu-audio-bible-WordProject": bibleDataLU_WP,
  // "ro-audio-bible-WordProject": bibleDataRO_WP,

export const serieLang = (id) => {
  const checkObj = {
    "de-audio-bible-ML": "de",
    "en-audio-bible-WEB": "en",
    "es-audio-bible-WordProject": "es",
    "pt-br-audio-bible-WordProject": "pt-br",
    "fr-audio-bible-WordProject": "fr",
    "hu-audio-bible-WordProject": "hu",
    "lu-audio-bible-WordProject": "lu",
    "ro-audio-bible-WordProject": "ro",
    "de-jhn-serie": "de",
    "en-jhn-serie": "en",
    "de-jhn-plan": "de",
    "en-jhn-plan": "en",
    "en-audio-OBS": "en",
  }
  // return checkObj[id]
  return "fr"
}
export const serieNaviType =(id) => {
  const checkObj = {
    "de-audio-bible-ML": "audioBible",
    "en-audio-bible-WEB": "audioBible",
    "es-audio-bible-WordProject": "audioBible",
    "pt-br-audio-bible-WordProject": "audioBible",
    "fr-audio-bible-WordProject": "audioBible",
    "hu-audio-bible-WordProject": "audioBible",
    "lu-audio-bible-WordProject": "audioBible",
    "ro-audio-bible-WordProject": "audioBible",
    "de-jhn-serie": "videoSerie",
    "en-jhn-serie": "videoSerie",
    "de-jhn-plan": "videoPlan",
    "en-jhn-plan": "videoPlan",
    "en-audio-OBS": "audioStories",
  }
  // return checkObj[id]
  return "audioBible"
}