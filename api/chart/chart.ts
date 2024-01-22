import http from '../http.js'
enum API {
  RIVER = "/app/chart/themetiver/draw",
  HEAT = "/app/chart/heatmap/draw",
  FUNNEL = "/app/chart/funnel/draw",
  POLAR = "/common/chart/polar_bar",
  MORE_BAR = "/common/chart/more_bar",
  BAR = "/common/chart/bar",
  KLINE = "/common/chart/candlestick",
  RADAR = "/common/chart/radar",
  LINE = "/common/chart/line",
  PIE = "/common/chart/pie",
  SCATTER = "/app/chart/scatter/draw",
  CHART_LIST = "/common/generated_chart/list"
}

export function lineApi(data: any) {
  return http.POST(API.LINE, data)
}

export function pieApi(data: any) {
  return http.post(API.PIE, data)
}

export function scatterApi(data: any) {
  return http.post(API.SCATTER, data)
}

export function radarApi(data: any) {
  return http.post(API.RADAR, data)
}

export function kLineApi(data: any) {
  return http.post(API.KLINE, data)
}

export function barApi(data: any) {
  return http.post(API.BAR, data)
}

export function moreBarApi(data: any) {
  return http.post(API.MORE_BAR, data)
}

export function PolarBarApi(data: any) {
  return http.post(API.POLAR, data)
}

export function ChartListApi() {
  return http.get(API.CHART_LIST)
}

export function FunnelApi(data: any) {
  return http.post(API.FUNNEL, data)
}

export function HeatApi(data: any) {
  return http.post(API.HEAT, data)
}

export function RiverApi(data: any) {
  return http.post(API.RIVER, data)
}
