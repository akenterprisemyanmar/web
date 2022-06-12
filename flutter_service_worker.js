'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f8267e49af6e6e44ad3468b075031774",
".git/config": "787d5b8f6277b508ca99d59339f267e7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7c80c059407748ecdeed157705b074b9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "73190d811cc4635c0fd77adc0c4c8fd2",
".git/logs/refs/heads/master": "73190d811cc4635c0fd77adc0c4c8fd2",
".git/logs/refs/remotes/origin/master": "3ccc35c200a9f8f03d9d38c059409ea7",
".git/objects/00/109c6151cf71a5d5b37ca5dbb422b9700c9d33": "1959818e366c9c8d645c3e3be191ed29",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/03/015d22887f934b53877ae8203a3079dd065915": "ca73d8201278425b392bef027e9bdbbd",
".git/objects/03/1c9959507e21a03ce7e434830b7ee58acc4426": "e65fa2179d68671c716bfc417b67b31a",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/977514ff6de041957632eabca77c2f59f6ea99": "0d569d9263b0339e64d75e0a493eeb7e",
".git/objects/10/aa46534c6fddda737d0f88d8820757aaf83c5b": "7ba7607a13b59556788ecfe0e3067c0f",
".git/objects/22/d8adaedd9831a9acb985e2a394d20c6ca03c2b": "df1bfc72daaeca2acc231eadebcb7ceb",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2c/151e1b4869094cf0ab52a41ecca9687dbb5403": "3ae9a2dde01c29b9467945c977e42c11",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/37/42457900d51ae5c34ed53657ed8a72f17f19c6": "14c972e5155e5aa3bf2db2ef8589e81a",
".git/objects/3b/f4f763de1ae344f32ddd741c27d04e91e423db": "03b72b7a6b7889b98d10c53b9e62423f",
".git/objects/3d/6861b42396c609e26f38f129383c558e332281": "5094a76191110339c6815fd8ca04f5b7",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/8da4418388c3bb24fc43e1e64b777021391edc": "cc6af36a9680fd071f0bf17c688ca4d3",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/54/266d35dd5d8fd594ae558c08a856b5f26d7082": "90afc2360395d7e5215a3f124986ae9e",
".git/objects/60/9ac530964281e0f746c58b1983f26e6c8409ef": "1e96e9e27a8d3973748cee4b455699af",
".git/objects/63/548b9c6ea5ef5775c40ee3e37c068fc5a8046d": "5fb19f63103e84b1658ea795d7890baf",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/6e/da595318df6a07f47f09d141afe5e97759efd6": "0efebc9b1319c01f9a0080700d565a71",
".git/objects/75/9ce388753a436f40b75f574d1377077a7a40ec": "22405202bcf8e16da18d3b49990c9820",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/a2598eea423d770bc1d0af0424e532a0c118ef": "ff0d3c766976fdd690f58c2a71860353",
".git/objects/7d/084aed88451b9ace90558113db803815c14d3f": "f7990a7033727890e78500a14099023d",
".git/objects/81/7526c230887dca75a094eb82933b03caffbb71": "6816a3e23986e735590771755f330464",
".git/objects/88/ed2b0ed0cf43e96ba5a5892c950bf74b094bd9": "f6e56ad9c4ac7aba74c69ce2e47f0704",
".git/objects/8f/12c96813136308265cfa41645fd09b738e7eab": "7ce52f39debd1d99cd4207a0f52a2970",
".git/objects/8f/508793409f34cc6bf73812f5343f2be09e6ab0": "61cefb88c3c5064c02481621d5aa1625",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/95/fa3c943d98505859bb64806e807779b2379336": "8f67587b07a3a093a489ed7fdf760b07",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/9c/773eda5714b2bd533b53e7c8dfb0e0239e1342": "468cbd05502d2236ee669e702f4c3390",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c0/20f8146e0e3e89f900a84da9702b214264ddbc": "f838e5ec29fbd04377955b850e98f231",
".git/objects/c0/ace23b24aeca6d04483313ee93de7a8e62d674": "8aec4826e635aff88bc1411c991bc0b3",
".git/objects/c4/1911653f4663bfdb019d957254801e17f05ae9": "49dfab7054d00363ea00af19f73573fd",
".git/objects/c4/4689b3fac42fd65d56876e0cb43275e381d9a4": "52e2df4b17340a3411a875525ed5cf0a",
".git/objects/c6/c0b3b129737abaf4f52f4af64e2c55a8ed275a": "9e17767ed8c84ec097b3054a68183e22",
".git/objects/c8/f8af2e19b0a5f36a006a03c9bd5a3079af6fe4": "b6108d59a9995ab8ea5149bb49b603c5",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ed/36f38d91dc30b00448917bf0fb80466ecb926b": "a139e7f6591be6794880e08b05023e23",
".git/objects/f7/480ad3de878e393f0b833bd5e4b9aedac22dfe": "be7b60e04558f1f82301164a78e86060",
".git/objects/fa/31c45e31dfd8567d2828d1f5aaf7fc7b6c6c50": "beeaabb6abe4717d025f13124e1f9041",
".git/refs/heads/master": "7b77db41d6c95c4e5996465582e8b41d",
".git/refs/remotes/origin/master": "7b77db41d6c95c4e5996465582e8b41d",
"assets/AssetManifest.json": "b80fe0299ceba570d9c6fda8df270d80",
"assets/assets/logo.png": "f92499ad7fea0c7219dffe9c456b3fcf",
"assets/FontManifest.json": "65dc54b7813d1f0ab33ab489a91d8c67",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/OleoScriptSwashCaps-Bold.ttf": "6432414ab1365d58d7423f0ac6232577",
"assets/fonts/OleoScriptSwashCaps-Regular.ttf": "cedd93aff0900036032396ae5ba6fee2",
"assets/fonts/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/fonts/Roboto-Light.ttf": "6090d256d88dcd7f0244eaa4a3eafbba",
"assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/fonts/Roboto-Thin.ttf": "4f0b85f5b601a405bdc7b23aad6d2a47",
"assets/NOTICES": "d09501a64246f2ce259e2c2e23a5916b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/custom_full_image_screen/assets/default_image.png": "fcf52e1f65a63f7affc8a6f6100fd3d6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "f92499ad7fea0c7219dffe9c456b3fcf",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "f92499ad7fea0c7219dffe9c456b3fcf",
"icons/Icon-512.png": "f92499ad7fea0c7219dffe9c456b3fcf",
"icons/Icon-maskable-192.png": "f92499ad7fea0c7219dffe9c456b3fcf",
"icons/Icon-maskable-512.png": "f92499ad7fea0c7219dffe9c456b3fcf",
"index.html": "3ab1fd7a830f3d9e16b6802ec50fe52a",
"/": "3ab1fd7a830f3d9e16b6802ec50fe52a",
"main.dart.js": "34de018bf5c2bd7c5c217a8e241831a8",
"manifest.json": "4cef4b1cbd8f564cae1864be1416f1c7",
"version.json": "aae6a2bdf4448f566019542207f33e7c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
