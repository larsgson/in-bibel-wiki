import { obsStoryList } from '../constants/obsHierarchy'
import { fullBibleList, newTestamentList } from '../constants/bibleData'
import { lang2to3letters } from '../constants/languages'
import { gospelOfJohnObj } from '../constants/naviChaptersJohn'

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

export const langVersion = {
  as: "irv", 
  bn: "irv", 
  en: "esv", 
  gu: "irv", 
  har: "hb", 
  hi: "irv", 
  kn: "irv", 
  ml: "irv", 
  mr: "irv", 
  ne: "ulb", 
  ory: "irv", 
  pu: "irv", 
  ta: "irv", 
  te: "irv", 
  ur: "irv", 
}

export const limitToNT = [ "bgl", "kfs", "boc", "dgo", "dom", "kar", "gjk", "kon", "may", "nag", "vav" ]

export const navLangList = [ "en", "hi", "kn", "ml" ]

export const selectAudioBible = (lang) => `audio-bible-vachan-${lang}` 

export const useSerie = (lang,serId) => {
  const checkObj = {
    "en-jhn-serie": gospelOfJohnObj,
    "en-jhn-plan": "videoPlan",
    "en-audio-OBS": bibleDataEnOBSStory,
  }
  const is3LetterLang = (lang.length > 2)
  const curLang = is3LetterLang ? lang : lang2to3letters[lang]
  if (checkObj[serId]) return checkObj[serId]
  else {
    const useVersion = langVersion[lang]
    const useLimitedList = limitToNT.includes(lang)
    const usePath = "https://vachan.sgp1.cdn.digitaloceanspaces.com/audio_bibles/"
    return {
      "bibleBookList": useLimitedList ? newTestamentList : fullBibleList,
      "wordProjectType": true,
      "curPath": useVersion ? `${usePath}${curLang}/${useVersion}/` : `${usePath}${curLang}/`,
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
  return "en"
}
export const serieNaviType =(id) => {
  const checkObj = {
    "en-audio-bible-WEB": "audioBible",
    "en-jhn-serie": "videoSerie",
    "en-jhn-plan": "videoPlan",
    "en-audio-OBS": "audioStories",
  }
  return checkObj[id] || "audioBible"
}