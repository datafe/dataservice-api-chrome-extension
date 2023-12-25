declare module 'virtual:reload-on-update-in-background-script' {
  export const reloadOnUpdate: (watchPath: string) => void;
  export default reloadOnUpdate;
}

declare module 'virtual:reload-on-update-in-view' {
  const refreshOnUpdate: (watchPath: string) => void;
  export default refreshOnUpdate;
}

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.json' {
  const content: string;
  export default content;
}

// interface Browser {
//   runtime: {
//     /** open Option page */
//     openOptionsPage: () => void;
//   }
// }

// declare var browser: Browser;


/* ======== APP Types ====== */

declare type ApiMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

declare interface ApiParam {
  name: string;
  value: any;
}

declare interface ApiData {
  apiId?: string;
  apiMethod?: ApiMethod;
  apiName?: string;
  apiPath?: string;
  description?: string;

  // -- settings --
  requestHeaderContentType?: string;
  apiParams?: ApiParam[];
  sheetDisplayDataKey?: string;
}

