import soraBoldEot from '~/assets/fonts/Sora/Sora-Bold.eot'
import soraBoldWoff from '~/assets/fonts/Sora/Sora-Bold.woff'
import soraBoldWoff2 from '~/assets/fonts/Sora/Sora-Bold.woff2'
import soraExtraBoldEot from '~/assets/fonts/Sora/Sora-ExtraBold.eot'
import soraExtraBoldWoff from '~/assets/fonts/Sora/Sora-ExtraBold.woff'
import soraExtraBoldWoff2 from '~/assets/fonts/Sora/Sora-ExtraBold.woff2'
import soraLightEot from '~/assets/fonts/Sora/Sora-Light.eot'
import soraLightWoff from '~/assets/fonts/Sora/Sora-Light.woff'
import soraLightWoff2 from '~/assets/fonts/Sora/Sora-Light.woff2'
import soraMediumEot from '~/assets/fonts/Sora/Sora-Medium.eot'
import soraMediumWoff from '~/assets/fonts/Sora/Sora-Medium.woff'
import soraMediumWoff2 from '~/assets/fonts/Sora/Sora-Medium.woff2'
import soraRegularEot from '~/assets/fonts/Sora/Sora-Regular.eot'
import soraRegularWoff from '~/assets/fonts/Sora/Sora-Regular.woff'
import soraThinEot from '~/assets/fonts/Sora/Sora-Thin.eot'
import soraThinWoff from '~/assets/fonts/Sora/Sora-Thin.woff'
import soraThinWoff2 from '~/assets/fonts/Sora/Sora-Thin.woff2'
import { css } from 'styled-components'

export const soraCss = css`
  @font-face {
    font-family: 'Sora';
    src: local('Sora'), url('${soraThinWoff2}') format('woff2'), url('${soraThinWoff}') format('woff'),
      url('${soraThinEot}?#iefix') format('embedded-opentype');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Sora';
    src: local('Sora'), url('${soraLightWoff2}') format('woff2'), url('${soraLightWoff}') format('woff'),
      url('${soraLightEot}?#iefix') format('embedded-opentype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Sora';
    src: local('Sora'), url('${soraRegularWoff}') format('woff'),
      url('${soraRegularEot}?#iefix') format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Sora';
    src: local('Sora'), url('${soraMediumWoff2}') format('woff2'), url('${soraMediumWoff}') format('woff'),
      url('${soraMediumEot}?#iefix') format('embedded-opentype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Sora';
    src: local('Sora'), url('${soraBoldWoff2}') format('woff2'), url('${soraBoldWoff}') format('woff'),
      url('${soraBoldEot}?#iefix') format('embedded-opentype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Sora';
    src: local('Sora'), url('${soraExtraBoldWoff2}') format('woff2'), url('${soraExtraBoldWoff}') format('woff'),
      url('${soraExtraBoldEot}?#iefix') format('embedded-opentype');
    font-weight: 800;
    font-style: normal;
  }
`
