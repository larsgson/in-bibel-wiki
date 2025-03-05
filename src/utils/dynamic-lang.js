import { obsStoryList } from '../constants/obsHierarchy'
import { gospelOfJohnObj } from '../constants/naviChaptersJohn'
import { fullBibleList } from '../constants/bibleData'
import { 
  bibleDataEN, 
  bibleDataDE_ML_1912,
  bibleDataES_WP,
  bibleDataFR_WP,
  bibleDataHU_WP,
  bibleDataLU_WP,
  bibleDataRO_WP,
  bibleDataPT_BR_WP
} from '../constants/bibleData'

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

export const langExtraInfo = {
  as: { engName: "assamese", name: "অসমীয়া", code3: "asm", version: "irv" },
  bn: { engName: "bengali", name: "বাঙালি", code3: "ben", version: "irv" },
  en: { engName: "english", name: "English", code3: "eng", version: "esv" },
  gu: { engName: "gujarati", name: "ગુજરાતી", code3: "guj", version: "irv" },
  he: { engName: "hebrew, ancient", name: "עברית, עתיקה", code3: "hbo" },
  hi: { engName: "hindi", name: "हिंदी", code3: "hin", version: "irv" },
  kn: { engName: "kannada", name: "ಕನ್ನಡ", code3: "kan", version: "irv" },
  ml: { engName: "malayalam", name: "മലയാളം", code3: "mal", version: "irv" },
  mr: { engName: "marathi", name: "मराठी", code3: "mar", version: "irv" },
  ne: { engName: "nepali", name: "नेपाली", code3: "nep", version: "ulb" },
  pu: { engName: "punjabi", name: "ਪੰਜਾਬੀ", code3: "pan", version: "irv" },
  ta: { engName: "tamil", name: "தமிழ்", code3: "tam", version: "irv" },
  te: { engName: "telugu", name: "తెలుగు", code3: "tel", version: "irv" },
  ur: { engName: "urdu", name: "उर्दू", code3: "urd", version: "irv" }
}

export const selectAudioBible = (lang) => `audio-bible-vachan-${lang}` 

export const useSerie = (lang,serId) => {
  console.log(lang)
  const useCode3 = langExtraInfo[lang].code3
  const useVersion = langExtraInfo[lang].version
  const usePath = "https://vachan.sgp1.cdn.digitaloceanspaces.com/audio_bibles/"
  return {
    "bibleBookList": fullBibleList,
    "wordProjectType": true,
    "curPath": `${usePath}${useCode3}/${useVersion}/`,
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