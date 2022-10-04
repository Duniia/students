const cacheName = 'cache-json';

//Når websitet indlæses cache ressource nævnt i listen
self.addEventListener('install', function(event) {
event.waitUntil(
caches.open(cacheName).then(function(cache) {
    return cache.addAll(["/students/", 
    "/students/index.html",
    "/students/morten.png", 
    "/students/olivia.png", 
    "/students/nina.png", 
    "/students/members.json", 
    "/students/mystyle.css",
]);
})
);
});

// Hvis resource ikke er tilgængelig online, 
//så søg i cachen efter et match.
self.addEventListener('fetch', function(event) {
    event.respondWith (
        fetch(event.request).catch(() =>
        catches.open(cacheName).then (cache => cache.match(event.request))
        )
    );
});

// Hvis resource ikke er tilgængelig online, 
//så søg i cachen efter et match.
self.addEventListener('fetch', function(event) {
    event.respondWith (
        fetch(event.request).catch(() =>
        catches.open(cacheName).then (cache => cache.match(event.request))
        )
    );
});