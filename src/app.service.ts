import { Injectable } from '@nestjs/common';
export interface IDistrict {
  name: string;
  image: string;
  link: string;
  description: string;
}
@Injectable()
export class AppService {
  districtsOfJK: Array<IDistrict>;
  constructor() {
    this.districtsOfJK = [
      {
        name: 'Anantnag',
        description:
          'Anantnag District is in southern sector of Jehlum Valley. It is because of its rejuvenating climate, the inspiring majesty, its lofty mountains, the melodious flow of sweet waters of its springs and sreams, fertile soil, fragrant flowers and delicious fruits that the district has come to be synonymous with greatness.',
        image:
          'https://cdn.s3waas.gov.in/s330ef30b64204a3088a26bc2e6ecf7602/uploads/bfi_thumb/20180331100-olw7xy1tr8tfpa90dzgjlm7r8lzs6phtii7d64upr4.jpg',
        link: 'https://anantnag.nic.in/',
      },
      {
        name: 'Budgam',
        description:
          'Budgam District derives its name from one of its villages, which is its headquarter. Till the last Census held in 1941 in the pre–independence period, the area was known as SriPratap SinghPoranamed after Dogra ruler MahrajaPratab Singh in whose rule it was constituted as a tehsil for the first time. Prior to 1951, the Tehsil of Budgam including other tehsils of the present District formed a part of the Baramulla district.',
        image:
          'https://cdn.s3waas.gov.in/s31141938ba2c2b13f5505d7c424ebae5f/uploads/2018/09/2021040768.jpg',
        link: 'https://budgam.nic.in/',
      },
      {
        name: 'Bandipore',
        description:
          'Bandipora District is one of the 20 districts in Jammu and Kashmir UT in northern India. Bandipora town is the administrative headquarters of the district. Bandipora, a township with peculiar scenic beauty is located in the foothills of the snow clad peaks of Harmukh overlooking the schores of Wular has produced hundreds, of scholars and intellectuals. Before, 1947, this town was a big trade and literary centre of Kashmir. ',
        image:
          'https://cdn.s3waas.gov.in/s3918317b57931b6b7a7d29490fe5ec9f9/uploads/2018/12/2021092336.jpg',
        link: 'https://bandipore.nic.in/',
      },
      {
        name: 'Baramulla',
        description:
          'The city of Baramulla, from which the district derives its name, was founded by Raja Bhimsina in 2306 BC. The city held the position of a gate-way to the valley as it was located on the route to the Valley from Muzaffarabad, now in POK, and Rawalpindi, now in Pakistan. ',
        image:
          'https://cdn.s3waas.gov.in/s3884d247c6f65a96a7da4d1105d584ddd/uploads/2018/11/2018111285.jpg',
        link: 'https://baramulla.nic.in/',
      },
      {
        name: 'Doda',
        description:
          'Doda is a district in eastern part of Jammu region. It is located at 33.13°N 75.57°E. Doda town after which the district is named is situated at an altitude of 5000 feet above the sea level. The district boundaries do not touch with international borders or the LOC. The district shares border with Anantnag, Ramban, Kishtwar, Udhampur & Chamba district of Himachal Pradesh. The entire district is hilly.',
        image:
          'https://cdn.s3waas.gov.in/s3dc6a70712a252123c40d2adba6a11d84/uploads/bfi_thumb/2018111397-olwdesfay1im49bal3tvn2mz8su411symdgflhfgju.jpg ',
        link: 'https://doda.nic.in/',
      },
      {
        name: 'Ganderbal',
        description:
          'Ganderbal is located at 34.23°N 74.78°E. It has an average elevation of 1,619 metres (5,312 feet). It’s bordered by district Srinagar in the south, Bandipore to the north, Kargil in the north east, Anantnag to the south east and Baramulla in the south west. It is divided into four blocks viz, Ganderbal, Kangan, Lar and wakoora. Nallah Sindh, a major tributary to the Jehlum river flows through this district. The water of the river is mainly used for irrigation, and generation of Hydroelectricity. ',
        image:
          'https://cdn.s3waas.gov.in/s3192fc044e74dffea144f9ac5dc9f3395/uploads/2021/06/2021060925.jpg',
        link: 'https://ganderbal.nic.in/',
      },
      {
        name: 'Jammu',
        description:
          'The winter capital of Jammu &amp; Kashmir is bluffed on the Shivalik Range, overlooking the northern plains. The city was originally founded by Raja Jamboo Lochan who lived in 14th century BC. According to legend, during one of his hunting campaigns, Raja Jamboo Lochan reached the Tawi River where he saw a goat and a lion drinking water at the same place. Having satisfied their thirst, the animals went their own ways.',
        image:
          'https://cdn.s3waas.gov.in/s3979d472a84804b9f647bc185a877a8b5/uploads/2018/03/2018030591.jpg',
        link: 'https://jammu.nic.in/',
      },
      {
        name: 'Kargil',
        description:
          'Kargil is one of the two Districts of Ladakh region and is the second largest town of Ladakh and is situated roughly at equal distance(200KM) from Srinagar, Leh , Padum Zanskar and Skardo Baltistan. Kargil has always been an important trade centre in the past. Traders from China, Central Asia and different parts of India used to trade in Tea, Wool, Carpets, Silk and precious stones in olden days and Kargil was known as a historical meeting point.',
        image:
          'https://cdn.s3waas.gov.in/s341ae36ecb9b3eee609d05b90c14222fb/uploads/2018/09/2018091142-2.jpg',
        link: 'https://kargil.nic.in/',
      },
      {
        name: 'Kathua',
        description:
          'The district is situated 32° 17′ to 32° 55′ North Latitude and 75° 70′ to 76° 16′ East longitude. The District is surrounded by Punjab in the South-East, Himachal Pradesh in North-East, Doda and Udhampur in North and North-West, Jammu in the West and Pakistan in the South-West with an area of 2651 Sq Kms, population of 6.15 Lacs, 5 Assembly Constituencies & 11 Tehsils; Kathua, Bani, Basohli, Billawar, Hiranagar, Nagri, Marheen, Dinga Amb, Lohai-Malhar, Mahanpur, Ramkote.',
        image:
          'https://cdn.s3waas.gov.in/s3eb163727917cbba1eea208541a643e74/uploads/2018/10/2018102965.jpg',
        link: 'https://kathua.nic.in/',
      },
      {
        name: 'Kishtwar',
        description:
          'The erstwhile District Doda comprised of an area of 11691 Sq. Kms. out of which earlier Sub-Division Kishtwar and  now District Kishtwar has an area of 7737 Sq.Km.   The Plateau of Kishtwar is 5300 feet or 1631 meters above sea level. It lies between 75 -25” East longitude & 34 -10” North latitude. Kishtwar town is 234 kilometer from Jammu & 280 kilometers from Srinagar.',
        image:
          'https://cdn.s3waas.gov.in/s317d63b1625c816c22647a73e1482372b/uploads/bfi_thumb/2018101750-1024x768-olw71dx30u8vjjjliesrset22ro5bxlq8pseikqew0.jpg',
        link: 'https://kishtwar.nic.in/',
      },
      {
        name: 'Kulgam',
        description:
          'Town Kulgam (District Headquater) is situated at a distance of about 68 kms from Srinagar and about 17 kms from Anantnag. Geograhically, the district lies between 330 –15’ North Latitudde and 740-35’ East longitude bounded in the East and North by Anantnag and Shopian districts respectively.',
        image:
          'https://cdn.s3waas.gov.in/s3dbe272bab69f8e13f14b405e038deb64/uploads/2022/03/2022032597.jpg',
        link: 'https://kulgam.nic.in/',
      },
      {
        name: 'Kupwara',
        description:
          'District Kupwara is the northern frontier district with an area of 2379 square kilometers, having more than 240Kms of LOC and came into existence in the year 1979. The district kupwara is exquisitely beautiful with vibrant culture, diverse heritage, unique folklore and vast meadows. kupwara district  is located between Pir Pancha land Shams Bari mountain ranges. These mountain ranges have beautiful meadows and pastures in their bosom which provide grazing ground for cattle and sheep. Besides they also are health resorts and tourist spots for the adventurous souls.',
        image:
          'https://cdn.s3waas.gov.in/s302a32ad2669e6fe298e607fe7cc0e1a0/uploads/2019/01/2019012266.jpg',
        link: 'https://kupwara.nic.in/',
      },
      {
        name: 'Leh',
        description:
          'District Leh is situated roughly between 32 to 36 degree north Latitude and 75 to 80 degree East longitude and altitude ranging from 2300 mtrs to 5000 mtrs above sea level. District Leh with and area of 45100 Sq. Kms. makes it one of the largest District in the country.The District is bounded by Pakistan occupied Kashmir in the west and China in the North and eastern part and Lahul Spiti of Himachal Pardesh in the south east. It is at a distance of 434 Kms from State capital ( Summer) Srinagar and 474 Kms from Manali (HP).',
        image:
          'https://cdn.s3waas.gov.in/s3291597a100aadd814d197af4f4bab3a7/uploads/2018/05/2018051025.jpg',
        link: 'https://leh.nic.in/',
      },
      {
        name: 'Pulwama',
        description:
          'The village is comprised of four hamlets namely Malikpora, Dalipora, Chattapora and Dangarpora. Initially it was Tehsil Headquarter. In order to bring “Knit together” all the four hamlets in the shape of town, it was formed into a village. To “Knit together” has been described as Pnawan in Kashmiri language. It is why that it has been named as Pnawangam (Gam is word for all Kashmiri villages) which later on deshaped and became Pulgam and then Pulwama, which is at the tip of the tongue of the people.',
        image:
          'https://cdn.s3waas.gov.in/s3c75b6f114c23a4d7ea11331e7c00e73c/uploads/2018/05/2018051942-1024x549.png',
        link: 'https://pulwama.gov.in/',
      },
      {
        name: 'Poonch',
        description:
          'Poonch has witnessed many historical era.   Around 326 BC when Alexander the Great invaded the lower Jhelum belt to fight with Porus, this region was known as Dravabhisar. In 6th Century AD, the famous Chinese traveler Huien Tsang passed through this area. According to his observation, this region was known as Part of Kashmir.   Around 850 AD Poonch became a sovereign state ruled by Raja Nar, who was basically a horse trader.',
        image:
          'https://cdn.s3waas.gov.in/s31905aedab9bf2477edc068a355bba31a/uploads/2018/08/2018081121.jpg',
        link: 'https://poonch.nic.in/',
      },
      {
        name: 'Rajouri',
        description:
          'The District drives its name from Rajouri town which itself had been historically known as Rajapuri. Rajouri District had been part of Poonch district prior to 1967. On 22nd September 1967, Government bifurcated district Poonch into two districts namely ‘Rajouri’ and ‘Poonch’, to facilitate the process of development and better supervision of economic activities in this area. By this way, Rajouri emerged as a District from 1st January 1968. ',
        image:
          'https://cdn.s3waas.gov.in/s31aa48fc4880bb0c9b8a3bf979d3b917e/uploads/2019/11/2019110432.jpg',
        link: 'https://rajouri.nic.in/',
      },
      {
        name: 'Ramban',
        description:
          'Ramban District was carved-out of the erstwhile District Doda keeping in view the backwardness, remoteness and aspiration of people of the area. District Ramban started functioning as independent unit on April 01, 2007. Terrain of district Ramban is tough and hilly. District Ramban shares its boundary with Reasi, Udhampur, Doda, Anantnag and Kulgam',
        image:
          'https://cdn.s3waas.gov.in/s3ae0eb3eed39d2bcef4622b2499a05fe6/uploads/2018/11/2018112860.jpg',
        link: 'https://ramban.gov.in/',
      },
      {
        name: 'Reasi',
        description:
          'Reasi is one of the Eight, newly created Districts in the UT of Jammu and Kashmir, which came in to existence from Ist of April 2007 . It is predominantly a hill District, which enjoys variable climatic conditions, ranging from sub-tropical to the semi temperate.Geographical status of the District we can divide the District into ‘Hilly’ and ‘Low Lying Hilly’ Region.',
        image:
          'https://cdn.s3waas.gov.in/s3c5ff2543b53f4cc0ad3819a36752467b/uploads/2021/02/2021021857.png',
        link: 'https://reasi.nic.in/',
      },
      {
        name: 'Samba',
        description:
          'Samba town is situated on the foothills of Shivalik Hills alongside the National Highway at 384 meters (1259 feet) above sea level, on the bank of river Basantar at a distance of forty Kilometers from Jammu city. District Samba is bound by District Udhampur in the North, District Kathua in the east, Tehsil Jammu and Bishnah of District Jammu in the west, while on the southern side, it has a 55.5 KM long International Border with Pakistan.',
        image:
          'https://cdn.s3waas.gov.in/s3a97da629b098b75c294dffdc3e463904/uploads/2018/07/2018071182.jpg',
        link: 'https://samba.nic.in/',
      },
      {
        name: 'Shopian',
        description:
          'Shopian is a historical town, and has gained importance from the time of Mughal rulers.It was previously known as ‘Sheen-e-van’ meaning ‘forest of snow’. Shopian was one out of six Wazarat Headquarters in Kashmir from 1872-1892 A.D. The District is situated in the laps of foot Hills of Pirpanchal range and most of its area is Hilly Terrain.the District is having an area of 30,741.6 hectares. It is at a distance of 51 km from city Srinagar .',
        image:
          'https://cdn.s3waas.gov.in/s3d34ab169b70c9dcd35e62896010cd9ff/uploads/2021/04/2021040874.jpg',
        link: 'https://shopian.nic.in/',
      },
      {
        name: 'Srinagar',
        description:
          'District Srinagar is the summer capital of Jammu and Kashmir (UT). It is situated in the centre of the Kashmir Valley on the banks of the Jhelum River and is surrounded by four districts and Ladakh UT. In the north it is flanked by Ladakh (UT) and Ganderbal in the South by Pulwama in the north-west by Budgam. The capital city of Srinagar is located 1585 meters above sea level. The city is famous for its gardens, lakes and houseboats.',
        image:
          'https://cdn.s3waas.gov.in/s3f4b9ec30ad9f68f89b29639786cb62ef/uploads/2018/07/2018070292.jpg',
        link: 'https://srinagar.nic.in/',
      },
      {
        name: 'Udhampur',
        description:
          'Udhampur is a district in the Indian Union territory of Jammu and Kashmir. Covering an area of 4,550 square kilometres (1,760 sq mi) in the Himalayan mountains, the district has its headquarters in the town of Udhampur.[3] The Northern Command headquarters of the Indian Army is located in the district. Some Parts of District Udhampur like Chenani ,Kud, Ladha Dhar are not in Udhampur District .',
        image:
          'https://cdn.s3waas.gov.in/s33cec07e9ba5f5bb252d13f5f431e4bbb/uploads/2021/04/2021040150.jpg',
        link: 'https://udhampur.nic.in/',
      },
    ];
  }
  getDistricts(): Array<IDistrict> {
    return this.districtsOfJK;
  }
}
