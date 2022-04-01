
/**
 *   判断是否为手机号
 * @param {手机号，支持字符串和数字} PhoneNumber 
 * @returns Boolean
 */
export function isPhoneNumber(PhoneNumber) {
  if(!PhoneNumber || PhoneNumber === "" ){
    return false;
  }
  // 字母
  if( isNaN(Number(PhoneNumber)) ) {
    return false;
  }
    const reg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
    if( reg.text(Number(PhoneNumber) ) ) {
        return true;
    }else {
      return false;
    }
}
/**
 *  图片base64转File
 * @param {base64的文件类型} base64
 * @returns File
 */
export function base64ToFileObj (base64) {
  const value = base64.split(',')[1]
  const data = atob(value);
  let array = [];
  for(let i=0; i< data.length; i++) {
    array.push(data.charCodeAt(i));
  }
  const blob = new Blob([new Uint8Array(array), { type: "image/jpeg" }]);
  return new File([blob], new Date() + '.jpg');
}


/**
 * web文件流下载
 * @param { 二进制文件流 } res
 * @param { 文件名,需要带文件类型 } fileName 
 */
export function exportFile = (res, fileName) => {
  const blob = new Blog([res])
//   非IE下载
  if ('download' in document.createElement('a') ) {
    const link = document.createElement('a')
    link.download = fileName
    link.style.display = 'none'
    link.href = URL.createObjectURL(blob)
    document.body.appendChild(link)
    link.click()
    URL.revokeObjectURL(link.href)  // 释放URl
    document.body.removeChild(link)
  } else { // IE10+ 下载
    navigator.msSaveBlob(blob, fileName)
  }
}

/**
 * 获取地址栏URL参数值
 * @field { 获取的字段名字 } String
 */
export function getParams(field) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] === field){return pair[1];}
    }
    return null;
}


/**
 * 
 * @param {需要防抖的方法} callFunction 
 * @param {延时时间} delay 
 * @returns null 没有返回值
 */

export function debounce(callFunction, delay) {
  let timer = null;
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      callFunction()
    }, delay)
  }
}
