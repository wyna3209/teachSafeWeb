'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6bc1fe3b0bbb4120b8817bc437ce4539",
".git/config": "6b52593c32e49e9c17e79a70e5bbcb5f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c0730a97a9b524b76ab4910b9cd5d310",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8e84fbef8d4e716aeb8c183a275a5d74",
".git/logs/refs/heads/master": "8e84fbef8d4e716aeb8c183a275a5d74",
".git/logs/refs/remotes/origin/master": "96824aea42b16cc09b9d1e33b9b87d7e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/7429263766f71e602f8c1f762fc05de346de6f": "9b345ca591bba250bc1323eb6b5e1258",
".git/objects/06/a9382c386976bb0e0b8dd19b19b48e5473f684": "ee6a33623f53c53cbc9398a079110784",
".git/objects/0b/12a4a4eb499c04e99811cc96b7059bf8a8360a": "030383f7a9a970574ad9257e16c51da5",
".git/objects/0d/190b21d267087181e498733b3c11e030e58790": "67853ae7ce964e76878b8a3e12f1c2fe",
".git/objects/0d/fea2a5846b1b97633fa34a535004ab97a1523d": "deb05c66a57d0de12b48fdd506b5b091",
".git/objects/0e/aded87fabc6f5dca6230fbd372bb729eba7e53": "559dbc2c81a1abbb278c21ca21aab970",
".git/objects/0f/c2a17a49553c2bce0d9f1cde26184273e80c94": "a8d371312e6cce57f521b96f4f46162e",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/11/f13436d8165c73540142a4248ef1260e6a50d9": "f0d418fefc343428cd9991d76bf82426",
".git/objects/15/96d5677c3d4028f7050c5f1c5513cfd6be3830": "cb4e10554d889b4e686b6bec735dd993",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/2e2830d08bd2369034a141277e23153e6053a6": "1c3ad4001c462027c9f55fc1a3535140",
".git/objects/1d/21637ed9c5ac9dc45cd3b644c275b1b822ec9a": "61e9e61e8e0dad71000160fd82277906",
".git/objects/1d/77c32f860fe038e5e90b2eee0a48a7aa83a0a5": "c470b0e13932bb9f4a9c90fc0bd283e8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/788e6a30380febf2173cce1c2a7a650fcef5dc": "c3ee58f474fd3217fc425eeb31ef3884",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/8851558c629420ebc6935f31242235e3fa9be4": "1d9f6082000515ce26f9f0162cf7c1b6",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/9597834917fdd6a9685e86b1d85f8397003609": "14ff5f602501c42ca1a2f38aab9befee",
".git/objects/22/9d2f79463cd92708ed8f33e2aabf029b81253e": "db356244000f34421121fa0d8eb743cc",
".git/objects/23/933a46ee1a1160e22e79edfdf7b2ddcaf2c538": "3f1c73c934c3a5c388de227dcca5650f",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/28/0ff42c495c24c5ae851824de760687c093cfd8": "6419a5b1217b03686a2b46f67179e77f",
".git/objects/2a/04d655e05cfe9254b00e277f812f9f26bdb226": "ad028da7c0587838017c66721079b00f",
".git/objects/2c/cb77c978c5cdf9a3eda61958b51c755848eb06": "18b72bfb8e9782ba46976da6a0aa3850",
".git/objects/2c/cba0e9e8bca4f90cbb52dac216565c0516b919": "ac8117d03380041c10376bf1e8859b60",
".git/objects/2d/abdda34aebf250741fb990117fb4f5b1cfc566": "74bc60aa9ef42114b0bdba0ff02ada05",
".git/objects/2e/950aedc9367bd3b691447f66a7097f1c053600": "f4fcaed24937f2a172dad0a0ed529d01",
".git/objects/31/83744bcddcdd1b346f983ffd596429d2e1c4b9": "326fd86c4c0b6fb8ec9790acfc63c361",
".git/objects/33/2f9809924769701db3febe7ece167c69c2ca9c": "8114baa5d407562be678c2e650868e05",
".git/objects/35/9a018ee68444e92f4404e6c936294c9043dfb7": "b3c3c1ca9d48ee8a3d8603ebf3c48a00",
".git/objects/36/a0f18d4b56204961944afc1a376da87ebc78a0": "9221f64984d9649a25e5a2adbac226c6",
".git/objects/36/b0299fdb10633b4ffd682c59e5a56e251d6ff0": "c4df71830867215de7a0448172f8f39e",
".git/objects/37/d2ade3f6b7cf8742329c752935415cbf28e87f": "18efa6f10ad10575a6f7dd6c71be04b6",
".git/objects/39/9b8e8af32f2dca790141c8e2b6395c874a5a0b": "8e1ed8f77cbe097871ecd7fd9a5c3e2d",
".git/objects/39/b48ad68b30ba9b71d57c88dbf9833e8761a21a": "d1503aa9e3ac98ef00463a4fee80104b",
".git/objects/3c/09050e00aca554ffb16bfd1cc2fd37c407c375": "3adb2a00019db44ce99f236f4c38adad",
".git/objects/3d/30bd9ba06257c7a10315df6ee0b5c3e5f050e8": "c53dd8fc8a31edce3541a33d4ef4e833",
".git/objects/46/0b6cc6cf040285e149c1e8d975c56ea1103901": "9d763f7cc161a51695eba9cdf2ac24de",
".git/objects/46/472438e3196269ae4a7fa11ff71b4eb7077085": "e09ca88ea30e9b1b29c8a8e7711efc98",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/7bd616c458e5b7a7788920e39486225f01b02f": "eb33119ca67f12d30612ca7c7846be98",
".git/objects/48/5f8e71e6e41c71f9686e21d3691974788a9754": "06a49fd1655640cc92544c9762574980",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/50/bc29d8693c4174f1d14bde7f86549b94d63718": "e67e06c531b5c5504525f8f17a08071f",
".git/objects/53/65aa9166558e56f507e504e85918ae67ce89dd": "ff7d7480349d4df9e69c3d365e15789a",
".git/objects/55/276603d2ce81976a0a95223dfbff8d465b197e": "7e1ed9f6d87ae681e30a695546369e98",
".git/objects/55/cf6f1e92938db4004e90ab7a88ee89ccddde43": "279bfd838556e4ca10d4b8c55e8947ce",
".git/objects/56/74e5eaa855eb777fab6a396eb6f14b54ad7bfd": "5533a8d2d83cb8225f205b82dc129a1d",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/d2d8939c53680e10be5b932b1f1c9a5619408c": "08f120b53dc64d2678ea5c458b1fe146",
".git/objects/5b/2116b59b4896a50d5ef568256b84ee4db53bcf": "ab8ff721bedbee541d6f281658970754",
".git/objects/5b/63a3971d6668814d9b7ec1d70c2e63eee27a8d": "81ea3e6988e9849631a0b7015fd751ca",
".git/objects/60/a0f842f963757e89b675bc7ec222c024a112c3": "cdef2bbe8617215b30c6f6cbb04df87f",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/ab2a3433af564d2abfe9f56d4bafa39db10729": "b83a69be1af510293cbc2b725657a65f",
".git/objects/65/7ebbc23958090fde98cbb4781aeb1c8aa71288": "e10251542f684f2e06c39e5f02d00ab0",
".git/objects/67/01034303b435bb30af2a358dd5a6d57d73ea69": "d65783edfbf5abba91d493b13a02f3c4",
".git/objects/67/cf129712b5774107101925427a973a91fb152b": "679207bb1811f02fab8886588065ec5f",
".git/objects/67/e57a47de4c1678fe8fb6e0d7d2f5b0203ae9d0": "a3c66a79b30630a01430e92915405aae",
".git/objects/69/26c3f9a9dc83324a1e664146269cf4a047914d": "f06364accf88f4a73be8b758b96f826f",
".git/objects/69/c26856a3bbafce1a022e16bc0ac205f1df189d": "9e9208d6ac05fe69a1e485a941388942",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6c/6936c8ff2b26d63bd6219b35b8e662cea7c078": "900e3dd811f43ec12005c80202a20f8b",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/73/1d388140f88793ea98391a562d2aeae84d46e8": "7b220b6f8afd736b03678e1d98908076",
".git/objects/75/5d5c46425b783492e0e7b56f1b3c889f604d04": "2ac607e7c5045ee38d65c074a2dea307",
".git/objects/75/bb266ee6afcc525232b0b8ad96ee24a3573124": "c32a25045ab5b736c2c806194e5a1e8a",
".git/objects/78/67c8266c645a63b742679d6131648047c06f9e": "70bbb2898c4083ea83756ef9647777a5",
".git/objects/79/142507d08ff4d9f372ed40b929a841d6231b89": "864d9863c948a77a5d1690a43b589c4d",
".git/objects/79/3f885c6c7398a3873c09cb823f204454fede65": "77176fe5af3fd3ba7185e37c5dbeccef",
".git/objects/79/d6ff1f6beb5dcafa93330f1a1bd8c4698498e0": "05cce408d8d4bd2fa4d12fa265d15d42",
".git/objects/79/f0c1b0798f661ec18bbddd149137fbcd402cd8": "f7afa975fc051b44fd607adb0357fc32",
".git/objects/7a/971273212135b0c707a5978f71157552fb9db2": "d7f9bcc218cdd69e057baf35c4f31262",
".git/objects/7f/f863bd799d03964425647ad3fc9a9d977d7b35": "3070fbce66474a769f43fe64d905cd2e",
".git/objects/80/2177fc8cc24fe56498baca70de2c9186d54470": "b3bf83ec3266d085eb48d9c837ca49ce",
".git/objects/81/60a284bda383bb5fadfded7e4d840fb756b953": "9cdaa89726d51e443a1c797995382c75",
".git/objects/82/3c0d59b5202e895c674478ef83c27e02767de3": "4345bb1a57b8034ea08f75a599fb8911",
".git/objects/82/5378a596ba58e3c79a24c5c8d348ebd3248a91": "7713f833f9b5daba52f455d41a4db67e",
".git/objects/82/b16b476f1698534ac1c6c3fc18a3e39d6d4826": "a661da1cc7a4c8daa5ac00c48249ee98",
".git/objects/84/5774d9a1ebcf646affc0e875f96da2a0ba6bdb": "42abffb1b4ec702c9feb191bc5c42a3c",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/5bb17190cbd81ef75da722e485532a5795fdbc": "2d208bdc634ab23b47ddd30aac63ccf1",
".git/objects/87/e6060f7b7e0f451e84b9d61a789eaada1c2906": "4739336444fd8e8f0a160c9eeda82b32",
".git/objects/88/5dca3dabb299bc4e8e717cd236b3e6543a83e4": "1429dc11359eb2c5b849bbe57f6ac3aa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/f382c80f808b976f4bf5095538981953cde2e9": "6d2c83c614448e73928b310950851644",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/a4beaa7819b26cff95745a5b4f69a4700ddfc4": "26d4fbef82190ef5da7f39bfa4c2afab",
".git/objects/8e/524ef652c5f4b5406275e017781bfd999158f8": "d4e16ce7d8c9ddd97425f1d9faf8d8c0",
".git/objects/8f/db917c85bd1ad0a5cbd54ef97e7903f0ea70de": "c1a013d53f6ac525d0c99687b3adf29e",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/94/7b31f12577ba2f5ad1f8ae6a5abedb5ecccaf0": "37eb3283f0288b7405bd3599308181c9",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/85184f890c9faecefc85ec502ee3b534208c51": "57e4433167873e1b777a319d333930ca",
".git/objects/95/da68640ef063af0f5c5daff686c5e2f6a9b899": "b6896c21bffe71a8a30d50f28f33ca20",
".git/objects/96/c8cbc73a27010d7ca04463245e31399341fc8d": "cffebac87af288a3d1902967d19fa171",
".git/objects/97/1346cd7732503c731ad9c59e7f587a20e750ca": "0adcf5d5688a3cf96bed58ff72bc138d",
".git/objects/98/723f3c05b76ad4f57de8905394890044b8bd22": "7d896ebfeac401518c6be4dccf6dcbc3",
".git/objects/98/c6c63265027df5c375448922234446a9734a0f": "31d849c1601541b7d05700863441d222",
".git/objects/a1/4796b9d08b53a7006ecd72446c27c0afa93751": "4eeb20e849c4c00c58418ab7f39cce21",
".git/objects/a4/29979bddea9c93a3c1605e082f37620a9d0eea": "470c96aae92d7ed2a943078bbd60431a",
".git/objects/a4/a2b560a3eacce5f4be6a2059ce3d12255c7d8f": "1e077ef62ea4de92e76c962ca98b16af",
".git/objects/a5/05bea96aea85ebb7f1d270bda223c7018382a2": "782c5682c17684a4e9c327b0760e05f7",
".git/objects/a5/78c8d94ad624ba4d1074958801e7d62242ee49": "05fee97558b6046805fc6514fb00cf64",
".git/objects/a6/5e854cc938bd964c35d11d23153a89fb03c19d": "9d12be66849f4874c213eda1a69742e7",
".git/objects/a6/831222b1ad5b97177eec788e4cd3d88c374217": "72c96027e54708788b15f15ece168f57",
".git/objects/a6/c6320beb5d2b8632052517f5d973f1b63d1851": "b58912c5400f86d38c6d10bbd88aea82",
".git/objects/a7/d20144dce61582da977ef6b2f98a546da953a3": "f11c87b39c6800c7e267a3931e2a1a35",
".git/objects/ab/c06d8bdbd09fc8be2cf69d2ab36d2bdab1cf25": "1ca770e723352315e2af1400648405dc",
".git/objects/ac/9b5b837cc5de80f451daa2de89555411d098a4": "e8b7428bed515c9e06bc8bc27e145290",
".git/objects/ad/7473c71ceff8560e2a6931578370a23c151f30": "4b818b279cfabd1f63703faba74bb455",
".git/objects/ae/9074a7af3f77e1ae41ed0eed3dd1003ef58ddc": "9106f11fcdda0c0bdd61e24885ef5a44",
".git/objects/ae/f053bd926a0089f5a7b9b873647516ee3d45c1": "87d9c64437afd772881f665a570d3f2d",
".git/objects/b2/1d89826551b1122686afabf5f9a23dca3231bf": "199548d042ee95f18fea30907cb69acd",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/4c08bf7558febc51e88bd08a9611ed255ad601": "b0d3d1090478e9ab7f03020d3049a2c3",
".git/objects/b6/89f8aad33d2882a919e649fac12fe35e684ceb": "0bcaff9c7ede82c4409b7ffe011c142d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/712143bab19c60b887e97fad17fcea41f98860": "83fdb239a29fbea12447046f52d6859c",
".git/objects/bb/ee26b08afd751a34dfc427354b645b6e82ead9": "db30bcaf5e416f3e9e975270aedb7ee3",
".git/objects/bd/583cafe5cff376519aa6c7771123df8b173ce1": "b0d8730392456c803009eda942127a98",
".git/objects/be/be67da60aab5861ad9eaeab54a20324ea0bb04": "53d75ea562a01cdd1beeb015ee01c754",
".git/objects/c1/291ed14dc772689668691dee9b9b7934fe90e1": "e4a6ab36e6a6fb12cc1326ba540c3788",
".git/objects/c1/58ce593b82ed3d83db59dd8a14b62829f4c71f": "696438c1cc839adf7ab9d9e419ace02c",
".git/objects/c3/76a029f7705a34e24c8a195a916bd9c9ef256b": "91d2a28c17a70e1c4ecc61a340a2d162",
".git/objects/c6/17cc7b6ed0205a9c6e972bbc657292a198ea35": "02c521b43c638799635fb032bc75c2db",
".git/objects/c8/ac34b5a3f42a8407e8f98c6aea4ec9de642fe2": "d1c0b41daf363e23a6d465003dd599bf",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cc/01d2e239cf159bcc11f70a9628ca8665c0f20a": "f5b53ba83722705c5223c755b6989c19",
".git/objects/cc/73c2475a4936a03d90519267c121ae11199746": "c08b9a13316a05f54ddab4d98f32adc4",
".git/objects/ce/4d5af253c00068dbed1c3c5c5797dd8e8a1ce5": "3f2a5ea197ae086b50b9cf8ee61f18bc",
".git/objects/ce/f4a58ae3b53b418c217fef75cf4048c2422207": "cdcaa08f59d388964b1d09d09f342d3f",
".git/objects/cf/3e05a0a8ebd557cc2ce953da24f2a9a0d257c0": "ebcc257f7ae8b3bf63059ffed694304d",
".git/objects/cf/855327746b16ac74b0fec8afa6667e1eb52875": "64627f7d73dabbe7fdc68d8dc6c994c0",
".git/objects/d0/d72853be12c035052124ca6b3d83caf4f178b0": "a414c3518eb254005868e9fc48cefcdb",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/eec028c5526e95aba3d4fff49a79063c47bea6": "47fa9f8d8e60523dad66ed8eeffa24c2",
".git/objects/d2/1a27dcc0a79edaa78d10a0549f186f49863657": "9ec8577babc72074416c24fc97b7aa7e",
".git/objects/d2/c13b5bbfa6c763b5ab8b5530ec4f7699ab8d85": "f4450b01da06c86df104d7254784a777",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/88d2280ebd6da30d27483d439c8da0d5e547cc": "678b01d60b01c48bf63fb09a2ce5d03a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/1b2350aec835c826e7a8882a9f871d653c1c3f": "41b8850c29c84da24c38621f4fbdebda",
".git/objects/d9/bd8d7709b17f64e6c687bbf1c8324fd82d4f7e": "0b4dde1c2507b316edcd9b5219893f8d",
".git/objects/da/5b89a514babb5c3fa77375c9f3f070d3932794": "502547a7bd1c063dac26d1b161065612",
".git/objects/da/de45dc00d50eabbd2ebdd2cf5fe938bad52314": "a71906a51bd42dc10489d81494300071",
".git/objects/db/51e8fc99f888f383828ff9508a0dae4046e555": "fb59f5cba572583f3b93975b4cd01ddd",
".git/objects/dc/0b5f6a29bc1f18c907140d2207f4d7ef306f17": "3b8691529f9075cd0658ddc42dd5f03f",
".git/objects/dc/2d46249abc424388c04788347e22e5af59650f": "07096aca597777b40938bf8922292434",
".git/objects/df/f4f8296cec439746fff1f9f2f07ef952521177": "b9c6804098862d2b218104a014e8ece9",
".git/objects/e1/b66b28494a76a63b02bf0d723d0e18f274ab34": "d1e1f04d1ccb78a9cc72bc3ea7c502eb",
".git/objects/e5/7ae2b7a12b511c32f33b9b667502546061d939": "0a087c473d0803b64de5686159f4170a",
".git/objects/e6/130bc2c5d51876f46d48a3e9afa3725fa2ef35": "3fe1ec527c620dc1a557e0a7692be44b",
".git/objects/e6/7344d3e2981a2f6551882ffa423d395e418135": "24c80308bc5f441370b87ed13e62bd51",
".git/objects/ea/853d67a12da1677064654dc527c2d284cddc25": "f021b711de53b5816d7e254d68dfdc3c",
".git/objects/ea/ff1a59696366f8bbc9e2ee315bb519cb7a82ab": "3f466cd153ed318dc5198223b1dadb96",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/e1b31034558d59270802646708f248ce8ee5bd": "2aa0e2be1c314c3ae239f2e245752118",
".git/objects/ee/ef19c7b83e985122364f447c8eceeda9356145": "e45aa4735d63758341df80dbd4346791",
".git/objects/f0/bf7717a883a810fe441cc84bbeda394e169bc1": "801afecd7cad108df711d731fdb8e64f",
".git/objects/f0/ebe79bac040904d142da4c03d5e4726ee4a270": "4f7e303311e4c7bf5a0947bfcef1a575",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/0638f1f441c7d1235b242d36360e8938b69618": "c66d48fad032538c1a69adb051ae8021",
".git/objects/f4/80972fbe11b3b9e882f1f5e30afc91db04b7c7": "fbeb8ab85179e59ba96ce73bfe899666",
".git/objects/f6/d896395215db4763cd461569e9febc7467f6a7": "09e1dd088d6883b4461606a7065387d6",
".git/objects/f7/5843fdd2a411607ccd6e38f711fa7986678ba4": "72b0f61639aa67d517a5cea7ce4591b2",
".git/objects/f8/473c66fa852b7a3521befed2cd81d822d08524": "8aa6813168ffeb2ab70c230f3a2bc98a",
".git/objects/f8/6f65ea9cb0a7611ebb387972a962e60f78dab6": "1000356ea3b2d3b14053e593c85b944b",
".git/objects/fc/c806867d3cab306006c979dd8ca522b11901ff": "3181aef3a7196ee229f75238c45dc227",
".git/objects/fc/d7392deb7b65080316aa808ed93f589d3bed96": "54f3db0b4f8492fe059d00b90933309c",
".git/refs/heads/master": "a17bef84ec1b8b9ed6e4a7386614add3",
".git/refs/remotes/origin/master": "a17bef84ec1b8b9ed6e4a7386614add3",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "aee25ff0e451f2709c3edeab8e594f4f",
"assets/NOTICES": "780dd65cdc1fede5cd93776822fe3b29",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "d141d34e80da734b6877332c5dbaf8d2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d2c2dbffb23ab30bbaa87adb622e4ebe",
"/": "d2c2dbffb23ab30bbaa87adb622e4ebe",
"main.dart.js": "b9dd4cdbb40a9b560740a1ac168bff6a",
"manifest.json": "4a1ef483c2ab681dadf07cb040183513",
"version.json": "60c24265ca743259c64e87514a9f0006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
