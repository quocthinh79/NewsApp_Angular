export interface NewsRss {
  rss: IRssObject;
}

export interface IRssObject {
  $: any;
  channel: Array<IRssChannel>;
}

export interface IRssChannel {
  title: Array<string>;
  "atom:link": Array<string>;
  link: Array<string>;
  description: Array<string>;
  pubDate: Array<string>;
  generator: Array<string>;
  language: Array<string>;
  "sy:updatePeriod": Array<string>;
  "sy:updateFrequency": Array<string>;
  item: Array<IRssItem>;
}
//
// export interface IRssImage {
//   link: Array<string>;
//   title: Array<string>;
//   url: Array<string>;
// }

export interface IRssItem {
  title: Array<string>;
  link: Array<string>;
  image: Array<string>;
  pubDate: Date;
  "dc:creator": Array<string>;
  guid: any;
  description: Array<string>;
}
