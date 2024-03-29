import { ROUTE_CONFIGURATION } from "../constants/appConfiguration"

export function getMenuItemBasedOnUrl () : string {
    const url = window.location.href
    const serviceHost = import.meta.env.VITE_SERVICE_HOST
    const servicePort = import.meta.env.VITE_SERVICE_PORT
    console.log(serviceHost, servicePort)
    const currentPath = url.replace(`http://${serviceHost}:${servicePort}`, '')

    const match = ROUTE_CONFIGURATION.find(config => currentPath.startsWith('/' + config.path))
    if (!match) return '1'
    const index = ROUTE_CONFIGURATION.map(config => config.path).indexOf(match.path)
    return `${index + 1}`
  }