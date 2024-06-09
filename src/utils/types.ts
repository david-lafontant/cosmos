export type Apod = {
  copyright: string | null
  date: string
  explanation: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
  url: string
}


export type Apods = Apod[];
