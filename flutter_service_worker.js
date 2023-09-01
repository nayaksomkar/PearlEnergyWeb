'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "fa56e636f2f31b7a2cba0b3fc764fb73",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "580077efab8768c8ffe71dd22446e65f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3c10823aa855a438d89bfddce415791f",
".git/logs/refs/heads/main": "414de205ae50fd7d5a101e9d90757670",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/6bf6fd2dfb1701d817ba18f9ad450fe28e6a08": "78e0ca94abd58228ed33edb4960b7b40",
".git/objects/0a/0e515a38517307af47ce0d2c78a188332a07d2": "b752974c5e6f1d957445ab796c9d2bc0",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0b/dbc3a38234aa71066e6cc9403eeb511aec282e": "8ab9548c0fb8ab04f5bc170e3f165724",
".git/objects/0c/ee77793dfaca90a23d16be205e5634691d2db5": "7446a248bb1e5c9a9c19f6bba36727cc",
".git/objects/19/5f2c3259130dc09aa3adf3e99759601dc5f685": "c125cd63c18ebd4d58d5984dcdfb77c2",
".git/objects/19/f477ed16ba418bc10574d9356f2b722fac09d4": "8a2606c725e0696cee382355bceb61be",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/17aedec07f9574c6e863d4c20b720cb9196e4d": "ff39980f3b1fc1375062a053d517eb64",
".git/objects/2b/c27768eaba115853c1770bd60514d6523568af": "f0be56c9a0375d830e79fe2bcee6111d",
".git/objects/2f/19d8380e89a76901989120641a57d29d01d293": "78460b3e12f599c184e2de6198bcebe5",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/bac793d59b96574a9c78b4373343252a14424c": "a17a80edf3559817441f18897aacd9cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/39/a4e6bc74f3a1acb940dd7c2faaac354dd114fb": "5f793b60fb494853532d69523d64881b",
".git/objects/39/ec97fba41f6f7b1805dd8e3eeaa5bb3cca90b2": "ce4f59f369cd35ee6b700094bffb83aa",
".git/objects/3a/c0c7fa41c4b684cc29f564c38d400d9ecd8e85": "2af4f4ec3673b40306f5698fb24c0c8a",
".git/objects/46/c3e41779743eed39b73b6010ba2673b71fa514": "33ad54dd2541421b413a8b3ec0663fc3",
".git/objects/4e/1cd267220549722fc3298f0d64860abec7c981": "84b2b299d6215857bae137a5fc1fd479",
".git/objects/4e/281e94c7831abd6c45fdc858de85a50f936729": "a768a9cee52ae803a6cb1d21a3f237fa",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/66/e018946c1321139ca6c8ed31d53ed38d7343fb": "6408a69fd503a78c395603687a7c8b70",
".git/objects/69/f72cb9d9f431ff97a31359b27b89f539395781": "e5f7d317a8168e2f825f64cce7d0b6fe",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/71/aad807dbc574624fbc67787a817570f078e3c8": "d891f090af18e063a9720ad1df20cf70",
".git/objects/75/0d8266350a75caf804df479d4be8254fbd6a24": "462e197cd5952588833a884d5b90ee84",
".git/objects/77/4b1f5f7bb35bf0172b0626db94d72679f691e7": "7c8e3a47e4722b21cd0042908804a6bb",
".git/objects/77/73c82824fbecfe439b2adb06ea44937db922ae": "ac7890c03c8669b5eeec38f4056cae4d",
".git/objects/84/e0c276eb1503672a9c40a37c9d27a1169f5cc1": "94ba6914792a09312c49910c5037f3d1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/c5b6655858e8a5a5ef5db07dfad5ace29d382e": "f728f824985f3c63ccb6e6077f78671d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/155896ea0401fcf1258c76579ff9414313ebe5": "d633b9530d776da19164eaf34cddbac7",
".git/objects/8f/de920a4c24175c3fa5356cb7c0e0f2d18fb17d": "ad46d5e068d8e915b76d2db7896fa645",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b6/c7a0dc8c29a53abf4d8aaf7732da5292f61e50": "099a9560d98c8a34bac879f8743bbda2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/eaef3056b616fb5255fde4d35e8b941abb2913": "5b21df3e1bca682a2820e886b30b88c7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c2/412f73cce4e5e3b2cb2aa1a14f45000816e001": "4a4928946313d176bc2e3e3127234ff1",
".git/objects/c5/49342a285f706bf334d0f0a62011275511b1a4": "858cc40ffbc9a4927627ac6e5913d9d7",
".git/objects/c8/969b2290338c3fb6622b66bf36373b457f7b72": "5927b178538ea3f5c3d1a411f90423fe",
".git/objects/d0/99aaf3929de3f87a184f7a7dc2e4083af0b979": "6e1f53ab26be6aeb9c3d4c4e728fba46",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/ef06307c15b1346d19fb262edba7e76da88002": "04b106bd2efdbdcffec949f8513d4f72",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/5d12458a0deae75b278b71dfa966fd4ad192a3": "9cef17bc04024093061aa8ac46f1eb03",
".git/objects/dd/ff78c2a52a2c96a6c7af4ffdee0ecc4028ae29": "c1c05cfdb4697da903c407debfa26327",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/516376c13cc4980b40cdaec695119af2f44300": "dc8567889005aefaa005efd4a70afcb7",
".git/objects/f3/c018bf4dc93746840e17c1a78d92defc1c7369": "d6d41e0aad2c19334d0ad186c506c889",
".git/objects/fb/c21eb44e09549fe8bc7fc3c7e28e0beecb9116": "ea32b4ef171199c7fd0f10a552ef8d2d",
".git/refs/heads/main": "6a967bd0fd9b94bd492595c1f4417f3f",
"assets/AssetManifest.bin": "53f0b5c23c2097e865b3bc6d772523ef",
"assets/AssetManifest.json": "1ebb0d195ace34f054b7eaec03d8bff6",
"assets/assets/csv/Payments_and_Ussage/ABC8001.csv": "8136e584746ecaaec32326e6da8f1483",
"assets/assets/gif/account.gif": "9d7db1c6a643f3f85bf599d546a54a23",
"assets/assets/gif/CurrentUssage.gif": "8b3265a8a4e75115b5383cd36c75dd9e",
"assets/assets/gif/email.gif": "e62eae34f0c4a3115d83ec3c868953e9",
"assets/assets/gif/githublogo.gif": "1503e8227247f8ec4b44e5600b4e16f8",
"assets/assets/gif/logout.gif": "e42808a08e15509b4b62f3131b6fc65c",
"assets/assets/gif/message.gif": "562ee168f6fce83ae82a8ac331db2a64",
"assets/assets/gif/PaymentDoneGIF.gif": "3c1302282ad571e533241c419499112a",
"assets/assets/gif/PaymentHistory.gif": "f2da227fa6616fd962519cec433e5791",
"assets/assets/gif/PaymentStatus.gif": "a3405c19812620f0c3994a5f74447c10",
"assets/assets/gif/phone.gif": "655d331462753394bce07cb755ac7526",
"assets/assets/gif/UssageHistory.gif": "a890c5929e0e1162b8c37833eeafbd7d",
"assets/assets/images/Icon.png": "d75e069578750277f4cb9ef3b5ff28a5",
"assets/assets/images/IconTransparent.png": "c7190b7d4ba32abb8ab40bbfcc09e664",
"assets/assets/images/Logo.png": "aaa5c540cba075a577e34f5ba95f96bd",
"assets/assets/images/LogoTransparent.png": "d3dd37ab770c64a5bdfa2d29390a1cf6",
"assets/assets/images/NoInternetConnection.jpg": "80e73967406a4ceeb9757d0ac68a24cf",
"assets/assets/images/OSIApproved.png": "3264f7e7b13e0662c1cafb1aa1d6074d",
"assets/FontManifest.json": "6bf336df0398e988fcea0edf135a0499",
"assets/fonts/MaterialIcons-Regular.otf": "d0b9993f10e2ea565900f05d35c9971f",
"assets/NOTICES": "50863dc6d178f571467f35f17b5c459f",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "c17d858d09fb1c596ef0adbf08872086",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "6d8ab59254a120b76bf53f167e809470",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "382b72c2868a381d3e1935f454d929cd",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "badd59a1485a0e38abae620083d58577",
"icons/Icon-512.png": "f721300f1bf6069d1b6a503254ca2e07",
"icons/Icon-maskable-192.png": "badd59a1485a0e38abae620083d58577",
"icons/Icon-maskable-512.png": "f721300f1bf6069d1b6a503254ca2e07",
"index.html": "42c0e2f9af55b29da63d29014b0085aa",
"/": "42c0e2f9af55b29da63d29014b0085aa",
"main.dart.js": "32005c1f685b2533655ebfa4e678c1ae",
"manifest.json": "aeca11319d61fe95202f8b3b67c7076a",
"version.json": "83dff629569cdda08311eb92760bbc0f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
