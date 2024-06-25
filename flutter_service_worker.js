'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1d1e2d43a064a042b92e99eb8a605858",
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
".git/index": "c1f85a4c2562a961ba9fdc0cec3a1b96",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b8d60962e4914de684a652be808086d4",
".git/logs/refs/heads/master": "b8d60962e4914de684a652be808086d4",
".git/logs/refs/remotes/origin/master": "acf35b0a0cb11cea332880ebf5c3241f",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0b/12a4a4eb499c04e99811cc96b7059bf8a8360a": "030383f7a9a970574ad9257e16c51da5",
".git/objects/0d/fea2a5846b1b97633fa34a535004ab97a1523d": "deb05c66a57d0de12b48fdd506b5b091",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/11/f13436d8165c73540142a4248ef1260e6a50d9": "f0d418fefc343428cd9991d76bf82426",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/2e2830d08bd2369034a141277e23153e6053a6": "1c3ad4001c462027c9f55fc1a3535140",
".git/objects/1d/21637ed9c5ac9dc45cd3b644c275b1b822ec9a": "61e9e61e8e0dad71000160fd82277906",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/8851558c629420ebc6935f31242235e3fa9be4": "1d9f6082000515ce26f9f0162cf7c1b6",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2a/04d655e05cfe9254b00e277f812f9f26bdb226": "ad028da7c0587838017c66721079b00f",
".git/objects/2e/950aedc9367bd3b691447f66a7097f1c053600": "f4fcaed24937f2a172dad0a0ed529d01",
".git/objects/35/9a018ee68444e92f4404e6c936294c9043dfb7": "b3c3c1ca9d48ee8a3d8603ebf3c48a00",
".git/objects/36/b0299fdb10633b4ffd682c59e5a56e251d6ff0": "c4df71830867215de7a0448172f8f39e",
".git/objects/3d/30bd9ba06257c7a10315df6ee0b5c3e5f050e8": "c53dd8fc8a31edce3541a33d4ef4e833",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/55/cf6f1e92938db4004e90ab7a88ee89ccddde43": "279bfd838556e4ca10d4b8c55e8947ce",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/d2d8939c53680e10be5b932b1f1c9a5619408c": "08f120b53dc64d2678ea5c458b1fe146",
".git/objects/60/a0f842f963757e89b675bc7ec222c024a112c3": "cdef2bbe8617215b30c6f6cbb04df87f",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/67/01034303b435bb30af2a358dd5a6d57d73ea69": "d65783edfbf5abba91d493b13a02f3c4",
".git/objects/69/26c3f9a9dc83324a1e664146269cf4a047914d": "f06364accf88f4a73be8b758b96f826f",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6c/6936c8ff2b26d63bd6219b35b8e662cea7c078": "900e3dd811f43ec12005c80202a20f8b",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/73/1d388140f88793ea98391a562d2aeae84d46e8": "7b220b6f8afd736b03678e1d98908076",
".git/objects/78/67c8266c645a63b742679d6131648047c06f9e": "70bbb2898c4083ea83756ef9647777a5",
".git/objects/79/f0c1b0798f661ec18bbddd149137fbcd402cd8": "f7afa975fc051b44fd607adb0357fc32",
".git/objects/7a/971273212135b0c707a5978f71157552fb9db2": "d7f9bcc218cdd69e057baf35c4f31262",
".git/objects/81/60a284bda383bb5fadfded7e4d840fb756b953": "9cdaa89726d51e443a1c797995382c75",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/e6060f7b7e0f451e84b9d61a789eaada1c2906": "4739336444fd8e8f0a160c9eeda82b32",
".git/objects/88/5dca3dabb299bc4e8e717cd236b3e6543a83e4": "1429dc11359eb2c5b849bbe57f6ac3aa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/94/7b31f12577ba2f5ad1f8ae6a5abedb5ecccaf0": "37eb3283f0288b7405bd3599308181c9",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/98/c6c63265027df5c375448922234446a9734a0f": "31d849c1601541b7d05700863441d222",
".git/objects/a1/4796b9d08b53a7006ecd72446c27c0afa93751": "4eeb20e849c4c00c58418ab7f39cce21",
".git/objects/a4/29979bddea9c93a3c1605e082f37620a9d0eea": "470c96aae92d7ed2a943078bbd60431a",
".git/objects/a5/78c8d94ad624ba4d1074958801e7d62242ee49": "05fee97558b6046805fc6514fb00cf64",
".git/objects/ae/9074a7af3f77e1ae41ed0eed3dd1003ef58ddc": "9106f11fcdda0c0bdd61e24885ef5a44",
".git/objects/ae/f053bd926a0089f5a7b9b873647516ee3d45c1": "87d9c64437afd772881f665a570d3f2d",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b6/89f8aad33d2882a919e649fac12fe35e684ceb": "0bcaff9c7ede82c4409b7ffe011c142d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/712143bab19c60b887e97fad17fcea41f98860": "83fdb239a29fbea12447046f52d6859c",
".git/objects/bd/583cafe5cff376519aa6c7771123df8b173ce1": "b0d8730392456c803009eda942127a98",
".git/objects/c3/76a029f7705a34e24c8a195a916bd9c9ef256b": "91d2a28c17a70e1c4ecc61a340a2d162",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ce/4d5af253c00068dbed1c3c5c5797dd8e8a1ce5": "3f2a5ea197ae086b50b9cf8ee61f18bc",
".git/objects/cf/855327746b16ac74b0fec8afa6667e1eb52875": "64627f7d73dabbe7fdc68d8dc6c994c0",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d2/1a27dcc0a79edaa78d10a0549f186f49863657": "9ec8577babc72074416c24fc97b7aa7e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/51e8fc99f888f383828ff9508a0dae4046e555": "fb59f5cba572583f3b93975b4cd01ddd",
".git/objects/e5/7ae2b7a12b511c32f33b9b667502546061d939": "0a087c473d0803b64de5686159f4170a",
".git/objects/ea/853d67a12da1677064654dc527c2d284cddc25": "f021b711de53b5816d7e254d68dfdc3c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/e1b31034558d59270802646708f248ce8ee5bd": "2aa0e2be1c314c3ae239f2e245752118",
".git/objects/f0/bf7717a883a810fe441cc84bbeda394e169bc1": "801afecd7cad108df711d731fdb8e64f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/0638f1f441c7d1235b242d36360e8938b69618": "c66d48fad032538c1a69adb051ae8021",
".git/objects/f8/6f65ea9cb0a7611ebb387972a962e60f78dab6": "1000356ea3b2d3b14053e593c85b944b",
".git/objects/fc/d7392deb7b65080316aa808ed93f589d3bed96": "54f3db0b4f8492fe059d00b90933309c",
".git/refs/heads/master": "63dc9b4e726a90f2d4742b61b3158ffe",
".git/refs/remotes/origin/master": "63dc9b4e726a90f2d4742b61b3158ffe",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "aee25ff0e451f2709c3edeab8e594f4f",
"assets/NOTICES": "3f01b2e9a708910c4778fc8c659d78cc",
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
"flutter_bootstrap.js": "7848ff5b3663ce1818c79ccf719eca13",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d2c2dbffb23ab30bbaa87adb622e4ebe",
"/": "d2c2dbffb23ab30bbaa87adb622e4ebe",
"main.dart.js": "8598bfc0f46c98d79fef72e250a86bd7",
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
