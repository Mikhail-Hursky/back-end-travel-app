import { Router } from "express";
import Country from "../models/ICountry";

const router = Router();

const spain = {
  iso: "ESP",
  currency: "EUR",
  country: "Spain",
  latLon: [40.4168, 3.7038],
  description: {
    en:
      "Spain is a state in the extreme southwest of Europe, occupies most of the Iberian Peninsula, the Balearic Islands in the Mediterranean Sea, and the Canary Islands in the Atlantic Ocean. Schematically, it has a shape reminiscent of the stretched skin of a bull. ... The total area of ​​Spain is 504 782 km² (land area - 499 400 km²).",
    ru:
      "Испания — государство на крайнем юго-западе Европы, занимает большую часть Пиренейского полуострова, Балеарские острова в Средиземном море, Канарские острова в Атлантическом океане. Схематически она имеет форму, напоминающую растянутую шкуру быка. ... Общая площадь Испании 504 782 км² (площадь суши — 499 400 км²).",
    fr:
      "L'Espagne est un État situé à l'extrême sud-ouest de l'Europe, occupe la majeure partie de la péninsule ibérique, les îles Baléares dans la mer Méditerranée et les îles Canaries dans l'océan Atlantique. Schématiquement, il a une forme qui rappelle une peau de taureau étirée. ... La superficie totale de l'Espagne est de 504 782 km² (superficie de 499 400 km²).",
  },
  images: [
    {
      name: {
        en: "Altamira Cave",
        ru: "Пещера Альтамира",
        fr: "Grotte d'Altamira",
      },
      img:
        "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Spain-3-The-Cave-of-Altamira-e1491982806964.jpg",
      description: {
        en:
          "Historians see this landmark in Spain as a primitive analogue of the Sistine Chapel. The walls of this unique 270 m long cave are decorated with rock paintings. Seven corridors and a 6-meter-high hall are covered with these ancient paintings that tell about the life of primitive people.",
        ru:
          "В этой достопримечательности Испании историки усматривают первобытный аналог Сикстинской капеллы. Стены этой уникальной пещеры длиной в 270 м украшены наскальными рисунками. Семь коридоров и зал 6-тиметровой высоты покрывают эти древние росписи, повествующие о жизни первобытных людей.",
        fr:
          "Les historiens voient ce monument en Espagne comme un analogue primitif de la chapelle Sixtine. Les murs de cette grotte unique de 270 m de long sont décorés de peintures rupestres. Sept couloirs et une salle de 6 mètres de haut sont recouverts de ces peintures anciennes qui racontent la vie des peuples primitifs.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "La Rioja - the land of vineyards",
        ru: "Ла-Риоха – страна виноградников",
        fr: "La Rioja - le pays des vignes",
      },
      img:
        "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Spain-7-La-Rioja-vinegrove-land-e1491984144584.jpg",
      description: {
        en:
          "There is something to visit in Spain and connoisseurs of real Spanish wines. The Rioja region in northern Spain is famous for its vineyards. The wines produced here are full-bodied and bright in taste. Due to the unique composition of the soil and microclimate, each zone has its own type of wine.",
        ru:
          "Есть что посетить в Испании и ценителям настоящих испанских вин. Регион Риоха на севере Испании славится своими виноградниками. Вина, производимые здесь, отличаются полнотелостью и яркостью вкуса. Благодаря уникальному составу почвы и микроклимату,  для каждой зоны характерен свой вид вин. ",
        fr:
          "Il y a quelque chose à visiter en Espagne et les connaisseurs de vrais vins espagnols. La région de la Rioja dans le nord de l'Espagne est célèbre pour ses vignobles. Les vins produits ici sont corsés et brillants au goût. En raison de la composition unique du sol et du microclimat, chaque zone a son propre type de vin.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Ordesa y Monte Perdido National Park",
        ru: "Национальный парк Ордеса-и-Монте-Пердидо",
        fr: "Parc national d'Ordesa y Monte Perdido",
      },
      img:
        "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Spain-9-Ordesa-y-Monte-Perdido-National-Park-e1491984613524.jpg",
      description: {
        en:
          "There are famous sights of Spain in its most remote corners. One of the first national parks, the Ordesa y Monte Perdido Nature Reserve, is still considered the most beautiful in the country. Ordesa Park was created in 1918, and in 1977 it was merged with Monte Perdido Park. Of all the parks that make up the natural complex of the Pyrenees, this park is considered the most striking.",
        ru:
          "Знаменитые достопримечательности Испании есть и в самых отдаленных ее уголках. Один из первых национальных парков –  заповедник Ордеса-и-Монте-Пердидо –  до сих пор считается самым красивым в стране. Парк Ордеса был создан в 1918 году, а в 1977 году он был объединен с парком Монте-Пердидо. Из всех парков, составляющих природный комплекс Пиренеев, этот парк считается наиболее ярким.",
        fr:
          "Il y a des sites célèbres de l'Espagne dans ses coins les plus reculés. L'un des premiers parcs nationaux, la réserve naturelle d'Ordesa y Monte Perdido, est toujours considéré comme le plus beau du pays. Le parc d'Ordesa a été créé en 1918 et en 1977, il a été fusionné avec le parc du Monte Perdido. De tous les parcs qui composent le complexe naturel des Pyrénées, ce parc est considéré comme le plus remarquable.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Park Guell",
        ru: "Парк Гуэля",
        fr: "Parc Guell",
      },
      img:
        "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Spain-4-The-Park-Guell-e1491983063738.jpg",
      description: {
        en:
          "The great architect Antoni Gaudi had a hand in creating another landmark of Spain, famous all over the world. Park Guell is more than just a collection of green spaces. This site harmoniously combines gardens and residential areas - an analogue of the fashionable at the beginning of the 20th century. the concept of 'city-garden'.",
        ru:
          "Великий архитектор Антонио Гауди приложил свою руку к созданию еще одной достопримечательности Испании, знаменитой на весь мир. Парк Гуэля – это не просто скопление зеленых насаждений. На этом участке гармонично сочетаются сады и жилые зоны – аналог модной в начале XX в. концепции «город-сад».",
        fr:
          "Le grand architecte Antoni Gaudi a contribué à la création d'un autre monument de l'Espagne, célèbre dans le monde entier. Le parc Guell est plus qu'un simple ensemble d'espaces verts. Ce site combine harmonieusement jardins et zones résidentielles - un analogue de la mode au début du XXe siècle. le concept de 'ville-jardin'.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Alcazar of Christian Kings",
        ru: "Алькасар Христианских королей",
        fr: "Alcazar des rois chrétiens",
      },
      img:
        "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Spain-6-Castle-of-the-Christian-Monarchs-e1491983815674.jpg",
      description: {
        en:
          "What to see in Spain to get acquainted with the architectural styles of different eras? Of course the Alcazar of the Christian Kings, which is a worthy part of the UNESCO World Heritage List. With magnificent gardens, an impregnable citadel, ancient Mudejar architecture and rich history, it is the second monarchical residence in the world, after the Seville one.",
        ru:
          "Что посмотреть в Испании для знакомства с архитектурными стилями различных эпох? Конечно  Алькасар Христианских королей, являющийся достойной частью списка всемирного наследия ЮНЕСКО. Благодаря великолепным садам, неприступной цитадели, старинной архитектуре в стиле мудехар и богатой истории, он является второй в мире монархической резиденцией, после севильской.",
        fr:
          "Que voir en Espagne pour se familiariser avec les styles architecturaux de différentes époques? Bien sûr, l'Alcazar des rois chrétiens, qui est une partie digne de la liste du patrimoine mondial de l'UNESCO. Avec de magnifiques jardins, une citadelle imprenable, une ancienne architecture mudéjar et une histoire riche, c'est la deuxième résidence monarchique au monde, après celle de Séville.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Segovia city",
        ru: "Город Сеговия",
        fr: "Ville de Ségovie",
      },
      img:
        "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Spain-12-Segovia-e1491985284638.jpg",
      description: {
        en:
          "Due to its historical significance and unique atmosphere, the city of Segovia has become part of the UNESCO World Heritage List. The tiny province of Segovia is adjacent to Madrid. On its old streets, you can hear the echoes of mixed eras - Visigod, Arab, Spanish, Roman.",
        ru:
          "Благодаря своей исторической значимости и неповторимой атмосфере, город Сеговия стал частью списка всемирного наследия ЮНЕСКО. Крохотная провинция Сеговия соседствует с Мадридом. На ее старинных улочках слышатся отголоски смешанных эпох – вестгодских, арабских, испанских, римских.",
        fr:
          "En raison de son importance historique et de son atmosphère unique, la ville de Ségovie est devenue une partie de la liste du patrimoine mondial de l'UNESCO. La petite province de Ségovie est adjacente à Madrid. Dans ses vieilles rues, vous pouvez entendre les échos des époques mélangées - Visigod, arabe, espagnole, romaine.",
      },
      rate: 3.5,
    },
  ],
};

