'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "139937f7d2cbf71c5c0132b182b87263",
"assets/AssetManifest.bin.json": "9a431239d277c3a3fa8d1a02268a2b30",
"assets/AssetManifest.json": "fbf041be9c869d204af3db7888457aec",
"assets/assets/images/1.png": "3f4dffe105b92b9afa9777f3dfb4ec06",
"assets/assets/images/about_image.png": "e1e32648cf17eabcea117bda9b869e62",
"assets/assets/images/fb.png": "5e2ee39b20b78fc2ef922760e8f87162",
"assets/assets/images/hero/1.png": "3f4dffe105b92b9afa9777f3dfb4ec06",
"assets/assets/images/hero/2.png": "43fa800af3079ecaf7fe6190b9607a0b",
"assets/assets/images/hero/3.png": "ed37c287329a53ca284e585a384e8aee",
"assets/assets/images/hero/4.png": "3a4477fe6f6c5d5e8a9de2e46e744fa5",
"assets/assets/images/hero/5.png": "2cc440b9e9886beb8545c36e8fe28a2a",
"assets/assets/images/hero/6.png": "29826faeee937c94e7e9a7a99e3b8261",
"assets/assets/images/hero/7.png": "53c2d4bc33f66ea9a15d3f1dbd692225",
"assets/assets/images/hero/8.png": "416f2a29f33161637ec504370a6caad5",
"assets/assets/images/hero/9.png": "041220ac1cd58dcf22fac312bb195bd3",
"assets/assets/images/insta.png": "a679fe21b0aeb248db6fdec3d75cd087",
"assets/assets/images/left.png": "06c9b85628b465629f9fe43311e8e692",
"assets/assets/images/logo.png": "fa092144ea16e71a6b6f96632244cd71",
"assets/assets/images/right.png": "488e2e97070c4eabbf3c678b3bde3939",
"assets/assets/images/services/airports.png": "4e5434a9d581269bd625a8356e3d4ed3",
"assets/assets/images/services/architecture.png": "00296047d82ecf7e6c29dea319d64e65",
"assets/assets/images/services/defence.png": "866beae9ad2d84dc605a8ae6af435852",
"assets/assets/images/services/food.png": "22355e3b2724e1e964629cdb54b40d46",
"assets/assets/images/services/hydrolics.png": "492740e3a71cbf6fcf4514bf010fed8c",
"assets/assets/images/services/medical.png": "d9c66a8b6370028ab2c853e59e4ae6b6",
"assets/assets/images/twitter.png": "d8cbe28f1817a98a0a4f22ce37bbac08",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/images/hero/1.png": "3f4dffe105b92b9afa9777f3dfb4ec06",
"assets/images/hero/2.png": "43fa800af3079ecaf7fe6190b9607a0b",
"assets/images/hero/3.png": "ed37c287329a53ca284e585a384e8aee",
"assets/images/hero/4.png": "3a4477fe6f6c5d5e8a9de2e46e744fa5",
"assets/images/hero/5.png": "2cc440b9e9886beb8545c36e8fe28a2a",
"assets/images/hero/6.png": "29826faeee937c94e7e9a7a99e3b8261",
"assets/images/hero/7.png": "53c2d4bc33f66ea9a15d3f1dbd692225",
"assets/images/hero/8.png": "416f2a29f33161637ec504370a6caad5",
"assets/images/hero/9.png": "041220ac1cd58dcf22fac312bb195bd3",
"assets/NOTICES": "e8d63f43d240b09a076c0e386ad45278",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "dd1dd44bf9a2ba20bd4fa56461b12d50",
"/": "dd1dd44bf9a2ba20bd4fa56461b12d50",
"main.dart.js": "9b3470cfb640d1d295e65635700131ac",
"manifest.json": "12eaf476bd775a54c5a91e52a4d4deb9",
"version.json": "678a5bfc2d682b36e98976ed3d94942b"};
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
