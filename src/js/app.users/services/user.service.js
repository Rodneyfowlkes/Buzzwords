export default function User (SERVER, $http, $cookies, $state) {

    this.register       = register
    this.login          = login
    this.logOut         = logOut
    this.isLoggedIn     = isLoggedIn
    this.profile        = profile

    function register (user) {
        return $http.post(SERVER.URL + 'register', user)
    }

    function login (user) {
        return $http.post(SERVER.URL + 'login', user)
    }

    function logOut () {
        $cookies.remove('access_token')
        console.log('Logged out!')
    }

    function isLoggedIn () {
        return $cookies.get('access_token') ? true : false
    }

    function profile (config){
        return $http.get(SERVER.URL + 'profile', config)
    }

}

User.$inject = ['SERVER', '$http', '$cookies', '$state']