const japon = {
  iso: "JPN",
  currency: "JPY",
  country: "Japan",
  latLon: [35.6894, 139.769],
  description: {
    en:
      "The territory of Japan is about 370 thousand square meters, which allows it to occupy only the 61st line in the world ranking of countries with the largest territory. However, the number of people living in this territory of 129 million people (as of 2015), puts Japan among the most populous countries in the world. The country ranks 10th in the list of countries in terms of the number of people living.",
    ru:
      "Территория Японии составляет около 370 тыс. квадратных метров, что позволяет ей занимать лишь 61-ую строчку в мировом рейтинге стран с самой большой территорией. Однако, количество проживающих на этой территории людей 129 млн. человек (по состоянию на 2015 год), ставит Японию среди самых густонаселенных стран мира. Страна занимает 10-ую строчку в списке стран по количеству проживающих людей.",
    fr:
      "Le territoire du Japon est d'environ 370 mille mètres carrés, ce qui lui permet d'occuper seulement la 61e ligne du classement mondial des pays ayant le plus grand territoire. Cependant, le nombre de personnes vivant sur ce territoire de 129 millions d'habitants (en 2015) place le Japon parmi les pays les plus peuplés du monde. Le pays se classe 10e dans la liste des pays en termes de nombre de personnes vivant.",
  },
  images: [
    {
      name: {
        en: "Tokyo sky tree",
        ru: "Небесное дерево Токио",
        fr: "Arbre du ciel de Tokyo",
      },
      img:
        "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2018/06/3-Smotrovaya_ploshhadka_Tokyo_Sky_Tree-e1528832935873.jpg",
      description: {
        en:
          "Go to the observation deck located on the 52nd floor. All the sights of Japan will open to your eyes at a time. After the Burj Khalifa, the Tokyo Sky Tree Town is the second-most-level television tower in the world. A bird's-eye view of the city often evokes amazed exclamations.",
        ru:
          "Пройдите на смотровую площадку, расположенную на 52 этаже. Вашему взору одновременно откроются все достопримечательности Японии. Город Небесного Дерева Токио после Бурдж-Халифы является второй по высоте телебашней в мире. Вид на город с высоты птичьего полета часто вызывает восхищенные возгласы.",
        fr:
          "Rendez-vous sur la plate-forme d'observation située au 52e étage. Tous les sites touristiques du Japon s'ouvriront à vos yeux à la fois. Après la Burj Khalifa, la Tokyo Sky Tree Town est la deuxième tour de télévision la plus élevée au monde. Une vue à vol d'oiseau de la ville suscite souvent des exclamations émerveillées.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Emperor Meiji shrine",
        ru: "Храм императора Мейдзи",
        fr: "Sanctuaire de l'empereur Meiji",
      },
      img:
        "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2018/06/10-Hram_imperatora_Meydzi-e1528833104117.jpg",
      description: {
        en:
          "The tomb and the largest Shinto shrine in the capital. The building is a unique example of Japanese temple architecture (it was erected using balsa). The temple is surrounded by a majestic garden; on the territory there is a treasury with the personal belongings of the Meritorian Emperor. The outer garden houses the Wedding Hall, where Marriage ceremonies in the Shinto tradition are held to this day, and the Art Gallery with frescoes depicting the life of the imperial family. Each guest is given a prediction sheet - omikuji. If you want to know your destiny, plan a visit to this Tokyo landmark;",
        ru:
          "Усыпальница и крупнейшее в столице синтоистское святилище. Здание является уникальным образцом японской храмовой архитектуры (при его возведении использовальсовалья). Храм окружает величественный сад, на территории есть сокровищница с личными вещами имперайдра Меритора. Во внешнем саду открыты Свадебный Зал, где по сей день проводятся церемонии Бракосочетания в традициях синто, и Картинная галерея с фресками, рассказывающими о жизни императорского семейства. Каждому гостю выдается листок с предсказаниями - омикудзи. Если вы хотите узнать свою судьбу, запланируйте посещение этой достопримечательности Токио;",
        fr:
          "Le tombeau et le plus grand sanctuaire shinto de la capitale. Le bâtiment est un exemple unique de l'architecture des temples japonais (il a été érigé en balsa). Le temple est entouré d'un majestueux jardin, sur le territoire il y a un trésor avec les effets personnels de l'empereur méritorien. Le jardin extérieur abrite la salle des mariages, où se tiennent encore aujourd'hui les cérémonies de mariage dans la tradition shintoïste, et la galerie d'art avec des fresques illustrant la vie de la famille impériale. Chaque invité reçoit une feuille de prédiction - omikuji. Si vous voulez connaître votre destin, prévoyez une visite à ce monument de Tokyo;",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Happoen Garden",
        ru: "Сад Хаппоен ",
        fr: "Jardin Happoen",
      },
      img:
        "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2018/06/8-Sad_Happoen-e1528833047691.jpg",
      description: {
        en:
          "One of the reasons for the success of this landmark in Tokyo is the complete lack of symmetry, characteristic of landscape gardens in Europe. A corner of tranquility and untouched nature is located in the middle of the noisiest and busiest quarter of the capital, surrounded by glass and concrete. Walking through the park, you can find a waterfall hidden in dense greenery, watch how the imperial carps swim quietly in a picturesque pond. Where to go in Tokyo if you are tired of modernity, lights and bustle? You now know the answer;",
        ru:
          "Одна из причин успеха данной достопримечательности Токио – полное отсутствие симметрии, характерной для садово-парковых комплексов Европы. Уголок спокойствия и нетронутой природы располагается посреди наиболее шумного и оживленного квартала столицы, его окружает стекло и бетон. Прогуливаясь по парку, вы можете найти спрятанный в густой зелени водопад, посмотреть, как императорские карпы тихо плавают в живописном пруду. Куда сходить в Токио, если вы устали от современности, огней и суеты? Теперь ответ вам известен;",
        fr:
          "L'une des raisons du succès de ce monument de Tokyo est l'absence totale de symétrie typique des complexes de jardins et de parcs en Europe. Un coin de tranquillité et de nature intacte est situé au milieu du quartier le plus bruyant et le plus animé de la capitale, entouré de verre et de béton. En vous promenant dans le parc, vous pouvez trouver une cascade cachée dans une végétation dense, regarder comment les carpes impériales nagent tranquillement dans un étang pittoresque. Où aller à Tokyo si vous êtes fatigué de la modernité, des lumières et de l'agitation? Vous connaissez maintenant la réponse;",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Asakusa area",
        ru: "Район Асакуса",
        fr: "Région d'Asakusa",
      },
      img:
        "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2018/06/2-Rayon_Asakusa-e1528832886299.jpg",
      description: {
        en:
          "Few of Tokyo's landmarks are as vast as this quarter. We included it in our rating, given the fact that the number of cultural and architectural masterpieces located here is really large: Kaminarimon Gate, Nakamise shopping street, Sensoji and Dempoin Buddhist temples, Sumida Park. After visiting these and many other local historical attractions in Tokyo, you can go shopping at the huge Rocks Department Store or stroll along the kilometer-long Kappabashi Street with many restaurants and boutiques;",
        ru:
          "Немногие достопримечательности Токио столь же обширны по своей площади, как этот квартал. Мы включили его в свой рейтинг, учитывая тот факт, что число находящихся тут культурных и архитектурных шедевров действительно велико: ворота Каминаримон, торговая улица Накамисэ, буддийские храмы Сэнсодзи и Дэмпоин, Парк Сумида. Осмотрев эти и многие другие местные исторические достопримечательности Токио, вы сможете заняться шоппингом в огромном Универмаге Рокс или прогуляться по километровой улице Каппабаси с множеством ресторанов и бутиков;",
        fr:
          "Peu de monuments de Tokyo sont aussi vastes que ce quartier. Nous l'avons inclus dans notre note, étant donné que le nombre de chefs-d'œuvre culturels et architecturaux situés ici est vraiment important: porte Kaminarimon, rue commerçante Nakamise, temples bouddhistes Sensoji et Dempoin, parc Sumida. Après avoir visité ces attractions historiques locales et bien d'autres à Tokyo, vous pouvez faire du shopping dans l'immense grand magasin Rocks ou vous promener le long de la rue Kappabashi, longue d'un kilomètre, avec de nombreux restaurants et boutiques;",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Crossroads at Shibuya",
        ru: "Перекресток на Сибуя",
        fr: "Carrefour à Shibuya",
      },
      img:
        "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2018/06/12-Perekrestok_na_Sibuya-e1528915241354.jpg",
      description: {
        en:
          "About 2,000 people pass through this intersection during rush hour. Local residents claim that the number of pedestrians reaches 1 million per day. Mass festivities are also organized here: Christmas, Halloween and similar calendar holidays are celebrated;",
        ru:
          "В час-пик этот перекресток проходит около 2000 человек. Местные жители утверждают, что в день количество пешеходов достигает 1 млн. Здесь же устраиваются массовые гуляния: отмечается Рождество, Хэллуин и подобные календарные праздники;",
        fr:
          "Environ 2 000 personnes passent par cette intersection aux heures de pointe. Les habitants affirment que le nombre de piétons atteint 1 million par jour Des festivités de masse sont également organisées ici: Noël, Halloween et autres jours fériés similaires sont célébrés;",
      },
      rate: 3.5,
    },
  ],
};

