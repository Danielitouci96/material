import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/interfaces/users';

@Injectable({
  providedIn: 'root'
},)
export class UsersService {

  _users: User[] = [
    {id:1,name:"Orran",lastName:"Cordero",sex:"Male",phone:"(892) 3512044",country:"Canada"},
{id:2,name:"Page",lastName:"Gawith",sex:"Male",phone:"(882) 6463521",country:"China"},
{id:3,name:"Pieter",lastName:"Bowle",sex:"Male",phone:"(297) 6402028",country:"Portugal"},
{id:4,name:"Gayle",lastName:"Gregersen",sex:"Male",phone:"(381) 8998964",country:"Indonesia"},
{id:5,name:"Tillie",lastName:"Lahrs",sex:"Female",phone:"(779) 6341498",country:"Marshall Islands"},
{id:6,name:"Jinny",lastName:"Sambiedge",sex:"Female",phone:"(159) 4400755",country:"Canada"},
{id:7,name:"Maude",lastName:"Brundill",sex:"Female",phone:"(906) 9244205",country:"Portugal"},
{id:8,name:"Lew",lastName:"Saer",sex:"Male",phone:"(317) 3199974",country:"Russia"},
{id:9,name:"Shaylynn",lastName:"Borit",sex:"Female",phone:"(954) 6006461",country:"Brazil"},
{id:10,name:"Catrina",lastName:"Care",sex:"Female",phone:"(434) 7392144",country:"Poland"},
{id:11,name:"Davita",lastName:"McCallam",sex:"Female",phone:"(227) 1720073",country:"Russia"},
{id:12,name:"Lind",lastName:"Sadat",sex:"Male",phone:"(665) 7125143",country:"China"},
{id:13,name:"Aldrich",lastName:"Boucher",sex:"Male",phone:"(239) 1937796",country:"Russia"},
{id:14,name:"Udell",lastName:"Fleay",sex:"Male",phone:"(411) 5973260",country:"Dominican Republic"},
{id:15,name:"Nathalie",lastName:"Gorring",sex:"Female",phone:"(631) 5971305",country:"Poland"},
{id:16,name:"Mignonne",lastName:"Fettiplace",sex:"Female",phone:"(216) 8881065",country:"France"},
{id:17,name:"Udell",lastName:"Mearing",sex:"Male",phone:"(516) 2823075",country:"United Kingdom"},
{id:18,name:"Raff",lastName:"Naile",sex:"Male",phone:"(144) 9079968",country:"Peru"},
{id:19,name:"Nannette",lastName:"Conyard",sex:"Female",phone:"(923) 6715615",country:"China"},
{id:20,name:"Curran",lastName:"McGucken",sex:"Male",phone:"(608) 8549044",country:"Cambodia"},
{id:21,name:"Loralie",lastName:"Feaver",sex:"Female",phone:"(154) 4399461",country:"China"},
{id:22,name:"Baron",lastName:"Newick",sex:"Male",phone:"(532) 7829742",country:"Tanzania"},
{id:23,name:"Wallache",lastName:"Blabber",sex:"Male",phone:"(141) 3021325",country:"Poland"},
{id:24,name:"Abel",lastName:"Greedier",sex:"Male",phone:"(969) 3988530",country:"Peru"},
{id:25,name:"Demetra",lastName:"Outram",sex:"Female",phone:"(981) 7809082",country:"Bulgaria"},
{id:26,name:"Toby",lastName:"Lacheze",sex:"Male",phone:"(943) 7569656",country:"China"},
{id:27,name:"Joella",lastName:"Trenholme",sex:"Female",phone:"(874) 4346080",country:"China"},
{id:28,name:"Dody",lastName:"Metzel",sex:"Female",phone:"(899) 7133266",country:"Colombia"},
{id:29,name:"Kally",lastName:"Golton",sex:"Female",phone:"(378) 8278561",country:"Greece"},
{id:30,name:"Cathi",lastName:"Chaplyn",sex:"Female",phone:"(248) 7388509",country:"Portugal"},
{id:31,name:"Cal",lastName:"Halkyard",sex:"Male",phone:"(372) 5607222",country:"France"},
{id:32,name:"Royal",lastName:"Chalice",sex:"Male",phone:"(633) 3324301",country:"Croatia"},
{id:33,name:"Rayna",lastName:"Eteen",sex:"Female",phone:"(424) 1791649",country:"Indonesia"},
{id:34,name:"Marcello",lastName:"Henworth",sex:"Male",phone:"(852) 4447218",country:"Indonesia"},
{id:35,name:"Cindy",lastName:"Biggs",sex:"Female",phone:"(128) 7739385",country:"Indonesia"},
{id:36,name:"Kinny",lastName:"Gaitone",sex:"Male",phone:"(669) 2857915",country:"Indonesia"},
{id:37,name:"Kahlil",lastName:"Clubbe",sex:"Male",phone:"(635) 2466850",country:"Poland"},
{id:38,name:"Lester",lastName:"Muirden",sex:"Male",phone:"(592) 4860485",country:"China"},
{id:39,name:"Cornela",lastName:"Paolillo",sex:"Female",phone:"(572) 6281660",country:"Indonesia"},
{id:40,name:"Sharona",lastName:"Pennings",sex:"Female",phone:"(515) 9950852",country:"Russia"},
{id:41,name:"Osbourne",lastName:"Hickisson",sex:"Male",phone:"(527) 2450849",country:"Philippines"},
{id:42,name:"Evelina",lastName:"Claybourne",sex:"Female",phone:"(561) 3957148",country:"Ireland"},
{id:43,name:"Ronny",lastName:"Larchiere",sex:"Female",phone:"(150) 7941600",country:"Russia"},
{id:44,name:"Lesley",lastName:"Dobsons",sex:"Female",phone:"(450) 5328314",country:"Colombia"},
{id:45,name:"Chrissie",lastName:"Kennewell",sex:"Female",phone:"(671) 9666799",country:"Morocco"},
{id:46,name:"Fredek",lastName:"Feakins",sex:"Male",phone:"(209) 2062822",country:"Guatemala"},
{id:47,name:"Blanch",lastName:"Edleston",sex:"Female",phone:"(245) 7781206",country:"Poland"},
{id:48,name:"Milzie",lastName:"Woakes",sex:"Female",phone:"(676) 9554913",country:"China"},
{id:49,name:"Lilly",lastName:"Skyme",sex:"Female",phone:"(696) 7995976",country:"Philippines"},
{id:50,name:"Ravi",lastName:"Bainbrigge",sex:"Male",phone:"(837) 9048721",country:"Philippines"},
{id:51,name:"Grissel",lastName:"Skipton",sex:"Female",phone:"(848) 3492037",country:"Philippines"},
{id:52,name:"Puff",lastName:"Daal",sex:"Male",phone:"(409) 6782163",country:"Philippines"},
{id:53,name:"Jae",lastName:"Disbrey",sex:"Male",phone:"(988) 7362639",country:"China"},
{id:54,name:"Reinwald",lastName:"McFade",sex:"Male",phone:"(751) 8786595",country:"Indonesia"},
{id:55,name:"Abramo",lastName:"Pill",sex:"Male",phone:"(181) 3215529",country:"Japan"},
{id:56,name:"Oliver",lastName:"Synder",sex:"Male",phone:"(562) 7291874",country:"China"},
{id:57,name:"Tades",lastName:"Kuhndel",sex:"Male",phone:"(438) 4297996",country:"Greece"},
{id:58,name:"Stanwood",lastName:"Bunn",sex:"Male",phone:"(873) 8682957",country:"Indonesia"},
{id:59,name:"Shamus",lastName:"McNirlan",sex:"Male",phone:"(240) 6918272",country:"Nigeria"},
{id:60,name:"Ashly",lastName:"Edworthy",sex:"Female",phone:"(824) 2584117",country:"China"},
{id:61,name:"Jamey",lastName:"Brane",sex:"Male",phone:"(219) 3640713",country:"Ethiopia"},
{id:62,name:"Rosalyn",lastName:"Rollinshaw",sex:"Female",phone:"(377) 3488693",country:"Uganda"},
{id:63,name:"Dulcinea",lastName:"Meir",sex:"Female",phone:"(639) 5325331",country:"Brazil"},
{id:64,name:"Terese",lastName:"Shevelin",sex:"Female",phone:"(232) 4684929",country:"Brazil"},
{id:65,name:"Cristobal",lastName:"Daugherty",sex:"Male",phone:"(199) 3962474",country:"France"},
{id:66,name:"Brendon",lastName:"Gullivent",sex:"Male",phone:"(998) 4607465",country:"Poland"},
{id:67,name:"Demetris",lastName:"Thurby",sex:"Male",phone:"(873) 9496838",country:"Indonesia"},
{id:68,name:"Edik",lastName:"Hannent",sex:"Male",phone:"(480) 2692952",country:"United States"},
{id:69,name:"Brittney",lastName:"Isles",sex:"Female",phone:"(140) 5454542",country:"Russia"},
{id:70,name:"Emmery",lastName:"Thorneley",sex:"Male",phone:"(530) 3975060",country:"Thailand"},
{id:71,name:"Tripp",lastName:"Rowles",sex:"Male",phone:"(308) 2324253",country:"Canada"},
{id:72,name:"Morna",lastName:"Sindall",sex:"Female",phone:"(110) 8679711",country:"China"},
{id:73,name:"Toiboid",lastName:"Whitwam",sex:"Male",phone:"(664) 9567540",country:"Canada"},
{id:74,name:"Huey",lastName:"Sybbe",sex:"Male",phone:"(487) 5713098",country:"Russia"},
{id:75,name:"Colman",lastName:"Roantree",sex:"Male",phone:"(414) 9850974",country:"Indonesia"},
{id:76,name:"Franchot",lastName:"Iacovone",sex:"Male",phone:"(362) 1779313",country:"Philippines"},
{id:77,name:"Gasparo",lastName:"Peregrine",sex:"Male",phone:"(398) 1256899",country:"Poland"},
{id:78,name:"Nicola",lastName:"Latta",sex:"Male",phone:"(778) 4699564",country:"China"},
{id:79,name:"Cesar",lastName:"Attlee",sex:"Male",phone:"(181) 1006514",country:"Japan"},
{id:80,name:"Zorana",lastName:"Nigh",sex:"Female",phone:"(985) 2945779",country:"Philippines"},
{id:81,name:"Merrielle",lastName:"Stonman",sex:"Female",phone:"(549) 6565394",country:"Japan"},
{id:82,name:"Yorgo",lastName:"Hansill",sex:"Male",phone:"(897) 7487702",country:"Azerbaijan"},
{id:83,name:"Shena",lastName:"Cotterell",sex:"Female",phone:"(911) 2068148",country:"Albania"},
{id:84,name:"Kay",lastName:"Ormond",sex:"Female",phone:"(376) 6748572",country:"Russia"},
{id:85,name:"Jayson",lastName:"Vreede",sex:"Male",phone:"(876) 4445395",country:"China"},
{id:86,name:"Jaynell",lastName:"Bengal",sex:"Female",phone:"(218) 1775298",country:"Tanzania"},
{id:87,name:"Nicky",lastName:"Dossetter",sex:"Male",phone:"(502) 1387491",country:"China"},
{id:88,name:"Phelia",lastName:"Whitcher",sex:"Female",phone:"(911) 9206792",country:"Indonesia"},
{id:89,name:"Lorine",lastName:"Hemeret",sex:"Female",phone:"(419) 4775004",country:"Portugal"},
{id:90,name:"Zackariah",lastName:"Casella",sex:"Male",phone:"(670) 7839983",country:"China"},
{id:91,name:"Eudora",lastName:"Flockhart",sex:"Female",phone:"(637) 4441380",country:"Russia"},
{id:92,name:"Court",lastName:"Greyes",sex:"Male",phone:"(350) 1229117",country:"Portugal"},
{id:93,name:"Brandtr",lastName:"Wearn",sex:"Male",phone:"(920) 6822091",country:"Canada"},
{id:94,name:"Noah",lastName:"Caldairou",sex:"Male",phone:"(669) 9697962",country:"Indonesia"},
{id:95,name:"Noble",lastName:"Chesters",sex:"Male",phone:"(768) 9987200",country:"Guyana"},
{id:96,name:"Sebastien",lastName:"Danielczyk",sex:"Male",phone:"(360) 1872316",country:"Albania"},
{id:97,name:"Garry",lastName:"Abbess",sex:"Male",phone:"(783) 9452495",country:"France"},
{id:98,name:"Alonzo",lastName:"Uwins",sex:"Male",phone:"(698) 2714245",country:"Niger"},
{id:99,name:"Marsha",lastName:"Doge",sex:"Female",phone:"(664) 2021141",country:"China"},
{id:100,name:"Minna",lastName:"Jinkins",sex:"Female",phone:"(710) 8411223",country:"Sweden"},
  ];

  constructor() { }

  getUsers(){
    return this._users

  }

  createUser(user: User){
    this._users.push(user)
  }

  deleteUsersById(i:number){
    const array = this._users.splice(i,1)
    return array;
  }
}
