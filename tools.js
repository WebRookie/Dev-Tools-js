
/**
 *   判断是否为手机号
 * @param {手机号，支持字符串和数字} PhoneNumber 
 * @returns Boolean
 */
export function isPhoneNumber(PhoneNumber) {
  if( (PhoneNumber??"") === "" ){
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
