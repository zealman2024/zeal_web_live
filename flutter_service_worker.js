'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fb8333fa4fa8d86a31dad16d1640e876",
"assets/AssetManifest.bin.json": "ffdcbba640b22ed8d6e92f6991b8ed34",
"assets/AssetManifest.json": "679eea9fda0d328c7d5f39b52a7788ff",
"assets/assets/images/1.png": "3f4dffe105b92b9afa9777f3dfb4ec06",
"assets/assets/images/about_image.png": "e1e32648cf17eabcea117bda9b869e62",
"assets/assets/images/facilities/b.png": "5c1617e75527a7bad990047ef3801f9a",
"assets/assets/images/facilities/dd.png": "77d54b5cd675b8ba172dd193e8007167",
"assets/assets/images/facilities/lc.png": "186db3fc66e3d766bdddbe353df591df",
"assets/assets/images/facilities/p-1.png": "5adbc01057ae33657f1311973f82ad2b",
"assets/assets/images/facilities/p.png": "2d2581e4fabf6cf4e48f948bc087b5dd",
"assets/assets/images/facilities/w.png": "ce3ec1dab7f9c9cbef144965ca2cf1a1",
"assets/assets/images/facilities/wt.png": "9c3a5fd6b58309030f22df0d39286b9f",
"assets/assets/images/fb.png": "5e2ee39b20b78fc2ef922760e8f87162",
"assets/assets/images/hero/1.png": "8f6dc0895da64a0c7291b4aa70afe5d4",
"assets/assets/images/hero/2.png": "b8c5d35d475f5356a86957d6c7e00172",
"assets/assets/images/hero/3.png": "529b415ae03dd3bff60082d283be58b7",
"assets/assets/images/hero/4.png": "07abd9afa43d8b1384618f76ee99e9c8",
"assets/assets/images/hero/5.png": "3083f4eedc38fadadd8caf3f8ca19aee",
"assets/assets/images/hero/6.png": "efcc28d439c137a433d7f0329df78a25",
"assets/assets/images/hero/7.png": "9cd2004b9995466208e534122fae1a6c",
"assets/assets/images/hero/8.png": "bb3a1fe39671463e9c77652347dd22ad",
"assets/assets/images/hero/9.png": "17f2a3fa63321ca5d3242b6d092ca430",
"assets/assets/images/insta.png": "a679fe21b0aeb248db6fdec3d75cd087",
"assets/assets/images/left.png": "06c9b85628b465629f9fe43311e8e692",
"assets/assets/images/logo.png": "fa092144ea16e71a6b6f96632244cd71",
"assets/assets/images/menu.svg": "48a49dc25403ed77130ed9e63f18b116",
"assets/assets/images/products_single/Architecture/aol.jpeg": "fffaee0229b69553be23c3f145887eae",
"assets/assets/images/products_single/Architecture/chairs.jpeg": "88d8e4f26ce951cb154207ae040b2506",
"assets/assets/images/products_single/Architecture/cs.jpeg": "e8cc5597f04bcf7a77244b0309a22617",
"assets/assets/images/products_single/Architecture/dp.jpeg": "b214acfc4dbe0f408df570eeef26a5f7",
"assets/assets/images/products_single/Architecture/mscr.jpeg": "af56ef87c3a9bc24be4d70889db7c290",
"assets/assets/images/products_single/Architecture/rcop.jpeg": "9ce5bfb8a07946dfeba0938674ac7724",
"assets/assets/images/products_single/Architecture/sskl.png": "449c0410cdcf940a654ded67794a721a",
"assets/assets/images/products_single/Architecture/tables.jpeg": "9996070d7aebb3c7a3ce83f82b082517",
"assets/assets/images/products_single/Architecture/wf.jpg": "eb7f41188b8d57e8f94667ae1e903027",
"assets/assets/images/products_single/Architecture/wm.png": "ce158bdc54efb82fcb6edf0c56c26ece",
"assets/assets/images/products_single/defence/ep.jpeg": "8ac1c51bcb0c8152017b55fb83a4c005",
"assets/assets/images/products_single/defence/htpp.jpeg": "a9cc3a27424448a5db5a60a2ead214a5",
"assets/assets/images/products_single/defence/ma.jpeg": "3c41fce154e9a22a4fc2e023129901de",
"assets/assets/images/products_single/defence/mtp.jpeg": "c7d216d5845b1235f795add68e3b4da4",
"assets/assets/images/products_single/defence/psmc.jpeg": "4d40f86627b921c6288b28ef1c9988c0",
"assets/assets/images/products_single/defence/re.jpeg": "da1f16e8432ff23a741fa18941c48fb4",
"assets/assets/images/products_single/defence/scr.jpeg": "05caf49876a004446bfdfd77af04588a",
"assets/assets/images/products_single/Food%2520Processing%2520Industry/dt.jpg": "c285059968008be6bbdbfd94c43d5053",
"assets/assets/images/products_single/Food%2520Processing%2520Industry/fpt.jpg": "c227268172dc9a1c4f7b680925aff43f",
"assets/assets/images/products_single/Food%2520Processing%2520Industry/hdt.jpg": "911c77db703b47c35e07697cf1665d29",
"assets/assets/images/products_single/Food%2520Processing%2520Industry/lt.jpg": "e4ca81d8e5459dcd97b48ff95c6493f0",
"assets/assets/images/products_single/Food%2520Processing%2520Industry/MISCEL.jpg": "04abe3b4362a82be01c1ed9cce1c7045",
"assets/assets/images/products_single/Food%2520Processing%2520Industry/sc.jpg": "4ecebcf7c5a853a1e860652a81edc15b",
"assets/assets/images/products_single/Food%2520Processing%2520Industry/sr.jpg": "23c711d4e046243bbc19207aeeaaf897",
"assets/assets/images/products_single/Food%2520Processing%2520Industry/t.jpeg": "794a8b6b32d547dddd5546f0a0cd408c",
"assets/assets/images/products_single/Food%2520Processing%2520Industry/wp.jpg": "0cf47a567c1b1317512207212aa253e1",
"assets/assets/images/products_single/general/aa.jpeg": "b409bed5b21dfbc21297c3a6ce62e783",
"assets/assets/images/products_single/general/ec.jpg": "f6e8f386599d58178ea0f23e32879d50",
"assets/assets/images/products_single/general/ma.jpeg": "df42e21bf6944989e95a3b15e644ad68",
"assets/assets/images/products_single/general/sscp.jpeg": "83eb620bade73e6542fb55989a45c587",
"assets/assets/images/products_single/general/ups.jpg": "1fdacff929866886372cb28dd32040fb",
"assets/assets/images/right.png": "488e2e97070c4eabbf3c678b3bde3939",
"assets/assets/images/services/airports.png": "4e5434a9d581269bd625a8356e3d4ed3",
"assets/assets/images/services/architecture.png": "00296047d82ecf7e6c29dea319d64e65",
"assets/assets/images/services/defence.png": "866beae9ad2d84dc605a8ae6af435852",
"assets/assets/images/services/food.png": "22355e3b2724e1e964629cdb54b40d46",
"assets/assets/images/services/hydrolics.png": "492740e3a71cbf6fcf4514bf010fed8c",
"assets/assets/images/services/medical.png": "d9c66a8b6370028ab2c853e59e4ae6b6",
"assets/assets/images/twitter.png": "d8cbe28f1817a98a0a4f22ce37bbac08",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "36b07e240fda895a37d9044cb6ee8ae4",
"assets/images/hero/1.png": "8f6dc0895da64a0c7291b4aa70afe5d4",
"assets/images/hero/2.png": "b8c5d35d475f5356a86957d6c7e00172",
"assets/images/hero/3.png": "529b415ae03dd3bff60082d283be58b7",
"assets/images/hero/4.png": "07abd9afa43d8b1384618f76ee99e9c8",
"assets/images/hero/5.png": "3083f4eedc38fadadd8caf3f8ca19aee",
"assets/images/hero/6.png": "efcc28d439c137a433d7f0329df78a25",
"assets/images/hero/7.png": "9cd2004b9995466208e534122fae1a6c",
"assets/images/hero/8.png": "bb3a1fe39671463e9c77652347dd22ad",
"assets/images/hero/9.png": "17f2a3fa63321ca5d3242b6d092ca430",
"assets/NOTICES": "eb184ab63c21aa671631c2b73c342211",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d865ac9358da4e9bcc49296ac28c6ebf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "0673340f32087a2953988e8f769fdf5f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f057a0eeabd416d8e6c124fb4774e341",
"/": "f057a0eeabd416d8e6c124fb4774e341",
"main.dart.js": "da1f2610a381248798aaa2897149a47a",
"manifest.json": "cebb27a558d2e62b64efe9443855c717",
"version.json": "b655b5298a1a2fb398954843ec848c5a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
