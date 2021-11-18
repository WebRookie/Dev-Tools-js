
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