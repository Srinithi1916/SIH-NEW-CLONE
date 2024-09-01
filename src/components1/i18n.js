import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      home: "Home",
      metturuDam: "Mettur Dam",
      metturuDamTitle: "Mettur",
      metturuDamContent:
        "Explore the vibrant view of Salem and the vast Mettur Dam.",
      vaigaiDam: "Vaigai Dam",
      vaigaiDamTitle: "Vaigai",
      vaigaiDamContent:
        "Discover the architectural beauty and the significant role of the Vaigai Dam in Madurai.",
      amaravatiDam: "Amaravati Dam",
      amaravatiDamTitle: "Amaravati",
      amaravatiDamContent:
        "Experience the picturesque views and serene environment around the Amaravati Dam in Erode.",
      krishnagiriDam: "Krishnagiri Dam",
      krishnagiriDamTitle: "Krishnagiri",
      krishnagiriDamContent:
        "Enjoy the vibrant arts scene and the scenic beauty surrounding the Krishnagiri Dam.",
      sathanurDam: "Sathanur Dam",
      sathanurDamTitle: "Sathanur",
      sathanurDamContent:
        "Relax and take in the stunning views of the Sathanur Dam in Thiruvannamalai.",
      bhavanisagarDam: "Bhavanisagar Dam",
      bhavanisagarDamTitle: "Bhavanisagar",
      bhavanisagarDamContent:
        "Enjoy the tranquil waters and panoramic views at the Bhavanisagar Dam.",
      papanasamDam: "Papanasam Dam",
      papanasamDamTitle: "Papanasam",
      papanasamDamContent:
        "Relax by the Papanasam Dam and appreciate its natural beauty and peaceful environment.",
      mullaiPeriyarDam: "Mullai Periyar Dam",
      mullaiPeriyarDamTitle: "Mullai Periyar",
      mullaiPeriyarDamContent:
        "Admire the lush greenery and serene landscapes around the Mullai Periyar Dam.",
      kallanaiDam: "Kallanai Dam",
      kallanaiDamTitle: "Kallanai",
      kallanaiDamContent:
        "Explore the historical significance and architectural marvel of the Kallanai Dam, one of the oldest dams in India.",
      siruvaniDam: "Siruvani Dam",
      siruvaniDamTitle: "Siruvani",
      siruvaniDamContent:
        "Experience the serene and pristine environment around the Siruvani Dam, renowned for its purity.",
      perunchaniDam: "Perunchani Dam",
      perunchaniDamTitle: "Perunchani",
      perunchaniDamContent:
        "Discover the picturesque beauty and serene surroundings of the Perunchani Dam.",
      sholayarDam: "Sholayar Dam",
      sholayarDamTitle: "Sholayar",
      sholayarDamContent:
        "Explore the tranquil and scenic beauty of the Sholayar Dam in the Western Ghats.",
      learnMore: "Learn More",
      dams: "Dams",
      projects: "Projects",
      partners: "Partners",
      customerServices: "Customer Services",
      customerServicesDetails:
        "Details about customer services and additional features.",
      allRightsReserved: "All rights reserved.",
      detailAbout: "Detail about",
      login: "Login",
      signup: "Sign Up",
      crops: "Crops",
      cropImprovement: "Crop Improvement",
      cropManagement: "Crop Management",
      cropIrrigation: "Crop Irrigation",
      weather: "Weather",
      maps: "Maps",
      cropWeather: "Crop Climate",
      carbonFootprint: "Carbon Footprint",
      profile: "Profile",
      logout: "Logout",
      voice: "Voice",
      damLevel: "Dam Level",
      inspection: "Inspection",
      alert: "Alert",
      title: "Blue Field Techno",
      language: "Language",
      english: "English",
      tamil: "Tamil",
      hindi: "Hindi",
      telugu: "Telugu",
      kannada: "Kannada",
      speakNow: "Speak Now",
      sayCommand: "Say your command",
      close: "Close",
    },
  },
  hi: {
    translation: {
      home: "मुखपृष्ठ",
      metturuDam: "मेट्टूर डेम",
      metturuDamTitle: "मेट्टूर",
      metturuDamContent:
        "सलेम का जीवंत दृश्य और विशाल मेट्टूर डेम की खोज करें।",
      vaigaiDam: "वैगई डेम",
      vaigaiDamTitle: "वैगई",
      vaigaiDamContent:
        "मदुरै में वैगई डेम की वास्तुकला की सुंदरता और महत्व जानें।",
      amaravatiDam: "अमरावती डेम",
      amaravatiDamTitle: "अमरावती",
      amaravatiDamContent:
        "एरोडे में अमरावती डेम के चित्रमय दृश्य और शांतिपूर्ण वातावरण का अनुभव करें।",
      krishnagiriDam: "कृष्णागिरी डेम",
      krishnagiriDamTitle: "कृष्णागिरी",
      krishnagiriDamContent:
        "कृष्णागिरी डेम के चारों ओर जीवंत कला दृश्य और सुंदरता का आनंद लें।",
      sathanurDam: "सथानुर डेम",
      sathanurDamTitle: "सथानुर",
      sathanurDamContent:
        "तिरुवन्नामलाई में सथानुर डेम के सुंदर दृश्य पर आराम करें।",
      bhavanisagarDam: "भवानीसागर डेम",
      bhavanisagarDamTitle: "भवानीसागर",
      bhavanisagarDamContent:
        "भवानीसागर डेम के शांत जल और पैनोरमिक दृश्यों का आनंद लें।",
      papanasamDam: "पापनासम डेम",
      papanasamDamTitle: "पापनासम",
      papanasamDamContent:
        "पापनासम डेम के प्राकृतिक सौंदर्य और शांतिपूर्ण वातावरण का आनंद लें।",
      mullaiPeriyarDam: "मुल्लाई पेरियार डेम",
      mullaiPeriyarDamTitle: "मुल्लाई पेरियार",
      mullaiPeriyarDamContent:
        "मुल्लाई पेरियार डेम के चारों ओर हरे-भरे परिदृश्य और शांत वातावरण का आनंद लें।",
      kallanaiDam: "कल्लानई डेम",
      kallanaiDamTitle: "कल्लानई",
      kallanaiDamContent:
        "भारत के सबसे पुराने डेमों में से एक, कल्लानई डेम की ऐतिहासिक महत्वता और वास्तुकला का पता लगाएं।",
      siruvaniDam: "सिरुवानी डेम",
      siruvaniDamTitle: "सिरुवानी",
      siruvaniDamContent:
        "सिरुवानी डेम के शुद्ध और शांतिपूर्ण वातावरण का अनुभव करें।",
      perunchaniDam: "पेरुंचानी डेम",
      perunchaniDamTitle: "पेरुंचानी",
      perunchaniDamContent:
        "पेरुंचानी डेम की चित्रमय सुंदरता और शांतिपूर्ण वातावरण को जानें।",
      sholayarDam: "शोलयार डेम",
      sholayarDamTitle: "शोलयार",
      sholayarDamContent:
        "पश्चिमी घाटों में शोलयार डेम की शांतिपूर्ण और सुंदरता का अन्वेषण करें।",
      learnMore: "अधिक जानें",
      dams: "डेम",
      projects: "परियोजनाएँ",
      partners: "साझेदार",
      customerServices: "ग्राहक सेवाएँ",
      customerServicesDetails:
        "ग्राहक सेवाओं और अतिरिक्त सुविधाओं के बारे में विवरण।",
      allRightsReserved: "सर्वाधिकार सुरक्षित।",
      detailAbout: "के बारे में विवरण",
      login: "लॉग इन करें",
      signup: "साइन अप करें",
      crops: "फसलें",
      cropImprovement: "फसल सुधार",
      cropManagement: "फसल प्रबंधन",
      cropIrrigation: "फसल सिंचाई",
      weather: "मौसम",
      maps: "नक्शे",
      cropWeather: "फसल जलवायु",
      carbonFootprint: "कार्बन फुटप्रिंट",
      profile: "प्रोफ़ाइल",
      logout: "लॉग आउट",
      voice: "आवाज़",
      damLevel: "बांध स्तर",
      inspection: "निरीक्षण",
      alert: "ईमेल",
      title: "ब्लू फील्ड टेक्नो",
      language: "भाषा",
      english: "अंग्रेज़ी",
      tamil: "तमिल",
      hindi: "हिंदी",
      telugu: "तेलुगू",
      kannada: "कन्नड़",
      speakNow: "अब बोलें",
      sayCommand: "अपना आदेश कहें",
      close: "बंद करें",
    },
  },
  ta: {
    translation: {
      home: "முகப்பு",
      metturuDam: "மெட்டூர் அணை",
      metturuDamTitle: "மெட்டூர்",
      metturuDamContent:
        "சேலமும் பெரிய மெட்டூர் அணையின் அழகிய காட்சியைப் பார்வையிடவும்.",
      vaigaiDam: "வைகை அணை",
      vaigaiDamTitle: "வைகை",
      vaigaiDamContent:
        "மதுரையில் உள்ள வைகை அணையின் நிலைத்தன்மை மற்றும் மகத்துவத்தைப் பற்றி அறியவும்.",
      amaravatiDam: "அமராவதி அணை",
      amaravatiDamTitle: "அமராவதி",
      amaravatiDamContent:
        "எரோடில் அமைதியான மற்றும் அழகான அமராவதி அணையின் அழகான காட்சிகளை அனுபவிக்கவும்.",
      krishnagiriDam: "கிருஷ்ணகிரி அணை",
      krishnagiriDamTitle: "கிருஷ்ணகிரி",
      krishnagiriDamContent:
        "கிருஷ்ணகிரி அணையின் நன்கு கலை காட்சியும் அழகும் அனுபவிக்கவும்.",
      sathanurDam: "சாத்தனூர் அணை",
      sathanurDamTitle: "சாத்தனூர்",
      sathanurDamContent:
        "திருவண்ணாமலைவில் சாத்தனூர் அணையின் அழகிய காட்சிகளை ரசிக்கவும்.",
      bhavanisagarDam: "பவானிசாகர் அணை",
      bhavanisagarDamTitle: "பவானிசாகர்",
      bhavanisagarDamContent:
        "பவானிசாகர் அணையின் அமைதியான நீர் மற்றும் பரந்த காட்சிகளை அனுபவிக்கவும்.",
      papanasamDam: "பாபநாசம் அணை",
      papanasamDamTitle: "பாபநாசம்",
      papanasamDamContent:
        "பாபநாசம் அணையின் இயற்கை அழகும் அமைதியான சூழலும் அனுபவிக்கவும்.",
      mullaiPeriyarDam: "முல்லை பெரியாறு அணை",
      mullaiPeriyarDamTitle: "முல்லை பெரியாறு",
      mullaiPeriyarDamContent:
        "முல்லை பெரியாறு அணையின் பசுமை மற்றும் அமைதியான சூழலை அனுபவிக்கவும்.",
      kallanaiDam: "கல்லனை அணை",
      kallanaiDamTitle: "கல்லனை",
      kallanaiDamContent:
        "இந்தியாவின் மிக பழமையான அணைகளில் ஒன்றான கல்லனை அணையின் வரலாற்றுத் தரமும் கட்டுமானத்தைப் பற்றியவை அறியவும்.",
      siruvaniDam: "சிருவானி அணை",
      siruvaniDamTitle: "சிருவானி",
      siruvaniDamContent:
        "சிருவானி அணையின் தூய்மை மற்றும் அமைதியான சூழலை அனுபவிக்கவும்.",
      perunchaniDam: "பெருஞ்சனி அணை",
      perunchaniDamTitle: "பெருஞ்சனி",
      perunchaniDamContent:
        "பெருஞ்சனியின் அழகிய காட்சிகள் மற்றும் அமைதியான சூழலை அறியவும்.",
      sholayarDam: "சோலயர் அணை",
      sholayarDamTitle: "சோலயர்",
      sholayarDamContent:
        "மேல்திடுக்குகளிலுள்ள சோலயர் அணையின் அமைதியான மற்றும் அழகான காட்சிகளை ஆராயவும்.",
      learnMore: "மேலும் அறியவும்",
      dams: "அணைகள்",
      projects: "திட்டங்கள்",
      partners: "நண்பர்கள்",
      customerServices: "வாடிக்கையாளர் சேவைகள்",
      customerServicesDetails:
        "வாடிக்கையாளர் சேவைகள் மற்றும் கூடுதல் அம்சங்களின் விவரங்கள்.",
      allRightsReserved: "எல்லா உரிமைகளும் பாதுகாக்கப்படுகின்றன.",
      detailAbout: "விவரங்கள்",
      login: "உள்நுழைய",
      signup: "பதிவு செய்ய",
      crops: "பயிர்கள்",
      cropImprovement: "பயிர் மேம்பாடு",
      cropManagement: "பயிர் மேலாண்மை",
      cropIrrigation: "பயிர் பாசனம்",
      weather: "வானிலை",
      maps: "வரைபடங்கள்",
      cropWeather: "பயிர் காலநிலை",
      carbonFootprint: "கார்பன் கால்",
      profile: "சுயவிவரம்",
      logout: "வெளியேறு",
      voice: "குரல்",
      damLevel: "அணை நிலை",
      inspection: "ஆய்வு",
      alert: "எச்சரிக்கை",
      title: "ப்ளூ பீல்ட் டெக்னோ",
      language: "மொழி",
      english: "ஆங்கிலம்",
      tamil: "தமிழ்",
      hindi: "இந்தி",
      telugu: "తెలుగు",
      kannada: "ಕನ್ನಡ",
      speakNow: "அது",
      sayCommand: "உங்கள் ஆணை சொல்லுங்கள்",
      close: "மூடு",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
