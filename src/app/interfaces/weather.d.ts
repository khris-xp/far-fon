export interface IWeather {
    location: ILocation
    forecast: IForecast
}

export interface ILocation {
    code: string
    name: string
    timezone: string
    coordinates: ICoordinates
}

export interface ICoordinates {
    latitude: number
    longitude: number
}

export interface IForecast {
    items: IItem[]
    forecastDate: string
    nextUpdate: string
    source: string
    point: string
    fingerprint: string
}

export interface IItem {
    date: string
    dateWithTimezone: string
    freshSnow?: number
    snowHeight: null
    weather: IWeather
    prec: IPrec
    sunHours: number
    rainHours: null
    temperature: ITemperature
    wind: IWind
    windchill: IWindchill
    snowLine: ISnowLine
    astronomy: IAstronomy
}

export interface IWeather {
    state: number
    text: string
    icon: string
}

export interface IPrec {
    sum: number
    probability: number
    sumAsRain: null
    class: number
}

export interface ITemperature {
    min: number
    max: number
    avg: null
}

export interface IWind {
    unit: string
    direction: string
    text: string
    avg: null
    min: number
    max: number
    gusts: IGusts
    significationWind: boolean
}

export interface IGusts {
    value: null
    text: null
}

export interface IWindchill {
    min: number
    max: number
    avg: null
}

export interface ISnowLine {
    avg: null
    min: null
    max: null
    unit: string
}

export interface IAstronomy {
    dawn: string
    sunrise: string
    suntransit: string
    sunset: string
    dusk: string
    moonrise?: string
    moontransit?: string
    moonset: string
    moonphase: number
    moonzodiac: number
}