const italy = {
  iso: "ITA",
  currency: "EUR",
  country: "Italy",
  latLon: [41.9028, 12.4964],
  description: {
    en:
      "Italy is a maritime, mountainous country located in the south of Europe from the Alps to the Mediterranean Sea, it occupies a fairly vast territory: the islands of Sicily, the Apennine Peninsula, Sardinia.",
    ru:
      "Италия - морская, горная страна, расположенная на юге Европы от Альп до Средиземного моря, она занимает достаточно обширную территорию: острова Сицилия, Апеннинский полуостров, Сардиния.",
    fr:
      "L'Italie est un pays maritime et montagneux situé au sud de l'Europe des Alpes à la mer Méditerranée, elle occupe un territoire assez vaste: les îles de Sicile, la péninsule des Apennins, la Sardaigne.",
  },
  images: [
    {
      name: {
        en: "Trevi Fountain",
        ru: "Фонтан Треви",
        fr: "Fontaine de Trevi",
      },
      img:
        "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2018/07/15-Fontana_di_Trevi-e1531117579810.jpg",
      description: {
        en:
          "The largest fountain in the city is in fact part of the facade of the Palazzo Poli, and today it is a resting place for citizens and a source of refreshing coolness on a hot day. The fountain is a monumental architectural ensemble, towering over a huge bowl of the fountain, which is almost 20 meters long. The oval shape of the bowl resembles the shape of an amphitheater, and every evening numerous spectators gather on the steps of the palace and right at the side to contemplate the magnificent spectacle of falling and illuminated water.",
        ru:
          "Самый крупный в городе фонтан по сути является частью фасада дворца Палаццо Поли, а в наши дни это место отдыха граждан и источник живительной прохлады в знойный день. Фонтан представляет собой монументальный архитектурный ансамбль, возвышающийся над огромной чашей фонтана, которая в длину составляет почти 20 метров. Овальная форма чаши напоминает форму амфитеатра, и каждый вечер многочисленные зрители собираются на ступенях дворца и прямо у бортика, чтобы созерцать великолепное зрелище ниспадающей и подсвечивающейся воды.",
        fr:
          "La plus grande fontaine de la ville fait en fait partie de la façade du Palazzo Poli, et c'est aujourd'hui un lieu de repos pour les citoyens et une source de fraîcheur rafraîchissante par une journée chaude. La fontaine est un ensemble architectural monumental, dominant un immense bol de la fontaine, qui mesure près de 20 mètres de long. La forme ovale du bol ressemble à la forme d'un amphithéâtre, et chaque soir de nombreux spectateurs se rassemblent sur les marches du palais et juste à côté pour contempler le magnifique spectacle de l'eau tombante et illuminée.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Villa Borghese",
        ru: "Вилла Боргезе",
        fr: "Villa Borghèse",
      },
      img:
        "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2018/07/22-Villa_Borghese-e1531119558100.jpg",
      description: {
        en:
          "A trip through the landscaped parks of Rome will not be complete without a visit to Villa Borghese, the third largest park complex in the city. The history of the park began in the 17th century, when a park was laid out on the territory planted with vineyards by order of Cardinal Borghese. Reviews of those who have visited the park convey a special admiration for the palace, the interior of which is a masterpiece of medieval architecture. Particularly noteworthy is the Borghese Gallery, which exhibits various pieces of art that have become part of the rich heritage of Borghese.",
        ru:
          "Поездка по ландшафтным паркам Рима не обойдётся без посещения виллы Боргезе — третьего по величине паркового комплекса в городе. История парка началась в 17 веке, когда на территории, засаженной виноградниками, по распоряжению кардинала Боргезе был разбит парк. Отзывы побывавших в парке передают особое восхищение дворцом, внутренние помещения которого представляют собой шедевр средневековой архитектуры. Особого внимания заслуживает галерея Боргезе, в которой экспонируются различные предметы искусства, ставшие частью богатого наследия Боргезе. ",
        fr:
          "Un voyage à travers les parcs paysagers de Rome ne sera pas complet sans une visite à la Villa Borghese, le troisième plus grand complexe de parcs de la ville. L'histoire du parc a commencé au XVIIe siècle, lorsqu'un parc a été aménagé sur le territoire planté de vignes sur ordre du cardinal Borghèse. Les critiques de ceux qui ont visité le parc expriment une admiration particulière pour le palais, dont l'intérieur est un chef-d'œuvre de l'architecture médiévale. La galerie Borghèse, qui expose diverses œuvres d'art qui font désormais partie du riche patrimoine de Borghèse, est particulièrement remarquable.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Coliseum",
        ru: "Колизей",
        fr: "Colisée",
      },
      img:
        "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2018/07/1-Coliseum-e1531108988704.jpg",
      description: {
        en:
          "This is a majestic symbol of ancient Rome, which has become one of the main attractions not only in the city, but throughout the world. Millions of tourists from all over the world flock here every year. This monumental structure, which, by the way, was erected in the early years of our era, has witnessed well-known and often bloody events for 5 centuries. Fierce gladiator fights, brutal executions, torture of slaves, exhibitions of exotic animals and other impressive performances were held here.",
        ru:
          "Это величественный символ древнего Рима, ставший одной из главных достопримечательностей не только в городе, но и во всём мире. Миллионы туристов со всего мира устремляются сюда ежегодно. Это монументальное сооружение, которое, к слову, было возведено в первые годы нашей эры, на протяжении 5 столетий было свидетелем известных и зачастую кровавых событий. Здесь проводились ожесточенные гладиаторские бои, жестокие казни, пытки рабов, выставки экзотических животных и другие впечатляющие представления.",
        fr:
          "C'est un symbole majestueux de la Rome antique, qui est devenue l'une des principales attractions non seulement de la ville, mais dans le monde entier. Des millions de touristes du monde entier affluent ici chaque année. Cette structure monumentale, qui, soit dit en passant, a été érigée dans les premières années de notre ère, a été le témoin d'événements bien connus et souvent sanglants pendant 5 siècles. De féroces batailles de gladiateurs, des exécutions brutales, la torture d'esclaves, des expositions d'animaux exotiques et d'autres performances impressionnantes ont eu lieu ici.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Roman forum",
        ru: "Римский форум",
        fr: "Forum romain",
      },
      img:
        "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2018/07/6-Forum_Romanum-e1531115632134.jpg",
      description: {
        en:
          "Once this place was the center of important social events, and the ancient Romans knew where to go in Rome to keep abreast of all the latest news in the city and country. Here laws were passed, sentences passed, consuls were appointed and the latest news was announced. Trading squares were adjacent to administrative buildings and temples, new buildings and monuments were erected, and all this continued until, after the fall of the Roman Empire, the forum was ravaged by barbarians.",
        ru:
          "Когда-то это место было центром важных общественных событий, и древним римлянам было известно, куда сходить в Риме, чтобы быть в курсе всех последних новостей в городе и стране. Здесь вершились законы, выносились приговоры, назначались консулы и объявлялись последние новости. Торговые площади соседствовали с административными зданиями и храмами, возводились новые сооружения и памятники, и всё это продолжалось до тех пор, пока после падения Римской Империи форум не был разорён варварами.",
        fr:
          "Autrefois, cet endroit était le centre d'événements sociaux importants, et les anciens Romains savaient où aller à Rome pour se tenir au courant de toutes les dernières nouvelles de la ville et du pays. Ici, des lois ont été adoptées, des condamnations ont été prononcées, des consuls ont été nommés et les dernières nouvelles ont été annoncées. Des places commerciales étaient adjacentes aux bâtiments administratifs et aux temples, de nouveaux bâtiments et monuments ont été érigés, et tout cela a continué jusqu'à ce que, après la chute de l'Empire romain, le forum soit ravagé par les barbares.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Castel Sant'Angelo",
        ru: "Замок Святого Ангела",
        fr: "Château Saint-Ange",
      },
      img:
        "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2018/07/7-Castle_of_the_Holy_Angel-e1531115737334.jpg",
      description: {
        en:
          "Back in the 2nd century A.D. this castle was erected as a tomb for rulers and imperial families. Many monarchs were buried here, and under the Emperor Aurelian, the mausoleum was surrounded by a fortress wall in order to protect against barbarian attacks. The name, which the castle has now, it acquired in the 6th century, when, after a general plague from the plague, someone saw the image of an angel on the roof of the castle, and with this sign a terrible epidemic ended.",
        ru:
          "Ещё во 2 веке н.э. этот замок был возведён как усыпальница для правителей и императорских семей. Здесь были погребены многие монархи, а при императоре Аврелиане мавзолей был обнесён крепостной стеной с целью защиты от варварских нападений. Название, которое замок имеет сейчас, он обрёл в 6 веке, когда после повального мора от чумы кто-то увидел на крыше замка образ ангела, и с этим знамением завершилась страшная эпидемия.",
        fr:
          "Au IIe siècle de notre ère. ce château a été érigé comme un tombeau pour les dirigeants et les familles impériales. De nombreux monarques ont été enterrés ici, et sous l'empereur Aurélien, le mausolée était entouré d'un mur de forteresse afin de se protéger des attaques barbares. Le nom que porte maintenant le château, il a acquis au 6ème siècle, quand, après une épidémie générale de peste, quelqu'un a vu l'image d'un ange sur le toit du château, et avec ce signe une terrible épidémie s'est terminée.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Appian Way",
        ru: "Аппиева дорога",
        fr: "Voie Appienne",
      },
      img:
        "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2018/07/30-Via_Appia-e1531121543749.jpg",
      description: {
        en:
          "The 'Queen of the Roads' was once a great road connecting Rome with its most important neighbors - Egypt, Greece and the countries of Asia. It was built during the 4th century BC, then trade with neighboring countries began to be established. The creation of the road was associated with the name of Appius, one of the high officials of Rome. Today, part of the Appian Way begins right within the city.",
        ru:
          "«Царица дорог» некогда представляла собой великий путь, соединяющий Рим с важнейшими соседями — Египтом, Грецией и странами Азии. Она была выстроена в течение 4 века до н.э., тогда и началась налаживаться торговля с ближними странами. Создание дороги было связано с именем Аппия — одного из высоких должностных лиц Рима. Сегодня часть Аппиевой дороги начинается прямо в черте города.",
        fr:
          "La «reine des routes» était autrefois une grande route reliant Rome à ses voisins les plus importants - l'Égypte, la Grèce et les pays d'Asie. Il a été construit au 4ème siècle avant JC, puis le commerce avec les pays voisins a commencé à s'établir. La création de la route était associée au nom d'Appius, l'un des hauts fonctionnaires de Rome. Aujourd'hui, une partie de la Voie Appienne commence en plein cœur de la ville.",
      },
      rate: 3.5,
    },
  ],
};

