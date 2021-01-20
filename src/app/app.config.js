export function AppConfig($routeProvider) {
    $routeProvider.when('/', {
        template: '<app></app>'
    })
    .otherwise('/');
}