import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router.js'
import store from './store'
import VeeValidate from 'vee-validate'
import * as VueGoogleMaps from "vue2-google-maps";
import checkView from 'vue-check-view'
import VueScrollTo from 'vue-scrollto'
import VueI18n from 'vue-i18n'
import './plugins/eventBus'
import '@/components/global'
import PagesSrb from '@/data/pages_srb.json'
import ServicesSrb from '@/data/services_srb.json'
import PagesEn from '@/data/pages_en.json'
import ServicesEn from '@/data/services_en.json'

Vue.use(Vuex)
Vue.use(VeeValidate)
Vue.use(checkView)
Vue.use(VueI18n)
Vue.use(VueGoogleMaps, {
  load: {
    key: "",
    libraries: "places" // necessary for places input
  }
});

Vue.config.productionTip = false

const messages = {
  srpski: {
    menu: {
      home: 'Početna',
      wedding: 'Venčanja',
      birthday: 'Rodjendani',
      baptism: 'Krštenja',
      photograph:'Zašto dobar fotograf?' 
    },
    home: {
      aboutTitle: 'O nama',
      aboutText1: 'Nastavivši porodičnu tradiciju dugu 22 godine, možemo se, pre svega, pohvaliti kao svedoci Vaših najintimnijih proslava i događaja. Naša fotografska radnja je opremljena najsavremenijom opremom i tehnologijom, što nam omogućava da sačuvamo sve Vaše najdraže i najlepše uspomene, kako fotografijom, tako i putem snimaka.',
      aboutText2: 'Zašto je važno izabrati dobrog fotografa?',
      aboutText3: 'Od  1995. godine se trudimo da idemo u korak sa vremenom i odgovorimo na sve zadatke savremene tehnologije I napredka fotografskih usluga. Trud i iscrpan rad su nas doveli do velikogг broja stalnih i zadovoljnih mušterija bilo u našoj radnji – bilo na terenu. Ono po čemu se izdvajamo od ostalih jeste veoma saradljiv odnos sa našim vernim klijentima, čijim smo sugestijama i pohvalama vremenom postajali sve bolji i opravdali očekivanja.',
      aboutText4: 'Među ponudama na sajtu možete videti sve naše usluge i kontaktirati nas ukoliko ste zainteresovani da i za Vas preuzmemo odgovornost čuvara najlepših životnih uspomena.',
      featuresTitle: 'Prijateljski odnos sa našim klijentima, pun sugestija i pohvala nas je doveo na visoke lestvice fotografskih usluga. Zahvaljujući dugom i iscrpnom radu bili smo svedoci Vaših najintimnijih proslava i dešavanja.  Opremljeni najsavremenijom aparaturom, omogućili smo Vam čuvanje najdražih uspomena!'
    },
    features: {
      link: 'Pogledajte galeriju'
    },
    services: {
      title: 'Naše usluge'
    },
    page: {
      link: 'Početna'
    },
    photographer: {
      sidetext: 'Zasto izabrati dobrog fotografa?',
      title: 'Tim fotografa i zaposlenih u Foto Studio Express Vam garantuje da će se potruditi I dati sve od sebe kako biste Vi i Vama najbiliži ljudi uživali u razgledanju albuma I photobook-ova  i prisećanju najlepših momenata sa venčanja.',
      text1: 'Vaše venčanje je jedan od najvažnijih dana u Vašem životu i zaslužuje apsolutno podudaranje svih elemenata u toku organizacije kako bi Vam u uspomeni ostala kompaktna i savršena celina. Kada kažemo elementi, pre svega mislimo na odabir sale, hrane, fotografa, muzike, dekoracije, trubača, mladenačke torte, venčanice, odela, nakita i tako dalje. Iz iskustva sa mladencima, možemo reći da se najviše potrude oko restorana i hrane,muzike i fotografa. Iako Vam ova lista na samom početku može izgledati zastrašujuće i doprinese tome da se zapitate da li ste zaista u mogućnosti da pronađete sve ono što bi Vaš dan činilo idealnim, nemojte se brinuti unapred. Neka Vas obuzme samo pozitivna trema i duboko verujte u svoj ukus i ukus Vašeg budućeg supružnika. Na prvi pogled odabir fotografa može da se učini kao najlakši posao, jer mislimo da je dovoljno samo imati fotografiju kada osetimo potrebu da se prisetimo venčanja. Naša preporuka je da se malo potrudite,  istražujete ponude, razgledate fotografije i snimke drugih mladenaca kako biste konačno došli do odgovarajućeg tima zaduženog za ovekovečavanje Vašeg dana.',
      text2: 'U današnjem,modernom vremenu taj posao Vam je znatno olakšan nego ranije. S obzirom na to da živimo u digitalnoj eri, aparati I sva prateća oprema su vrlo pristupačni. Stoga su I dostupni svima. Iz tog razloga Vam savetujemo da se čuvate amatera.  Putem interneta, društvenih mreža, raznih snimaka na sajtovima možete odabrati baš onoga koga smatrate da će taj posao uraditi kvalitetno,odgovorno i shodno Vašim idejama i željama. Ispravan odabir fotografa će učiniti da Vaše uspomene traju zauvek. Ovo Vam pre svega savetujemo, jer ukoliko niste zadovoljni fotografijama, nažalost nemoguće je ponoviti ih. Dobar fotograf će znati kako da ispuni Vaše želje, umeće da se snađe u svim situacijama pazeći na kvalitet. Neka to bude osoba koja sa ljubavlju radi svoj posao, koja je sklona pravljenju umetničkog dela a ne fotografisanja trenutka i koja svojim savetima doprinosi poboljšanju izgleda svake fotografije ponaosob.  Pojedini mladenci  su,u nadi da će uštedeti, skloni odabiru ne toliko kvalitetnog tima koji nije obučen da ispuni sve njihove želje. Smatramo da to nije dobar put do jedine uspomene koja Vam ostane nakon mnogo godina braka.',
    }
  },
  english: {
    PagesEn,
    ServicesEn,
    menu: {
      home: 'Home',
      wedding: 'Wedding',
      birthday: 'Birthday',
      baptism: 'Baptism',
      photograph:'Why to choose a good photographer?' 
    },
    home: {
      aboutTitle: 'About Us',
      aboutText1: 'By continuing the family tradition for 22 years, we can be praised for being, in the first place, faithful witnesses of your most intimate celebrations and events. Our photographic shop is equipped with state-of-the-art equipment and technology, which allows us to preserve all your favorite and most beautiful memories, both by photographs and through footage.',
      aboutText2: 'Why to choose a good photographer?',
      aboutText3: 'Since 1995, we have been trying to keep up with time and respond to all the tasks of modern technology and the progress of photographic services. The hard and exhausting work has brought us a large number of regular and satisfied customers served either in our shop or elsewhere. What distinguishes us from the rest is a very cooperative relationship with our faithful clients, whose suggestions and praise have gradually become more numerous as we justified their expectations.',
      aboutText4: 'Among the offers on the website you can see a variety of our service and you may contact us any time. If you are interested in us to take over the responsibility of keeping your most beautiful life memories.',
      featuresTitle: 'A friendly relationship with our clients, full of suggestions and praise brought us to high scales of photographic services. During our long and exhausting work experience we witnessed Your most intimate celebrations and events. Equipped with state-of- the-art equipment, we give you the most memorable memories!' 
    },
    features: {
      link: 'Visit gallery'
    },
    services: {
      title: 'Our services'
    },
    page: {
      link: 'Home'
    }
  }
}

const i18n = new VueI18n({
  locale: 'srpski',
  messages,
})


Vue.use(VueScrollTo, {
     container: "body",
     duration: 500,
     easing: "ease",
     offset: 0,
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })

new Vue({
	store,
	router,
    i18n,
	render: h => h(App)
}).$mount('#app')