const germany = {
  iso: "DEU",
  currency: "EUR",
  country: "Germany",
  latLon: [52.52, 13.405],
  description: {
    en:
      "Germany is a state in Central Europe, bordered by Denmark, Poland, Czech Republic, Austria, Switzerland, France, Luxembourg, Belgium and the Netherlands. It is washed by the North and Baltic seas. ... In the extreme south are the Bavarian Alps, where the highest point in Germany is located - Mount Zugspitze (2962 m).",
    ru:
      "Германия — государство в Центральной Европе, граничит с Данией, Польшей, Чехией, Австрией, Швейцарией, Францией, Люксембургом, Бельгией и Нидерландами. Омывается Северным и Балтийским морями. ... На крайнем юге расположены Баварские Альпы, где находится высочайшая точка Германии - гора Зюгшпитце (2962 м).",
    fr:
      "L'Allemagne est un État d'Europe centrale, bordé par le Danemark, la Pologne, la République tchèque, l'Autriche, la Suisse, la France, le Luxembourg, la Belgique et les Pays-Bas. Il est baigné par les mers du Nord et de la Baltique. ... Dans l'extrême sud se trouvent les Alpes bavaroises, où se trouve le point culminant d'Allemagne - le mont Zugspitze (2962 m).",
  },
  images: [
    {
      name: {
        en: "Brandenburg Gate",
        ru: "Бранденбургские ворота",
        fr: "Porte de Brandebourg",
      },
      img:
        "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Germany-3-The-Brandenburg-Gate-e1492728193602.jpg",
      description: {
        en:
          "If you are wondering which landmark of Germany is the true symbol of the country, and what to see in Germany first of all, then you should definitely see the Brandenburg Gate. This is a truly legendary building, impressive in its size, architecture and symbolizing the most important milestones in the history of the country. The Peace Gate, as they were originally called, was founded in 1789, and the works of ancient builders were taken as the ideological basis of the project.",
        ru:
          "Если вам интересно, какая достопримечательность Германии является истинным символом страны, и что посмотреть в Германии следует прежде всего, то вам обязательно стоит увидеть Брандербургские ворота. Это поистине легендарное сооружение, впечатляющее своими размерами, архитектурой и символизирующее важнейшие вехи истории страны.  Ворота Мира, как они назывались изначально, были заложены в 1789 году, а за идейную основу проекта были взяты произведения античных строителей. ",
        fr:
          "Si vous vous demandez quel monument de l'Allemagne est le véritable symbole du pays et que voir en Allemagne en premier lieu, alors vous devriez certainement voir la porte de Brandebourg. C'est un bâtiment vraiment légendaire, impressionnant par sa taille, son architecture et symbolisant les jalons les plus importants de l'histoire du pays. La Porte de la Paix, comme on les appelait à l'origine, a été fondée en 1789 et les travaux des anciens constructeurs ont été considérés comme la base idéologique du projet.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Zugspitze",
        ru: "Цугшпитце",
        fr: "Zugspitze",
      },
      img:
        "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Germany-7-The-Zugspitze-e1492729475797.jpg",
      description: {
        en:
          "An interesting sight of Germany and a unique place is located in the Bavarian Alps, at the junction of the borders of Germany and Austria. This place is interesting because it offers a view immediately on the territory of the four nearest states - Germany, Austria, Switzerland and Italy. This is the Zugspitze peak, which is 2.962 km high. The conquest of this peak will not be difficult for tourists today, because railway tracks from the city of Garmisch-Partenkirchen are laid to it, and for fans of extreme sports there is also a cable car",
        ru:
          "В Баварских Альпах,на стыке границ Германии и Австрии, расположилась интересная достопримечательность Германии и уникальное место. Интересно это место тем, что с него открывается вид сразу на территории четырёх ближайших государства — Германии, Австрии, Швейцарии и Италии. Это пик Цугшпитце, высота которого составляет 2,962 км. Покорение этой вершины туристам сегодня не представит труда, ведь к ней проложены железнодорожные пути от города Гармиш-Партенкирхен, а для любителей экстрима есть и канатная дорога",
        fr:
          "Une vue intéressante de l'Allemagne et un lieu unique se trouve dans les Alpes bavaroises, à la jonction des frontières de l'Allemagne et de l'Autriche. Cet endroit est intéressant en ce qu'il offre une vue immédiate sur le territoire des quatre états les plus proches - l'Allemagne, l'Autriche, la Suisse et l'Italie. Il s'agit du sommet de la Zugspitze, qui culmine à 2,962 km. La conquête de ce sommet ne sera pas difficile pour les touristes aujourd'hui, car les voies ferrées de la ville de Garmisch-Partenkirchen y sont posées, et pour les amateurs de sports extrêmes, il y a aussi un téléphérique.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Cologne Cathedral",
        ru: "Кёльнский собор",
        fr: "cathédrale de Cologne",
      },
      img:
        "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Germany-1-Cologne-Cathedral-e1492727734625.jpg",
      description: {
        en:
          "Today, the Cologne Cathedral fascinates not only with its facades, but also with its interior decoration. The main hall is decorated with various figures of saints, carved columns, walls and floors are decorated with mosaics and gilding. In a word, here every corner is saturated with its own history, the atmosphere of the Middle Ages is felt, especially during concerts of organ music.",
        ru:
          "Сегодня Кёльнский собор завораживает не только своими фасадами, но и внутренним убранством. Главный зал украшают разнообразные фигуры святых, резные колонны, стены и пол украшены мозаикой и позолотой. Словом, здесь каждый уголок напитан своей историей, ощущается атмосфера средневековья, особенно во время концертов органной музыки.",
        fr:
          "Aujourd'hui, la cathédrale de Cologne fascine non seulement par ses façades, mais aussi par sa décoration intérieure. La salle principale est décorée de différentes figures de saints, les colonnes sculptées, les murs et les sols sont décorés de mosaïques et de dorures. En un mot, ici chaque recoin est saturé de sa propre histoire, l'ambiance du Moyen Âge se fait sentir, notamment lors des concerts de musique d'orgue.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Neuschwanstein Castle",
        ru: "Замок Нойшванштайн",
        fr: "Le château de Neuschwanstein",
      },
      img:
        "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Germany-2-Neuschwanstein-Castle-e1492727971928.jpg",
      description: {
        en:
          "At the first glance at the facade of Neuschwanstein Castle from afar, there is a strong association of this amazingly beautiful building with a toy. This beauty of neat ivory-colored turrets topped with pointed emerald domes seems so implausible. The incredibly beautiful natural background in the form of alpine slopes immersed in the green of the forests gives even more fabulousness.",
        ru:
          "При первом взгляде на фасад замка Нойшванштайн издалека, возникает устойчивая ассоциация этого удивительного по красоте сооружения с игрушкой. Настолько неправдоподобной кажется эта красота аккуратных башенок цвета слоновой кости, увенчанных заострёнными изумрудными куполами. Ещё большей сказочности придаёт невероятно красивый природный фон в виде альпийских склонов, утопающих в зелени лесов.",
        fr:
          "Au premier coup d'œil sur la façade du château de Neuschwanstein de loin, il y a une forte association de ce bâtiment incroyablement beau avec un jouet. Cette beauté de tourelles nettes de couleur ivoire surmontées de dômes émeraude pointus semble si invraisemblable. Le fond naturel incroyablement beau sous la forme de pentes alpines immergées dans le vert des forêts donne encore plus de fabuleux.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Black forest",
        ru: "Чёрный лес",
        fr: "Forêt Noire",
      },
      img:
        "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Germany-4-The-Black-Forest-e1492728394445.jpg",
      description: {
        en:
          "In the south of the country, in the Black Forest region, there is a truly fabulous landmark of Germany - the Black Forest, which brings back memories of characters from the famous fairy tales of the Brothers Grimm. The forest area is mostly made up of dense and tall spruce, which is where the name of the forest came from - Black.",
        ru:
          "На юге страны, в регионе Шварцвальд, расположилась по-настоящему сказочная достопримечательность Германии — Чёрный лес, который навевает воспоминания о персонажах из известных сказок братьев Гримм. Лесной массив в большинстве своём составляют густые и высокие ели, откуда пошло и название леса — Чёрный.",
        fr:
          "Dans le sud du pays, dans la région de la Forêt-Noire, il y a un point de repère vraiment fabuleux de l'Allemagne - la Forêt-Noire, qui ramène des souvenirs de personnages des célèbres contes de fées des frères Grimm. La zone forestière est principalement composée d'épinettes denses et hautes, d'où vient le nom de la forêt - Black.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Rugen Island",
        ru: "Остров Рюген",
        fr: "Ile de Rügen",
      },
      img:
        "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Germany-8-Rugen-Island-e1492729768130.jpg",
      description: {
        en:
          "Probably everyone is familiar with the tale of Tsar Saltan, when the imagination drew a plot about the Swan Princess, ships sailing past Buyan Island ... Did you know that this fabulous island actually exists, and that you can visit this place in Germany by going to the very north of the country? The real name of this island is Rügen, and it is located in the Baltic Sea, off the northern coast of Germany.",
        ru:
          "Наверное, всем знакома сказка о царе Салтане, когда воображение рисовало сюжет про Царевну-Лебедь, корабли, проплывающие мимо острова Буяна… А знаете ли вы, что этот сказочный остров на самом деле существует, и что посетить в Германии это место можно, отправившись на самый север страны? Реальное название этого острова — Рюген, и расположен он в Балтийском море, у северного побережья Германии.",
        fr:
          "Tout le monde connaît probablement l'histoire du tsar Saltan, lorsque l'imagination a dessiné une intrigue sur le Swan Princess, les navires naviguant au-delà de l'île Buyan ... Saviez-vous que cette île fabuleuse existe réellement et que vous pouvez visiter cet endroit en Allemagne en aller tout au nord du pays? Le vrai nom de cette île est Rügen, et elle est située dans la mer Baltique, au large de la côte nord de l'Allemagne.",
      },
      rate: 3.5,
    },
  ],
};

