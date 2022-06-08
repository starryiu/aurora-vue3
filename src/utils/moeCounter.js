const themes = {
    asoul:'.gif',
    gelbooru:'.gif',
    'gelbooru-h':'.png',
    moebooru:'.gif',
    'moebooru-h':'.png',
    rule34:'.gif',
};
const createOneImageSrc  = (num,theme,rootUrl)=>{
    (num < 0 || num >= 10) && console.error('数字取值范围应该为 0~9 之间的整数')
    return `${rootUrl}/${theme}/${num}${themes[theme]}`
};
/**
 * @param {Object} config
 * @param {number} config.number - 数字.
 * @param {string} config.theme - 可选 ['asoul','gelbooru','gelbooru-h','moebooru','moebooru-h','rule34'].
 * @param {number} config.length - 长度.
 * @param {string} config.rootUrl - 根 url,通常不需要改，除非比 jsdelivr 更快。
 * @returns {[]}
 */
export const createImageSrc = (config) => {
    let numberArr = String(config.number).split('');
    let len = config.length ? config.length : numberArr.length;
    let theme = config.theme ? config.theme : 'asoul';
    let rootUrl = config.rootUrl ? config.rootUrl : '//fastly.jsdelivr.net/gh/journey-ad/Moe-counter@master/assets/theme';
    (len && (len <= 0 || len > 10)) && console.error('长度取值范围应该为 1~10之间的整数');
    !themes[theme] && console.error('未找到相应主题');
    const src = [];
    for(let i=0;i<len;i++){
        if(numberArr[i]){
            src.push(createOneImageSrc(numberArr[i],theme,rootUrl))
        }else{
            src.unshift(createOneImageSrc(0,theme,rootUrl))
        }
    }
    return src
};
