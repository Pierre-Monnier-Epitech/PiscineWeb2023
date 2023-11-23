const acceptsCookies = document.querySelector('footer div a');
const deleteCookie = document.getElementById('deleteCookieBtn');

acceptsCookies.addEventListener('click', function(e) {
    e.preventDefault();
    // Créer le cookie
    const expires = '; expires=' + new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = 'acceptsCookies=true' + expires + '; path=/; SameSite=None; Secure';

    // Afficher le message de suppression du cookie
    const deleteBox = document.createElement('div');
    deleteBox.innerHTML = 'Delete the cookie <button id="deleteCookieBtn">Delete</button>';
    setTimeout(function() {
        document.querySelector('footer').appendChild(deleteBox);
        // Attacher l'événement au bouton après l'ajout dans le DOM
        const deleteCookieBtn = document.getElementById('deleteCookieBtn');
        deleteCookieBtn.addEventListener('click', function() {
        document.cookie = 'acceptsCookies=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=None; Secure';
        deleteBox.remove();
        setTimeout(function() {
        document.querySelector('footer div').style.display = '';
        }, 1000);
        });
    }, 1000);

    if (acceptsCookies){
    document.querySelector('footer div').style.display = 'none';
    }

    
    
});