const belarus = {
  iso: "BLR",
  currency: "BYN",
  country: "Belarus",
  latLon: [53.9006, 27.559],
  description: {
    en:
      "Belarus is a country with an ancient history and rich traditions; with magnificent nature and amazing architecture that combines the heritage of Western European and Eastern Slavic traditions of architecture.",
    ru:
      "Беларусь — это страна с древней историей и богатыми традициями; с великолепной природой и удивительной архитектурой, которая сочетает в себе наследие западноевропейских и восточнославянских традиций зодчества.",
    fr:
      "La Biélorussie est un pays avec une histoire ancienne et de riches traditions; avec une nature magnifique et une architecture étonnante qui combine l'héritage des traditions architecturales d'Europe occidentale et slaves orientales.",
  },
  images: [
    {
      name: {
        en: "Victory Square",
        ru: "Площадь Победы",
        fr: "Place de la Victoire",
      },
      img:
        "https://top10.travel/wp-content/uploads/2016/11/ploshhad-pobedy.jpg",
      description: {
        en:
          "The majestic wide square, designed and built in the first half of the 20th century, was originally called the Round Square. The architectural dominant of the area is the Victory Monument made of gray granite, erected in memory of the Great Patriotic War of 1941-1945. It is decorated with high reliefs glorifying the feat of Soviet soldiers. The Eternal Fire burns near the monument.",
        ru:
          "Величественная широкая площадь, спроектированная и построенная в первой половине XX века, изначально носила название «Круглая площадь». Архитектурной доминантой местности является Монумент Победы из серого гранита, возведенный в память о Великой Отечественной войне 1941-1945 гг. Он украшен горельефами, прославляющими подвиг советских воинов. Около монумента горит Вечный Огонь.",
        fr:
          "La grande place majestueuse, conçue et construite dans la première moitié du XXe siècle, s'appelait à l'origine la place ronde. Le monument architectural dominant de la région est le Monument de la Victoire en granit gris, érigé en mémoire de la Grande Guerre patriotique de 1941-1945. Il est orné de hauts reliefs glorifiant l'exploit des soldats soviétiques. Le feu éternel brûle près du monument.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Gates of Minsk",
        ru: "Ворота Минска",
        fr: "Portes de Minsk",
      },
      img: "https://top10.travel/wp-content/uploads/2016/11/vorota-minska.jpg",
      description: {
        en:
          "An architectural complex in the style of the solemn 'Stalinist Empire', consisting of two symmetrical 11-storey towers. The attraction is located at the Railway Station Square. The towers are decorated with a large dial of a German clock, the coat of arms of the USSR and sculptures of a soldier, collective farmer, worker and engineer. The 'Gate of Minsk' is a recognizable symbol of the city, the successor to the wooden Star Gate of the old Zamchishche district.",
        ru:
          "Архитектурный комплекс в стиле торжественного «сталинского ампира», состоящий из двух симметричных 11-ти этажных башен. Достопримечательность находится на Привокзальной площади. Башни украшены большим циферблатом немецких часов, гербом СССР и скульптурами солдата, колхозницы, рабочего и инженера. «Ворота Минска» — это узнаваемый символ города, преемник деревянных Звездных ворот старого района Замчище.",
        fr:
          "Un ensemble architectural dans le style du solennel 'Empire stalinien', composé de deux tours symétriques de 11 étages. L'attraction est située sur la place de la gare. Les tours sont décorées d'un grand cadran d'une horloge allemande, des armoiries de l'URSS et des sculptures d'un soldat, d'un fermier collectif, d'un ouvrier et d'un ingénieur. La «porte de Minsk» est un symbole reconnaissable de la ville, le successeur de la porte étoilée en bois de l'ancien quartier de Zamchishche.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Upper town",
        ru: "Верхний город",
        fr: "Ville haute",
      },
      img: "https://top10.travel/wp-content/uploads/2016/11/verhnij-gorod.jpg",
      description: {
        en:
          "The historical center of the Belarusian capital, which has preserved in its appearance the features of the 12th century. From the 16th century, the Minsk nobility began to settle in the Upper Town. The architectural monuments of this area demonstrate a mixture of styles: from classicism and baroque to modern and eclecticism. Since the 16th century, churches, monasteries and houses of worship of various denominations have been erected on the squares and streets of the Upper City.",
        ru:
          "Исторический центр белорусской столицы, который сохранил в своем облике черты XII века. С XVI века в Верхнем городе начинает селиться минская знать. Архитектурные памятники этой местности демонстрируют смешение стилей: от классицизма и барокко до модерна и эклектики. С XVI столетия на площадях и улицах Верхнего города возводились храмы, монастыри и молельные дома различных конфессий.",
        fr:
          "Le centre historique de la capitale biélorusse, qui a conservé les caractéristiques du 12ème siècle dans son apparence. Depuis le XVIe siècle, la noblesse de Minsk a commencé à s'installer dans la ville haute. Les monuments architecturaux de cette zone démontrent un mélange de styles: du classicisme et du baroque au moderne et à l'éclectisme. Depuis le XVIe siècle, des églises, des monastères et des lieux de culte de diverses confessions ont été érigés sur les places et les rues de la ville haute.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Trinity Suburb",
        ru: "Троицкое предместье",
        fr: "Banlieue de Trinity",
      },
      img:
        "https://top10.travel/wp-content/uploads/2016/11/troitskoe-predmeste.jpg",
      description: {
        en:
          "An architectural complex located on the site of a 10th century monastery. Until the 19th century, the territory was occupied by the city market, then stone mansions were built in its place and a park was laid out. Nowadays, the buildings are used for museums, exhibition galleries, cafes and souvenir shops; one of the houses houses an opera house. The appearance of the Trinity Suburb is almost completely preserved in its original form.",
        ru:
          "Архитектурный комплекс, расположенный на месте монастыря X века. Вплоть до XIX столетия территорию занимал городской рынок, затем на его месте были построены каменные особняки и разбит парк. В наше время здания используются под музеи, выставочные галереи, кафе и сувенирные магазины, в одном из домов расположился оперный театр. Облик Троицкого предместья практически полностью сохранен в первоначальном виде.",
        fr:
          "Un complexe architectural situé sur le site d'un monastère du 10ème siècle. Jusqu'au XIXe siècle, le territoire est occupé par le marché de la ville, puis des hôtels particuliers en pierre sont construits à sa place et un parc est aménagé. De nos jours, les bâtiments sont utilisés comme musées, galeries d'exposition, cafés et boutiques de souvenirs; l'une des maisons abrite un opéra. L'apparence de la banlieue de la Trinité est presque entièrement préservée dans sa forme originale.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "National Library of Belarus",
        ru: "Национальная библиотека Беларуси",
        fr: "Bibliothèque nationale de Biélorussie",
      },
      img:
        "https://top10.travel/wp-content/uploads/2016/11/natsionalnaya-biblioteka-belarusi.jpg",
      description: {
        en:
          "A modern multifunctional center located in a building with an unusual architecture. The first library building was built in 1926. In the late 80s. XX century, it was decided to rebuild and modernize the premises. The project of M. Vinogradov and V. Kramarenko won the all-Union competition, but the work began only 13 years later and ended in 2006. The new building of the Library resembles a cut diamond in shape, which symbolizes the knowledge of the world and the value of teaching.",
        ru:
          "Современный многофункциональный центр, расположенный в сооружении с необычной архитектурой. Первое здание библиотеки было построено в 1926 году. В конце 80-х гг. XX столетия было принято решение о перестройке и модернизации помещений. Во всесоюзном конкурсе победил проект М. Виноградова и В. Крамаренко, но работы начались только через 13 лет и закончились в 2006 году. Новое здание Библиотеки напоминает по форме ограненный алмаз, который символизирует познание мира и ценность учения.",
        fr:
          "Un centre multifonctionnel moderne situé dans un immeuble à l'architecture atypique. Le premier bâtiment de la bibliothèque a été construit en 1926. À la fin des années 80. XX siècle, il a été décidé de reconstruire et de moderniser les locaux. Le projet de M. Vinogradov et V.Kramarenko a remporté le concours paneuropéen, mais les travaux n'ont commencé que 13 ans plus tard et se sont terminés en 2006. Le nouveau bâtiment de la bibliothèque ressemble à un diamant taillé en forme, qui symbolise la connaissance du monde et la valeur de l'enseignement.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Big Opera and Ballet Theater",
        ru: "Большой театр оперы и балета",
        fr: "Théâtre d'opéra et de ballet du Bolchoï",
      },
      img:
        "https://top10.travel/wp-content/uploads/2016/11/bolshojj-teatr-opery-i-baleta.jpg",
      description: {
        en:
          "The main and only opera stage in the Republic of Belarus. The building was built in the 30s. XX century designed by G. Lavrov and I. Langbard in the architectural style of Soviet constructivism. The building is listed as a monument of national importance due to its cultural value. The theater has a children's music studio and a collective 'Belarusian Capella'.",
        ru:
          "Главная и единственная оперная сцена Республики Беларусь. Здание построено в 30-е гг. XX столетия по проекту Г. Лаврова и И. Лангбарда в архитектурном стиле советского конструктивизма. Сооружение причислено к памятникам государственного значения благодаря своей культурной ценности. В театре работает детская музыкальная студия и коллектив «Белорусская Капелла».",
        fr:
          "La principale et unique scène d'opéra de la République de Biélorussie. Le bâtiment a été construit dans les années 30. XX siècle conçu par G. Lavrov et I. Langbard dans le style architectural du constructivisme soviétique. Le bâtiment est classé monument d'importance nationale en raison de sa valeur culturelle. Le théâtre dispose d'un studio de musique pour enfants et d'un collectif 'Biélorusse Capella'.",
      },
      rate: 3.5,
    },
  ],
};

