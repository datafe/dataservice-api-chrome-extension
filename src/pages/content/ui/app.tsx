import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // chrome?.webNavigation?.onCompleted?.addListener?.(
    //   async (e) => {
    //     await chrome?.action?.openPopup?.();
    //   },
    //   {
    //     url: [
    //       { urlMatches: 'https://ds-cn-shanghai.data.aliyun.com/' },
    //     ]
    //   },
    // );
  }, []);

  return <div />;
}
