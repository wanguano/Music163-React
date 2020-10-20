/**
 * 
 * @param {Element} element 元素
 * @param {} to 
 * @param {Number} duration 总时长
 */
export function scrollTo(element, to, duration) {
  // 当前播放时间
  if (duration <= 0) return;
  // 目标-当前距离的卷曲的top
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;

  setTimeout(function() {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) return;
      scrollTo(element, to, duration - 10);
  }, 10);
}