const india = {
  iso: "IND",
  currency: "INR",
  country: "India",
  latLon: [28.6139, 77.209],
  description: {
    en:
      "India is a state in South Asia that occupies most of the Indian subcontinent. It shares borders with Pakistan, China, Nepal, Bhutan, Bangladesh and Myanmar. Between the Deccan and the Himalayas, there is a vast Indo-Gangetic lowland (Jamno-Gangetic plain) in a wide arc of the Ganges; the coast is also framed by a narrow strip of plains.",
    ru:
      "Индия - государство в Южной Азии, занимающее большую часть полуострова Индостан. Граничит с Пакистаном, Китаем, Непалом, Бутаном, Бангладеш и Мьянмой. Между Деканом и Гимала широкой дугой тянями обширная Индо-Гангская низменность (Джамно-Гангская равнина), побережье также обрамлены узкой лентой равнин.",
    fr:
      "L'Inde est un État d'Asie du Sud qui occupe la majeure partie du sous-continent indien. Il partage des frontières avec le Pakistan, la Chine, le Népal, le Bhoutan, le Bangladesh et le Myanmar. Entre le Deccan et l'Himalaya, il y a une vaste plaine indo-gangétique (plaine Jamno-Gangétique) dans un large arc des Tang; la côte est également encadrée par une étroite bande de plaines.",
  },
  images: [
    {
      name: {
        en: "Rashtrapati Bhavan",
        ru: "Раштрапати-Бхаван",
        fr: "Rashtrapati Bhavan",
      },
      img:
        "https://top10.travel/wp-content/uploads/2019/03/rashtrapathi-bhavan.jpg",
      description: {
        en:
          "One of the largest residences of the head of state in the world. It was built at the beginning of the 20th century for the Viceroy of India. When the country gained independence, it was decided to place the state apparatus in the guest wing. The rest of the building is used to host official delegations and large events. Getting inside for an ordinary tourist is problematic: only by prior arrangement and at certain times of the year.",
        ru:
          "Одна из самых больших резиденций главы государства в мире. Возводилась в начале XX века для вице-короля Индии. Когда страна обрела независимость, было решено поместить государственный аппарат в гостевое крыло. Остальная часть здания используется при приёме официальных делегаций и больших мероприятий. Попасть внутрь для обычного туриста проблематично: только по предварительной заявке и в определённое время года.",
        fr:
          "L'une des plus grandes résidences du chef de l'Etat au monde. Il a été construit au début du 20e siècle pour le vice-roi de l'Inde. Lorsque le pays a accédé à l'indépendance, il a été décidé de placer l'appareil d'État dans l'aile des invités. Le reste du bâtiment est utilisé pour accueillir des délégations officielles et de grands événements. Entrer à l'intérieur pour un touriste ordinaire est problématique: uniquement sur arrangement préalable et à certaines périodes de l'année.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Temple complex Chattarpur",
        ru: "Храмовый комплекс Чаттарпур",
        fr: "Complexe du temple Chattarpur",
      },
      img:
        "https://top10.travel/wp-content/uploads/2019/03/hramovyj-kompleks-chattarpur.jpg",
      description: {
        en:
          "It was erected in honor of the goddess Katyayani in 1974. The temple complex covers an area of ​​24 hectares. It unites three temples at once. They all belong to the traditional Indian architectural style. Pilgrims decorate the tree growing at the entrance with bracelets to make their wishes come true. The main temple only opens twice a year on the biggest Katyayani holidays. In the other two, services are held almost round the clock.",
        ru:
          "Возведён в честь богини Катьяяни в 1974 году. Храмовый комплекс занимает площадь в 24 га. Он объединяет сразу три храма. Все они относятся к традиционному индийскому архитектурному стилю. Паломники украшают дерево, растущее у входа, браслетами для исполнения желаний. Главный храм открывается только два раза в год по самым большим праздникам, связанным с Катьяяни. В двух других службы идут практически круглые сутки.",
        fr:
          "Il a été érigé en l'honneur de la déesse Katyayani en 1974. Le complexe du temple couvre une superficie de 24 hectares. Il unit trois temples à la fois. Ils appartiennent tous au style architectural indien traditionnel. Les pèlerins décorent l'arbre qui pousse à l'entrée avec des bracelets pour réaliser leurs souhaits. Le temple principal n'ouvre que deux fois par an lors des plus grandes fêtes de Katyayani. Dans les deux autres, les services ont lieu presque 24 heures sur 24.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Akshardham",
        ru: "Акшардхам",
        fr: "Akshardham",
      },
      img: "https://top10.travel/wp-content/uploads/2019/03/akshardham.jpg",
      description: {
        en:
          "The temple complex covers an area of   12 hectares. It is called 'the residence of a god that cannot be moved.' The main temple is a massive structure. Its design combines various Indian styles. Due to its size, it is included in the Guinness Book of Records. It is surrounded by picturesque parks and gardens. Nearby there is a cinema and a light and music fountain. Water was brought to the local lake from many reservoirs of the country.",
        ru:
          "Храмовый комплекс занимает площадь в 12 га. Его называют «резиденцией бога, которая не может быть перемещена». Главный храм — массивное сооружение. В его оформлении соединились различные индийские стили. Благодаря размерам, включён в Книгу рекордов Гиннеса. Он окружён живописными парками и садами. Рядом имеются кинотеатр и светомузыкальный фонтан. В здешнее озеро привезли воду из множества водоёмов страны.",
        fr:
          "Le complexe du temple couvre une superficie de 12 hectares. On l'appelle «la résidence d'un dieu qui ne peut être déplacé». Le temple principal est une structure massive. Différents styles indiens sont combinés dans sa conception. En raison de sa taille, il est inclus dans le livre Guinness des records. Il est entouré de parcs et jardins pittoresques. A proximité il y a un cinéma et une fontaine lumineuse et musicale. L'eau a été apportée au lac local à partir de nombreux réservoirs du pays.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Red fort",
        ru: "Красный форт",
        fr: "Fort Rouge",
      },
      img: "https://top10.travel/wp-content/uploads/2019/03/krasnyj-fort.jpg",
      description: {
        en:
          "The attraction dates back to the reign of the Mughals. The first stone of the citadel was laid in 1639. The name comes from the color of the walls of the fort. The architecture is dominated by Hindu motives, but there are also Persian decorative elements. At the moment it is a tourist attraction. However, the place remains significant: here, on the country's independence day, the Prime Minister reads an address to the nation.",
        ru:
          "Достопримечательность относится к временам правления моголов. Первый камень цитадели заложили в 1639 году. Название получено из-за цвета стен форта. В архитектуре преобладают индуистские мотивы, но встречаются и персидские элементы декора. В данный момент это туристический объект. Однако место остается знаковым: здесь в день независимости страны премьер-министр зачитывает обращение к нации.",
        fr:
          "L'attraction remonte au règne des Moghols. La première pierre de la citadelle a été posée en 1639. Le nom vient de la couleur des murs du fort. L'architecture est dominée par des motifs hindous, mais il y a aussi des éléments décoratifs persans. Pour le moment, c'est une attraction touristique. Cependant, le lieu reste important: ici, le jour de l'indépendance du pays, le Premier ministre lit un discours à la nation.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Lotus Temple",
        ru: "Храм Лотоса",
        fr: "Temple du Lotus",
      },
      img: "https://top10.travel/wp-content/uploads/2019/03/hram-lotosa.jpg",
      description: {
        en:
          "An unusual building appeared in the city in 1986. 27 marble petals are arranged in 3 rows and form a single composition. The height of the temple is about 40 meters. Since a pool is built around it, it seems as if the 'flower' is in the water. There are no straight lines inside the premises - this is the idea of   the designers. In addition, there are no inscriptions and cult objects. The person praying communicates directly with God.",
        ru:
          "Необычное здание появилось в городе в 1986 году. 27 лепестков из мрамора расположены в 3 ряда и образуют единую композицию. Высота храма — порядка 40 метров. Поскольку вокруг построен бассейн, то кажется будто «цветок» находится в воде. Внутри помещений нет прямых линий – такова задумка проектировщиков. Кроме того, отсутствуют надписи и предметы культа. Молящийся как бы общается с Богом напрямую.",
        fr:
          "Un bâtiment insolite est apparu dans la ville en 1986. 27 pétales de marbre sont disposés sur 3 rangées et forment une seule composition. La hauteur du temple est d'environ 40 mètres. Puisqu'une piscine est construite autour d'elle, il semble que la «fleur» soit dans l'eau. Il n'y a pas de lignes droites à l'intérieur des locaux - c'est l'idée des concepteurs. De plus, il n'y a pas d'inscriptions et d'objets cultes. La personne qui prie communique directement avec Dieu.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Jama Masjid Mosque",
        ru: "Мечеть Джама-Масджид",
        fr: "Mosquée Jama Masjid",
      },
      img:
        "https://top10.travel/wp-content/uploads/2019/03/mechet-djama-masdjid.jpg",
      description: {
        en:
          "The largest mosque in India. About 25 thousand people can pray on its territory at the same time. Built in the 50s of the 17th century. The interior design is replete with marble arches and inscriptions on slabs - mostly sayings from the Koran. During the service, the entrance here is closed to tourists who do not profess Islam. The rest of the time you can get inside, but without shoes and in special clothes.",
        ru:
          "Самая большая мечеть Индии. Одновременно на её территории может молиться около 25 тысяч человек. Строилась в 50-х годах XVII века. Внутреннее оформление изобилует мраморными арками и надписями на плитах — преимущественно изречениями из Корана. Во время службы сюда закрыт вход туристам, не исповедующим ислам. В остальное время можно попасть внутрь, но без обуви и в специальной одежде.",
        fr:
          "La plus grande mosquée d'Inde. Environ 25 mille personnes peuvent prier sur son territoire en même temps. Construit dans les années 50 du 17ème siècle. Le design intérieur est rempli d'arcs en marbre et d'inscriptions sur des dalles - pour la plupart des dictons du Coran. Pendant le service, l'entrée ici est fermée aux touristes qui ne professent pas l'islam. Le reste du temps, vous pouvez entrer, mais sans chaussures et avec des vêtements spéciaux.",
      },
      rate: 3.5,
    },
  ],
};

