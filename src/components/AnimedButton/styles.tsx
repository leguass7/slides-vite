import styled, { css } from 'styled-components'

export const Btn = styled.a`
  position: relative;
  text-decoration: none;
  color: #222;
  padding: 20px;
  background: #efefef;
  text-transform: uppercase;
  text-align: center;
  margin: 20px;
  flex-grow: 1;
  cursor: pointer;
`

// @mixin magic-border($width, $color, $duration, $direction){
//     position:relative;
//       &:before{
//         content:'';
//         position:absolute;
//         width:calc(100% + #{$width * 2});
//         height:calc(100% + #{$width * 2});
//         top:calc(#{$width}/-1);
//         left:calc(#{$width}/-1);
//         background:linear-gradient(to right, $color 0%, $color 100%), linear-gradient(to top, $color 50%, transparent 50%), linear-gradient(to top, $color 50%, transparent 50%), linear-gradient(to right, $color 0%, $color 100%), linear-gradient(to left, $color 0%, $color 100%);
//         background-size:100% $width, $width 200%, $width 200%, 0% $width, 0% $width;
//         background-position:50% 100%, 0% 0%, 100% 0%, 100% 0%, 0% 0%;
//         background-repeat:no-repeat, no-repeat;
//         transition:transform $duration ease-in-out, background-position $duration ease-in-out, background-size $duration ease-in-out;
//         transform:scaleX(0) rotate(180deg * $direction);
//         transition-delay:$duration*2, $duration, 0s;
//       }
//       &:hover{
//         &:before{
//           background-size:200% $width, $width 400%, $width 400%, 55% $width, 55% $width;
//           background-position:50% 100%, 0% 100%, 100% 100%, 100% 0%, 0% 0%;
//           transform:scaleX(1) rotate(180deg * $direction);
//           transition-delay:0s, $duration, $duration*2;
//         }
//       }
//   }

//   @mixin magic-border-mask($width, $duration, $background, $direction){
//     position:relative;
//       &:before{
//         content:'';
//         position:absolute;
//         width:calc(100% + #{$width * 2});
//         height:calc(100% + #{$width * 2});
//         top:calc(#{$width}/-1);
//         left:calc(#{$width}/-1);
//         mask:linear-gradient(to right, #000 0%, #000 100%), linear-gradient(to top, #000 50%, transparent 50%), linear-gradient(to top, #000 50%, transparent 50%), linear-gradient(to right, #000 0%, #000 100%), linear-gradient(to left, #000 0%, #000 100%);
//         mask-size:100% $width, $width 200%, $width 200%, 0% $width, 0% $width;
//         mask-position:50% 100%, 0% 0%, 100% 0%, 100% 0%, 0% 0%;
//         mask-repeat:no-repeat, no-repeat;
//         transition:transform $duration ease-in-out, mask-position $duration ease-in-out, mask-size $duration ease-in-out;
//         transform:scaleX(0) rotate(180deg * $direction);
//         transition-delay:$duration*2, $duration, 0s;
//         background:$background;
//       }
//       &:hover{
//         &:before{
//           mask-size:200% $width, $width 400%, $width 400%, 55% $width, 55% $width;
//           mask-position:50% 100%, 0% 100%, 100% 100%, 100% 0%, 0% 0%;
//           transform:scaleX(1) rotate(180deg * $direction);
//           transition-delay:0s, $duration, $duration*2;
//         }
//       }
//   }

//   body{
//     display:flex;
//     flex-wrap:wrap;
//     justify-content:center;
//     align-items:center;
//     height:100vh;
//     .wrap{
//       display:flex;
//       justify-content:space-between;
//       flex-wrap:wrap;
//       width:450px;
//       a{
//         text-decoration:none;
//         color:#222;
//         padding:20px;
//         background:#efefef;
//         text-transform:uppercase;
//         text-align:center;
//         @include magic-border(2px, blue, 0.3s, 0);
//         font-family:'Oswald';
//         margin:20px;
//         flex-grow:1;
//         cursor:pointer;
//         &:nth-of-type(2){
//           @include magic-border(4px, #222, 0.2s, 1);
//         }
//         &:nth-of-type(3){
//           @include magic-border-mask(10px, 0.4s, linear-gradient(to bottom, #40e0d0, #ff8c00, #ff0080), 0);
//           align-self:flex-end;
//         }
//       }
//     }
//   }
