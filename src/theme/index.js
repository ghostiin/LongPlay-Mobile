import 'typeface-libre-barcode-39-text'; // 引入本地字体
import 'typeface-lora';
import 'typeface-poppins';

// 扩大点击范围 !1CE
const extendClick = () => {
	return `
	  position: relative;
	  &:before {
		content: '';
		position: absolute;
		top: -10px; bottom: -10px; left: -10px; right: -10px;
	  };
	`;
};

// 一行显示不下则省略号
const noWrap = () => `
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
	`;

// 一行显示不下则换行，不强制打断单词除非一行显示不了一个单词
const overflowWrap = () => `
word-break:keep-all;
word-wrap: break-word;
`;

const scrollHContent = () => `
	display:inline-box;
`;

const moreWrap = () => `
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
word-break:break-all;
`;

export default {
	bgColorLight: '#9377D2',
	bgColorDark: '#432D77',
	mainColor: '#783EDE',
	secondaryColor: '#594190',
	darkColor: '#18141A',
	textColor: '#fff',
	subColor: 'rgba(255,255,255,0.5)',
	boxShadow: '0rem 0rem 2rem 0rem rgba(0, 0, 0, 0.4)',
	specialFont: `'Libre Barcode 39 Text', cursive`,
	sansFont: `'Poppins', sans-serif`,
	seridFont: `'Lora', serif`,
	logoFont: `'MuseoModerno-Bold', cursive`,
	noWrap,
	moreWrap,
	overflowWrap,
	scrollHContent,
	extendClick
};