const france = {
  iso: "FRA",
  currency: "EUR",
  country: "France",
  latLon: [48.8566, 2.3522],
  description: {
    en:
      "France is located at the western tip of Europe, bordered by Spain, Italy, Switzerland, Germany, and Belgium. From the western coast, the country is washed by the waters of the Bay of Biscay, in the north-west - by the English Channel and Pas-de-Calais; the southern shores are washed by the Mediterranean Sea.",
    ru:
      "Франция расположена в западной оконечности Ев ропы, граничит с Испанией, Италией, Швейцарией, Германией, Бель гией. С западного берега страну омывают воды Бискайского залива, на северо-западе – проливов Ла-Манш и Па-де-Кале; южные бере га омываются Средиземным морем.",
    fr:
      "La France est située à la pointe ouest de l'Europe, bordée par l'Espagne, l'Italie, la Suisse, l'Allemagne et la Belgique. De la côte ouest, le pays est baigné par les eaux du golfe de Gascogne, au nord-ouest - par la Manche et le Pas-de-Calais; les rives sud sont baignées par la mer Méditerranée.",
  },
  images: [
    {
      name: {
        en: "Triumphal Arch",
        ru: "Триумфальная арка",
        fr: "Arc de Triomphe",
      },
      img:
        "https://top10.travel/wp-content/uploads/2016/10/triumfalnaya-arka.jpg",
      description: {
        en:
          "An architectural monument at Charles de Gaulle square. The construction of the monument began in 1806 by order of Napoleon Bonaparte after the French victory in the Battle of Austerlitz. The work was completed after the death of the emperor in 1936. The arch was built by architect Jean Chalgrin. On four sides, the monument is decorated with sculptural groups dedicated to the military victories and achievements of the French Revolution.",
        ru:
          "Архитектурный памятник на площади Шарля де Голля. Строительство монумента началось в 1806 году по приказу Наполеона Бонапарта после победы французов в Аустерлицком сражении. Работы завершились уже после смерти императора в 1936 году. Арку строил архитектор Жан Шальгрен. С четырех сторон памятник украшен скульптурными группами, которые посвящены военным победам и достижениям Французской революции.",
        fr:
          "Un monument architectural sur la place Charles de Gaulle. La construction du monument a commencé en 1806 sur ordre de Napoléon Bonaparte après la victoire française à la bataille d'Austerlitz. Les travaux ont été achevés après la mort de l'empereur en 1936. L'arc a été construit par l'architecte Jean Chalgrin. Sur quatre côtés, le monument est orné de groupes sculpturaux dédiés aux victoires et réalisations militaires de la Révolution française.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Notre dame cathedral",
        ru: "Собор Парижской Богоматери",
        fr: "Cathédrale Notre Dame",
      },
      img:
        "https://top10.travel/wp-content/uploads/2016/10/sobor-parizhskoj-bogomateri.jpg",
      description: {
        en:
          "An outstanding example of Gothic architecture, the most visited cathedral in Paris. It began to be erected in the XII century on the site of the ancient pagan temple of Jupiter. By the middle of the XIV century, the work was completed. During the French Revolution, Notre Dame fell into decay, but in 1804 Napoleon Bonaparte chose it as the site of his coronation, which partially returned the temple to its former significance. The last restoration was carried out in the 1920s.",
        ru:
          "Выдающийся образец готической архитектуры, самый посещаемый собор Парижа. Его начали возводить в XII веке на месте древнего языческого храма Юпитера. К середине XIV века работы были завершены. Во времена Французской революции Нотр-Дам пришел в упадок, но в 1804 году Наполеон Бонапарт выбрал его местом своей коронации, чем частично вернул храму былую значимость. Последняя реставрация проводилась в 1920-х гг.",
        fr:
          "Un exemple exceptionnel d'architecture gothique, la cathédrale la plus visitée de Paris. Il a commencé à être érigé au XII siècle sur le site de l'ancien temple païen de Jupiter. Au milieu du XIVe siècle, les travaux étaient terminés. Pendant la Révolution française, Notre-Dame est tombée en décomposition, mais en 1804, Napoléon Bonaparte l'a choisie comme site de son couronnement, ce qui a partiellement rendu le temple à son ancienne signification. La dernière restauration a été réalisée dans les années 1920.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Palace of Versailles",
        ru: "Версальский дворец",
        fr: "Château de Versailles",
      },
      img:
        "https://top10.travel/wp-content/uploads/2016/10/versailles-palace.jpg",
      description: {
        en:
          "A palace and park ensemble in a Parisian suburb, the famous residence of the French monarchs. Versailles appeared thanks to the efforts of Louis XIV in the 17th century. Gradually, from a modest hunting castle under the supervision of architects Jules Hardouin-Mansart and Louis Leveaux, a luxurious palace grew, which became a symbol of the era of the 'King of the Sun'. Many European monarchs took Versailles as a model for the construction of their own residences.",
        ru:
          "Дворцово-парковый ансамбль в парижском пригороде, знаменитая резиденция французских монархов. Версаль появился благодаря стараниям Людовика XIV в XVII веке. Постепенно из скромного охотничьего замка под присмотром архитекторов Жюля Ардуэн-Мансара и Луи Лево вырос роскошный дворец, который стал символом эпохи «Короля Солнца». Многие европейские монархи брали Версаль за образец для строительства собственных резиденций.",
        fr:
          "Un palais et un ensemble de parc dans une banlieue parisienne, la célèbre résidence des monarques français. Versailles est apparu grâce aux efforts de Louis XIV au XVIIe siècle. Peu à peu, d'un modeste château de chasse sous la direction des architectes Jules Hardouin-Mansart et Louis Leveaux, un palais luxueux s'est développé, qui est devenu un symbole de l'ère du «roi du soleil». De nombreux monarques européens ont pris Versailles comme modèle pour la construction de leurs propres résidences",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "The Eiffel Tower",
        ru: "Эйфелева башня",
        fr: "La tour Eiffel",
      },
      img:
        "https://top10.travel/wp-content/uploads/2016/10/eyfeleva-bashnya.jpg",
      description: {
        en:
          "The most famous and recognizable symbol of Paris (and all of France), a place of pilgrimage for tourists from all over the world. The attraction is visited by several million people annually. The tower is a metal structure 324 meters high with elevators, an observation deck, restaurants and a lighthouse at the top. It was built by Gustave Eiffel and originally served as the entrance to the 1900 Paris World's Fair.",
        ru:
          "Самый известный и узнаваемый символ Парижа (и всей Франции), место паломничества туристов со всего света. Ежегодно достопримечательность посещает несколько миллионов человек. Башня представляет собой металлическую конструкцию 324 метра в высоту с лифтами, смотровой площадкой, ресторанами и маяком на вершине. Она была построена Густавом Эйфелем и изначально служила входом на территорию Всемирной выставки в Париже 1900 года.",
        fr:
          "Le symbole le plus célèbre et le plus reconnaissable de Paris (et de toute la France), lieu de pèlerinage pour les touristes du monde entier. L'attraction est visitée par plusieurs millions de personnes chaque année. La tour est une structure métallique de 324 mètres de haut avec des ascenseurs, une terrasse d'observation, des restaurants et un phare au sommet. Il a été construit par Gustave Eiffel et servait à l'origine d'entrée à l'Exposition universelle de Paris de 1900.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Le musée du Louvre",
        ru: "Музей Лувр",
        fr: "Le musée du Louvre",
      },
      img: "https://top10.travel/wp-content/uploads/2016/10/muzej-luvr.jpg",
      description: {
        en:
          "The architectural ensemble that served as the residence of the French kings from the 16th to the 17th centuries. before the yard moved to Versailles. The palace turned into a museum already in the 18th century. The first collections were collected from the personal funds of Francis I and Louis XIV. Now the collection of the Louvre has more than 400 thousand exhibits, about 35 thousand are constantly exhibited. The museum contains the famous painting 'Mona Lisa', created by da Vinci.",
        ru:
          "Архитектурный ансамбль, служивший резиденцией французских королей с XVI по XVII вв. до переезда двора в Версаль. Дворец превратился в музей уже в XVIII веке. Первые коллекции были собраны из личных фондов Франциска I и Людовика XIV. Сейчас собрание Лувра насчитывает более 400 тыс. экспонатов, постоянно выставляются около 35 тыс. В музее хранится знаменитая картина «Мона Лиза», созданная да Винчи.",
        fr:
          "L'ensemble architectural qui a servi de résidence aux rois de France du XVIe au XVIIe siècle. avant que le chantier ne déménage à Versailles. Le palais s'est transformé en musée dès le 18ème siècle. Les premières collections ont été collectées sur les fonds personnels de François Ier et de Louis XIV. Aujourd'hui, la collection du Louvre compte plus de 400 000 pièces, environ 35 000 sont constamment exposées Le musée contient le célèbre tableau 'Mona Lisa', créé par da Vinci.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Basilica of the Sacre Coeur",
        ru: "Базилика Сакре-Кёр",
        fr: "Basilique du Sacré Coeur",
      },
      img:
        "https://top10.travel/wp-content/uploads/2016/10/bazilika-sakre-kyor.jpg ",
      description: {
        en:
          "The temple is located on the Montmartre hill, it towers over Paris with snow-white domes. Construction began in the second half of the 19th century, when France was going through hard times. The temple was erected on the site of a demolished Benedictine monastery, where Ignatius Loyola himself, the future Grand Master of the Jesuit order, took vows. The basilica was built for over 30 years with donations from Parisians and public funds.",
        ru:
          "Храм располагается на Монмартрском холме, он возвышается над Парижем белоснежными куполами. Строительство началось во второй половине XIX века, когда Франция переживала нелегкие времена. Храм воздвигли на месте снесенного бенедиктинского монастыря, где давал обеты сам Игнатий Лойола – будущий Великий магистр иезуитского ордена. Базилику возводили более 30 лет на пожертвования парижан и государственные средства.",
        fr:
          "Le temple est situé sur la butte Montmartre, il domine Paris avec des coupoles blanches comme neige. La construction a commencé dans la seconde moitié du XIXe siècle, alors que la France traversait des moments difficiles. Le temple a été érigé sur le site d'un monastère bénédictin démoli, où Ignace Loyola lui-même, futur Grand Maître de l'ordre des Jésuites, a prononcé ses vœux. La basilique a été construite pendant plus de 30 ans grâce aux dons des Parisiens et des fonds publics.",
      },
      rate: 3.5,
    },
  ],
};

const greece = {
  iso: "GRC",
  currency: "EUR",
  country: "Greece",
  latLon: [37.9838, 23.7275],
  description: {
    en:
      "Greece is a hot, rather dry and sunny country, where the sun shines more than 300 days a year. Most of the territory is dominated by a Mediterranean climate, in mainland Greece the climate is temperate, in some highland areas - alpine.",
    ru:
      "Греция – жаркая, довольно сухая и солнечная страна, где более 300 дней в году светит солнце. На большей части территории преобладает средиземноморский климат, в континентальной Греции климат имеет умеренный характер, в некоторых высокогорных районах – альпийский.",
    fr:
      "La Grèce est un pays chaud, plutôt sec et ensoleillé, où le soleil brille plus de 300 jours par an. La majeure partie du territoire est dominée par un climat méditerranéen, en Grèce continentale le climat est tempéré, dans certaines régions de haute altitude, il est alpin.",
  },
  images: [
    {
      name: {
        en: "Olympic Temple of Olympian Zeus",
        ru: "Олимпийский храм Зевса Олимпийского",
        fr: "Temple olympique de Zeus olympien",
      },
      img:
        "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/09/Athens-4-Temple_of_-Olympian_-Zeus-e1504325785803.jpg",
      description: {
        en:
          "A lot of attention is riveted to this attraction of Athens. The Temple of Olympian Zeus, although not preserved in its original form to this day, still continues to arouse admiration among residents and guests of the city. On the vast territory, the ruins, which were once the Olympion, still lie majestically.The temple was revered by peoples who believed in Zeus as the supreme god. This place fell into decay after the active spread of Christianity. The building began to collapse rapidly, many of them pulled it apart in parts.",
        ru:
          "К этой достопримечательности Афин приковано большое внимание. Храм Зевса Олимпийского, хоть и не сохранился в первозданном виде до наших дней, все равно продолжает вызывать восхищение у жителей и гостей города. На огромной территории до сих пор величественно лежат руины, которые когда-то были Олимпейоном.Храм почитался народами, которые верили в Зевса как верховного бога. В упадок это место пришло после активного распространения христианства. Здание начало быстро разрушаться, многие растаскивали его по частям.",
        fr:
          "Une grande attention est accordée à cette attraction d'Athènes. Le temple de Zeus olympien, bien que non conservé dans sa forme originale à ce jour, continue de susciter l'admiration des habitants et des invités de la ville. Le vaste territoire est toujours dominé par les ruines qui étaient autrefois l'Olympion.Le temple était vénéré par les peuples qui croyaient en Zeus comme le dieu suprême. Cet endroit est tombé en ruine après la diffusion active du christianisme. Le bâtiment a commencé à s'effondrer rapidement, beaucoup d'entre eux l'ont séparé en plusieurs parties.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Parthenon",
        ru: "Парфенон",
        fr: "Parthénon",
      },
      img:
        "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2019/01/16-Parthenon.jpg",
      description: {
        en:
          "The Parthenon is an ancient temple, which can be safely assigned the status of the main symbol of Athens and Greece as a whole. Rising proudly at the very top of the Acropolis, the Parthenon is perfectly visible from anywhere in the city. The idea of ​​erecting the sanctuary came about 2.5 thousand years ago to the Athenian reformer Pericles, who commissioned the famous masters of that time to design and build a monumental structure. For the construction of the Parthenon, only the best materials were brought from all over the country - snow-white marble, ivory, gold, cypress wood, and many thousands of slaves participated in the construction. Today only the western wall remains of the original structure, but even these ruins today are the pride of the Athenians and testify to the former greatness of the magnificent temple.",
        ru:
          "Парфенон — античный храм, которому можно смело присвоить статус главного символа Афин и Греции в целом. Гордо возвышаясь на самой вершине Акрополя, Парфенон прекрасно обозревается из любой точки города. Идея возведения святилища пришла около 2,5 тысячелетий назад афинскому реформатору Периклу, который поручил знаменитым мастерам того времени спроектировать и возвести монументальное сооружение. Для возведения Парфенона со всей страны свозились только самые лучшие материалы — белоснежный мрамор, слоновая кость, золото, кипарисовое дерево, а в строительстве участвовали многие тысячи рабов. От первоначального сооружения сегодня осталась лишь западная стена, но даже эти руины сегодня являются предметом гордости афинян и свидетельствуют о былом величии великолепного храма.",
        fr:
          "Le Parthénon est un ancien temple, qui peut se voir attribuer en toute sécurité le statut de symbole principal d'Athènes et de la Grèce dans son ensemble. S'élevant fièrement au sommet de l'Acropole, le Parthénon est parfaitement visible de n'importe où dans la ville. L'idée d'ériger le sanctuaire est venue il y a environ 2,5 mille ans au réformateur athénien Périclès, qui a chargé les célèbres maîtres de l'époque de concevoir et de construire une structure monumentale. Pour la construction du Parthénon, seuls les meilleurs matériaux ont été apportés de tout le pays - du marbre blanc comme neige, de l'ivoire, de l'or, du bois de cyprès et des milliers d'esclaves ont participé à la construction. Aujourd'hui, seul le mur ouest reste de la structure d'origine, mais même ces ruines aujourd'hui font la fierté des Athéniens et témoignent de l'ancienne grandeur du magnifique temple.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Theater of Dionysus",
        ru: "Театр Диониса",
        fr: "Théâtre de Dionysos",
      },
      img:
        "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2019/01/19-Theater_of_Dionysus-e1564820575984.jpg",
      description: {
        en:
          "The ancient capital of Greece attracts lovers of antiquity with its archaeological sites and unique cultural sites. In order to get a complete picture of the national heritage of the country as part of the trip, it is worth choosing the most famous cultural monuments of Athens, one of which is the Theater of Dionysus, the oldest building that appeared in the 5th century BC. The entire world history of theatrical art was once born on this stage - it was here that the works of the greatest representatives of ancient Greek drama and literature - Sophocles, Aeschylus, Aristophanes and others were presented to the audience. open sky, since the size of the structure did not allow to erect a roof. Excavations around the theater continue today, and more and more details of ancient buildings are regularly discovered.",
        ru:
          "Древняя столица Греции манит любителей древности своими археологическими памятниками и уникальными культурными объектами. Чтобы в рамках путешествия получить полное представление о национальном наследии страны, стоит выбрать самые известные культурные памятники Афин, одним из которых является театр Диониса — древнейшее сооружение, которое появилось в 5 веке до н.э. Вся мировая история театрального искусства зарождалась когда-то на этих подмостках — именно здесь представлялись на суд зрителей произведения величайших представителей древнегреческой драматургии и литературы — Софокла, Эсхила, Аристофана и др. Античный театр некогда вмещал более 17 тысяч зрителей, а сценические действа разворачивались прямо под открытым небом, поскольку размер сооружения не позволял возвести крышу. Раскопки вокруг театра ведутся и в наши дни, и регулярно обнаруживаются всё новые и новые детали древних строений.",
        fr:
          "L'ancienne capitale de la Grèce attire les amoureux de l'antiquité avec ses sites archéologiques et ses sites culturels uniques. Afin d'obtenir une image complète du patrimoine national du pays dans le cadre du voyage, il convient de choisir les monuments culturels les plus célèbres d'Athènes, dont le théâtre de Dionysos, le plus ancien bâtiment apparu au 5ème siècle. AVANT JC. Toute l'histoire mondiale de l'art théâtral est née une fois sur cette scène - c'est ici que les œuvres des plus grands représentants du théâtre et de la littérature grecs anciens - Sophocle, Eschyle, Aristophane et d'autres ont été présentées au public. Ciel ouvert, depuis la taille de la structure ne permettait pas d'ériger un toit Les fouilles autour du théâtre se poursuivent aujourd'hui, et de plus en plus de détails sur des bâtiments anciens sont régulièrement découverts.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Acropolis of Athens",
        ru: "Афинский акрополь",
        fr: "Acropole d'Athènes",
      },
      img:
        "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/09/Athens-1-Acropolis_of_Athens-e1504317602552.jpg",
      description: {
        en:
          "The Acropolis is rightfully called the most ancient architectural monument of the city and one of the most recognizable landmarks in Greece. It has the form of a hill, rising to 156 m. It has a gentle summit, on which various sights of historical importance are scattered.For the first time, the construction of the hill was started in the 5th century BC. Several decades later, temples appeared on it. Most of the antiquities that have survived since then had to be moved to the Louvre and the British Museum. However, there are exhibits that continue to be stored in the Acropolis. On the hill itself there are modern statues that closely watch the life of the city.",
        ru:
          "Акрополь по праву называют самым древним архитектурным памятником города и одной из самых узнаваемых достопримечательностей Греции. Он имеет вид холма, возвышающегося на 156 м. У него есть пологая вершина, на которой разбросаны различные достопримечательности исторического значения. Впервые обустройством холма занялись в V веке до н.э. Спустя несколько десятилетий на нем появились храмы. Большинство сохранившихся с тех пор древностей пришлось перенести в Лувр и Британский музей. Однако остались экспонаты, которые продолжают храниться в Акрополе. На самом холме сейчас стоят современные статуи, пристально наблюдающие за жизнью города.",
        fr:
          "L'Acropole est à juste titre appelée le monument architectural le plus ancien de la ville et l'un des monuments les plus reconnaissables de Grèce. Il a la forme d'une colline culminant à 156 m et possède un sommet doux sur lequel sont dispersés divers sites d'importance historique.Pour la première fois, la construction de la colline a commencé au 5ème siècle avant JC. Plusieurs décennies plus tard, des temples y sont apparus. La plupart des antiquités qui ont survécu depuis lors ont dû être déplacées au Louvre et au British Museum. Cependant, certaines expositions continuent d'être stockées dans l'Acropole. Sur la colline elle-même, il y a des statues modernes qui surveillent de près la vie de la ville.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Temple of Hephaestus or Hephaisteion",
        ru: "Храм Гефеста или Гефестейон",
        fr: "Temple d'Héphaïstos ou Hephaisteion",
      },
      img:
        "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/09/Athens-7-Temple_of_Hephaestus-e1504335701987.jpg",
      description: {
        en:
          "Those who do not know what to see in Athens should definitely go to Hephaisteion. It can be found in the northwest of the Ancient Agora. For many centuries the temple looked like an Orthodox church. After it was recognized as a national historical monument, and a museum was equipped there. Only in the last century did the sanctuary manage to return its original appearance.The Temple of Hephaestus is the best preserved. It is built of durable marble. For a long time, archaeologists and historians were sure that Hephaisteion was built in honor of Theseus. This is because his images were on the walls of this landmark of Athens. But when the statues of Hephaestus and Athena were found inside the building, experts changed their minds.",
        ru:
          "Тем, кто не знает, что посмотреть в Афинах, непременно стоит отправиться в Гефестейон. Его можно найти на северо-западе Древней Агоры. Многие столетия храм имел вид православной церкви. После он был признан национальным историческим памятником, и в нем обустроили музей. Лишь в прошлом веке святилищу удалось вернуть его первоначальный вид. Храм Гефеста сохранился лучше остальных. Он выстроен из прочного мрамора. Долгое время археологи и историки были уверены, что Гефестейон строился в честь Тесея. Все потому, что его изображения находились на стенах этой достопримечательности Афин. Но когда внутри здания нашлись статуи Гефеста и Афины, специалисты поменяли свое мнение. ",
        fr:
          "Ceux qui ne savent pas quoi voir à Athènes devraient absolument aller à Hephaisteion. Il se trouve au nord-ouest de l'ancienne Agora. Pendant de nombreux siècles, le temple ressemblait à une église orthodoxe. Après avoir été reconnu monument historique national, un musée y a été équipé. Ce n'est qu'au siècle dernier que le sanctuaire a réussi à retrouver son aspect d'origine.Le temple d'Héphaïstos est le mieux conservé. Il est construit en marbre durable. Pendant longtemps, les archéologues et les historiens étaient sûrs que Hephaisteion avait été construit en l'honneur de Thésée. C'est parce que ses images étaient sur les murs de ce monument d'Athènes. Mais lorsque les statues d'Héphaïstos et d'Athéna ont été trouvées à l'intérieur du bâtiment, les experts ont changé d'avis.",
      },
      rate: 3.5,
    },
    {
      name: {
        en: "Odeon of Herodes Atticus",
        ru: "Одеон Герода Аттика",
        fr: "Odéon d'Hérode Atticus",
      },
      img:
        "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2019/01/18-Odeon_of_Herodes_Atticus.jpg",
      description: {
        en:
          "Another striking monument of antiquity in Athens is located on the southern slope of the Acropolis - this is the Odeon of Herodes Atticus, which was built by a noble Athenian in the 2nd century AD. In fact, this is an ancient theater, and the most amazing thing is that this building is still used for its intended purpose - large-scale concerts, performances and other theatrical performances are regularly held on the open-air stage. Performing on the stage of the Odeon is considered an honor by the most famous artists! The Odeon was originally dedicated to the deceased wife of Herod Atticus and was intended for events related to music. Its huge auditorium for almost 5 thousand people was carved right into the rock of the Acropolis, the building itself was large and luxurious, and sculptures of members of the royal court of Herod towered on both sides of the stage. Nowadays, an annual music festival is held on the stage of the Odeon, and in the evenings magnificent lighting is projected onto the walls and stage of the theater, creating a fantastic atmosphere.",
        ru:
          "Ещё один яркий памятник древности в Афинах расположился на южном склоне Акрополя — это Одеон Герода Аттика, который построен знатным афинянином во 2 веке н.э. По сути, это древний театр, и самое удивительное, что это здание до сих пор используется по назначению — на сцене под открытым небом регулярно проводятся масштабные концерты, спектакли и другие театральные постановки. Выступить на подмостках Одеона принимают за честь самые знаменитые артисты! Первоначально Одеон был посвящён погибшей жене Ирода Аттика и предназначался для проведения мероприятий, связанных с музыкой. Его огромный зрительный зал почти на 5 тысяч человек был вырублен прямо в скале Акрополя, само здание было большим и роскошным, а по обе стороны сцены возвышались скульптуры членов королевского двора Ирода. В наше время на подмостках Одеона проводится ежегодный музыкальный фестиваль, а вечерами на стены и сцену театра проецируется великолепная подсветка, создающая фантастическую атмосферу.",
        fr:
          "Un autre monument frappant de l'antiquité à Athènes est situé sur le versant sud de l'Acropole - c'est l'Odéon d'Hérode Atticus, qui a été construit par un noble Athénien au IIe siècle après JC. En fait, il s'agit d'un théâtre antique, et le plus étonnant est que ce bâtiment est toujours utilisé pour son usage prévu - des concerts à grande échelle, des performances et d'autres représentations théâtrales sont régulièrement organisés sur la scène en plein air. Se produire sur la scène de l'Odéon est considéré comme un honneur par les artistes les plus célèbres! L'Odéon était à l'origine dédié à l'épouse décédée d'Hérode Atticus et était destiné aux événements liés à la musique. Son immense auditorium pour près de 5 mille personnes a été sculpté directement dans la roche de l'Acropole, le bâtiment lui-même était grand et luxueux, et des sculptures de membres de la cour royale d'Hérode dominaient des deux côtés de la scène. De nos jours, un festival de musique annuel a lieu sur la scène de l'Odéon, et le soir, un éclairage magnifique est projeté sur les murs et la scène du théâtre, créant une atmosphère fantastique.",
      },
      rate: 3.5,
    },
  ],
};

router.get("/", async function (req, res) {
  let dataCountrys;
  await Country.find({}, function (err, country) {
    if (err) res.status(500).json(err);
    else {
      dataCountrys = country;
    }
  });
  res.status(200).json(dataCountrys);
});

router.get("/coutry", async (req, res) => {
  console.log(req.body.country);

  res.json([spain, japon, italy, germany, belarus, india, france, greece]);
});

export default router;
